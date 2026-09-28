#!/usr/bin/env node
/**
 * Egypt Limo — Weekly Route Price Feed Sync Script
 * 
 * Fetches updated indicative pricing for approved transfer routes from Egypt Limo Partner API
 * and updates the local cache (src/data/price-feed.json).
 * 
 * Run manually or via weekly cron job:
 * node scripts/sync-prices.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const CACHE_FILE = path.join(ROOT_DIR, 'src', 'data', 'price-feed.json');

// Load environment variables (supports standard process.env or .env file)
function loadEnv() {
  const envPath = path.join(ROOT_DIR, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

const CONFIG = {
  host: process.env.EGYPTLIMO_PARTNER_API_HOST,
  clientId: process.env.EGYPTLIMO_CLIENT_ID,
  clientSecret: process.env.EGYPTLIMO_CLIENT_SECRET,
  merchantId: process.env.EGYPTLIMO_MERCHANT_ID,
  keyId: process.env.EGYPTLIMO_KEY_ID,
  signingSecret: process.env.EGYPTLIMO_SIGNING_SECRET,
};

// Fixed list of approved routes with exact coordinates
const APPROVED_ROUTES = [
  {
    slug: 'cairo-airport-to-giza-pyramids',
    pickup: { lat: 30.1219, lng: 31.4056, address: 'Cairo International Airport (CAI)' },
    dropoff: { lat: 29.9773, lng: 31.1325, address: 'Giza Pyramids & Grand Egyptian Museum' }
  },
  {
    slug: 'cairo-airport-to-downtown-cairo',
    pickup: { lat: 30.1219, lng: 31.4056, address: 'Cairo International Airport (CAI)' },
    dropoff: { lat: 30.0444, lng: 31.2357, address: 'Tahrir Square, Downtown Cairo' }
  },
  {
    slug: 'cairo-airport-to-new-cairo',
    pickup: { lat: 30.1219, lng: 31.4056, address: 'Cairo International Airport (CAI)' },
    dropoff: { lat: 30.0267, lng: 31.4913, address: 'New Cairo & 5th Settlement' }
  },
  {
    slug: 'cairo-airport-to-alexandria',
    pickup: { lat: 30.1219, lng: 31.4056, address: 'Cairo International Airport (CAI)' },
    dropoff: { lat: 31.2001, lng: 29.9187, address: 'Alexandria City & Mediterranean Coast' }
  },
  {
    slug: 'cairo-airport-to-zamalek',
    pickup: { lat: 30.1219, lng: 31.4056, address: 'Cairo International Airport (CAI)' },
    dropoff: { lat: 30.0626, lng: 31.2197, address: 'Zamalek Island, Cairo' }
  },
  {
    slug: 'cairo-airport-to-heliopolis',
    pickup: { lat: 30.1219, lng: 31.4056, address: 'Cairo International Airport (CAI)' },
    dropoff: { lat: 30.0897, lng: 31.3284, address: 'Heliopolis & Korba, Cairo' }
  },
  {
    slug: 'cairo-airport-to-ain-sokhna',
    pickup: { lat: 30.1219, lng: 31.4056, address: 'Cairo International Airport (CAI)' },
    dropoff: { lat: 29.6000, lng: 32.3167, address: 'Ain Sokhna, Red Sea Coast' }
  },
  {
    slug: 'cairo-airport-to-hurghada',
    pickup: { lat: 30.1219, lng: 31.4056, address: 'Cairo International Airport (CAI)' },
    dropoff: { lat: 27.2579, lng: 33.8116, address: 'Hurghada City & El Gouna' }
  }
];

// Helper: Calculate HMAC SHA-256 Signature
function computeHmacSignature(secret, data) {
  return crypto.createHmac('sha256', secret).update(data).digest('hex');
}

// Helper: Obtain OAuth2 Access Token
async function getAccessToken() {
  const tokenUrl = `https://${CONFIG.host}/api/v1/integration/oauth2/token`;
  console.log(`[Price Feed] Authenticating with Egypt Limo Partner API at ${tokenUrl}...`);

  const res = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: CONFIG.clientId,
      client_secret: CONFIG.clientSecret
    })
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Authentication failed (${res.status}): ${errorText}`);
  }

  const data = await res.json();
  return data.access_token;
}

// Helper: Request quote for a single route
async function fetchQuote(accessToken, route) {
  const path = '/api/v1/integration/quotes';
  const quoteUrl = `https://${CONFIG.host}${path}`;

  // Future date (e.g. 7 days from now at 10:00 UTC)
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7);
  futureDate.setUTCHours(10, 0, 0, 0);

  const payload = {
    pickup_location: route.pickup,
    dropoff_location: route.dropoff,
    pickup_datetime: futureDate.toISOString(),
    passengers: 2
  };

  const bodyStr = JSON.stringify(payload);
  const timestamp = new Date().toISOString();
  const nonce = crypto.randomUUID();

  // Signature calculation: timestamp + "\n" + nonce + "\n" + body
  const canonicalString = `${timestamp}\n${nonce}\nPOST\n${path}\n${bodyStr}`;
  const signature = computeHmacSignature(CONFIG.signingSecret, canonicalString);

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'X-Merchant-Id': CONFIG.merchantId,
    'X-Key-Id': CONFIG.keyId,
    'X-Timestamp': timestamp,
    'X-Nonce': nonce,
    'X-Signature': signature,
    'Content-Type': 'application/json'
  };

  const res = await fetch(quoteUrl, {
    method: 'POST',
    headers,
    body: bodyStr
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Quote failed for ${route.slug} (${res.status}): ${errText}`);
  }

  return await res.json();
}

async function main() {
  console.log('====================================================');
  console.log('  Egypt Limo — Weekly Route Price Feed Synchronizer ');
  console.log('====================================================');

  // Verify credentials configuration
  const missing = Object.entries(CONFIG)
    .filter(([_, val]) => !val)
    .map(([key]) => key);

  if (missing.length > 0) {
    console.warn(`[Warning] Missing credentials in environment: ${missing.join(', ')}`);
    console.warn('To sync with live Egypt Limo API, set these in your .env file or server environment:');
    console.warn('  EGYPTLIMO_PARTNER_API_HOST, EGYPTLIMO_CLIENT_ID, EGYPTLIMO_CLIENT_SECRET,');
    console.warn('  EGYPTLIMO_MERCHANT_ID, EGYPTLIMO_KEY_ID, EGYPTLIMO_SIGNING_SECRET\n');
    console.log('Existing price cache in src/data/price-feed.json is retained safely.');
    return;
  }

  // Read existing cache to retain on partial failures
  let existingCache = {
    currency: 'USD',
    last_updated: new Date().toISOString(),
    disclaimer: 'Prices are indicative and checked weekly. Final price confirmed during booking.',
    routes: {}
  };

  if (fs.existsSync(CACHE_FILE)) {
    try {
      existingCache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    } catch (e) {
      console.warn('[Notice] Could not parse existing cache file, creating fresh cache.');
    }
  }

  let accessToken = null;
  try {
    accessToken = await getAccessToken();
    console.log('✓ Successfully obtained OAuth2 access token.');
  } catch (err) {
    console.error(`✗ OAuth error: ${err.message}`);
    console.log('Retaining existing cached prices.');
    return;
  }

  const nowIso = new Date().toISOString();
  let updatedCount = 0;
  let failedCount = 0;

  for (const route of APPROVED_ROUTES) {
    console.log(`\n[Syncing] Route: ${route.slug}...`);
    try {
      const quote = await fetchQuote(accessToken, route);
      if (quote && Array.isArray(quote.options) && quote.options.length > 0) {
        // Calculate lowest starting price
        const prices = quote.options.map(opt => Number(opt.price)).filter(p => !isNaN(p) && p > 0);
        const startingPrice = prices.length > 0 ? Math.min(...prices) : 0;

        existingCache.routes[route.slug] = {
          starting_price: startingPrice,
          currency: quote.currency || 'USD',
          updated_at: nowIso,
          options: quote.options.map(opt => ({
            vehicle_class: opt.vehicle_class,
            price: Number(opt.price),
            estimated_duration_mins: opt.estimated_duration_mins || 60
          }))
        };

        updatedCount++;
        console.log(`✓ Updated ${route.slug}: starting from ${quote.currency || 'USD'} ${startingPrice}`);
      } else {
        console.warn(`! No options returned for ${route.slug}, keeping existing cache.`);
        failedCount++;
      }
    } catch (err) {
      console.error(`✗ Failed to update ${route.slug}: ${err.message}`);
      console.log(`  -> Retained previous cached record for ${route.slug}`);
      failedCount++;
    }

    // Small delay between route queries (avoid rate limits)
    await new Promise(resolve => setTimeout(resolve, 800));
  }

  existingCache.last_updated = nowIso;
  fs.writeFileSync(CACHE_FILE, JSON.stringify(existingCache, null, 2), 'utf8');

  console.log('\n====================================================');
  console.log(`Sync Complete: ${updatedCount} updated, ${failedCount} retained.`);
  console.log(`Saved to: ${CACHE_FILE}`);
  console.log('====================================================');
}

main().catch(err => {
  console.error('Fatal error during price sync:', err);
  process.exit(1);
});

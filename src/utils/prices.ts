import priceFeed from '../data/price-feed.json';

export interface RoutePriceOption {
  vehicle_class: string;
  price: number;
  estimated_duration_mins: number;
}

export interface RouteCachedPrice {
  startingPrice: number;
  currency: string;
  updatedAt: string;
  formattedUpdatedAt: string;
  disclaimer: string;
  options: RoutePriceOption[];
}

/**
 * Returns the cached indicative price for a given route slug.
 * Follows Egypt Limo retailer price feed display guidelines.
 */
export function getRoutePrice(slug: string, fallbackStartingPrice: number = 30): RouteCachedPrice {
  const routesData = (priceFeed as any)?.routes || {};
  const routeData = routesData[slug];

  const currency = routeData?.currency || priceFeed.currency || 'USD';
  const startingPrice = routeData?.starting_price || fallbackStartingPrice;
  const updatedAt = routeData?.updated_at || priceFeed.last_updated;

  // Format date nicely (e.g. Sep 28, 2026)
  let formattedUpdatedAt = 'weekly';
  try {
    const d = new Date(updatedAt);
    formattedUpdatedAt = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch (e) {
    formattedUpdatedAt = 'weekly';
  }

  const disclaimer = `From ${currency} ${startingPrice} — price checked weekly (${formattedUpdatedAt}). Final price confirmed during booking.`;

  return {
    startingPrice,
    currency,
    updatedAt,
    formattedUpdatedAt,
    disclaimer,
    options: routeData?.options || []
  };
}

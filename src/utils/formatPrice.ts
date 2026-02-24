export function formatPrice(price: number): string {
  if (price >= 10000) {
    return `€${(price / 1000).toFixed(1)}k`;
  }
  if (price < 1) {
    return `€${price.toFixed(2)}`;
  }
  return `€${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatPriceFull(price: number): string {
  return `€${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

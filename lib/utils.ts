/**
 * Utility functions for Product Insight AI
 */

export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  category?: string;
  [key: string]: unknown;
}

export interface AnalysisRequest {
  sku: string;
  query: string;
}

export interface AnalysisResponse {
  success: boolean;
  sku: string;
  productData: Product;
  query: string;
  analysis: string;
}

/**
 * Format price as currency
 */
export function formatPrice(price: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Validate SKU format
 */
export function validateSKU(sku: string): boolean {
  return sku.trim().length > 0 && sku.trim().length <= 50;
}

/**
 * Validate query format
 */
export function validateQuery(query: string): boolean {
  return query.trim().length > 0 && query.trim().length <= 500;
}

/**
 * Format product data for display
 */
export function formatProductData(product: Product): string {
  const lines = [
    `SKU: ${product.sku}`,
    `Name: ${product.name}`,
    `Price: ${formatPrice(product.price)}`,
    `Category: ${product.category || 'N/A'}`,
    `Description: ${product.description}`,
  ];
  return lines.join('\n');
}

/**
 * Extract key insights from analysis
 */
export function extractKeyPoints(analysis: string): string[] {
  const points = analysis
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .slice(0, 5);
  return points;
}

export const getFilters = (products, property) => [
  ...new Set(products.map(product => product[property]))
];

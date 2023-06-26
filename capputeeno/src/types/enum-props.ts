export enum FilterTypes {
  ALL = 'all',
  MUGS = 'mugs',
  TSHIRTS = 't-shirts',
}

export enum FilterPriority {
  BEST_SELLER = 'sales',
  PRICE = 'price_in_cents',
  NEWS = 'created_at',
}

export enum categoryNames {
  't-shirts' = 'Camiseta',
  'mugs' = 'Caneca',
}

export enum Category {
  ALL = 'TODOS OS PRODUTOS',
  TSHIRTS = 'CAMISETAS',
  MUGS = 'CANECAS',
}

export enum PriceOrder {
  HIGHEST_LOWEST = 'Preço: Maior - menor',
  LOWEST_HIGHEST = 'Preço: Menor - maior',
  BESTSELLERS = 'Mais vendidos',
  NEWS = 'Novidades',
}

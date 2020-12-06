export interface ICard {
  id: string
  title: string
  description: string
  img: string
  created_at: number
}

export enum OrderBy {
  title = 'title',
  created_at = 'created_at',
}

export enum Order {
  asc = 'asc',
  desc = 'desc',
}
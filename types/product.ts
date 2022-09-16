import { ReactNode } from 'react'

export interface IProduct {
  quantity: number
  _id: string
  price: number
  colorway: string
  name: string
  image: any
  product: {
    _id: string
    image: Array<string>
    name: string
    slug: {
      current: string
    }
    price: number
    retailPrice: number
    styleCode: string
    releaseDate: string
    colorway: string
    details: string
  }
}

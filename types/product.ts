import { ReactNode } from 'react'

export interface IProduct {
  price: ReactNode
  colorway: ReactNode
  name: ReactNode
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

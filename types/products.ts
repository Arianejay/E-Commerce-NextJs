export interface IProducts {
  products: {
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
  }[]
}

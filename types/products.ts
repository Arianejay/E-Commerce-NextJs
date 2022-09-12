export interface IProducts {
  products: {
    _id: string
    image: Array<string>
    name: string
    slug: string
    price: number
    retailPrice: number
    styleCode: string
  }[]
}

import { IProduct } from './product'

export interface IContext {
  cartItems: Array<IProduct>
  totalPrice: number
  totalQuantities: number
  qty: number
  incQty: any
  decQty: any
  onAdd: Function
  onRemove: Function
  toggleQty: Function
}

export interface IContext {
  cartItems: Array<string>
  totalPrice: number
  totalQuantities: number
  qty: number
  incQty: function
}

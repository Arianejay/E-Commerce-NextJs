// next and react
import React from 'react'

// css
import styles from '../styles/Cart.module.css'

const Cart: React.FC = () => {
  return (
    <div className={styles.cart__container}>
      <div className={styles.cart__heading}>
        <h2>My Cart</h2>
      </div>
      <div className={styles.cart__content}>
        <div className={styles.cart__left}>left</div>
        <div className={styles.cart__right}>
          <p>Enter Promo Code</p>
          <div className={styles.right__input}>
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
          <table>
            <tr>
              <td>Shipping Cost</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>-0$</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>TBD</td>
            </tr>
            <tr style={{ marginTop: '1rem' }}>
              <td>Total</td>
              <td>$100</td>
            </tr>
          </table>
          <div className={styles.checkout}>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

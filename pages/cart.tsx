// next and react
import React from 'react'
import Image from 'next/image'

// css
import styles from '../styles/Cart.module.css'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import love from '../assets/love1.jpg'

const Cart: React.FC = () => {
  return (
    <div className={styles.cart__container}>
      <div className={styles.cart__heading}>
        <h2>My Cart</h2>
      </div>
      <div className={styles.cart__content}>
        <div className={styles.cart__left}>
          <div className={styles.left__card}>
            <Image src={love} width={300} height={250} />
            <div className={styles.left__right}>
              <div className={styles.left__details}>
                <p className={styles.title}>Details</p>
                <p>Nike Sb Love Nike Sb Love</p>
                <p>Colorway</p>
                <p>Size: 8</p>
              </div>
              <div className={styles.left__details}>
                <p className={styles.title}>Each</p>
                <p>$100</p>
              </div>
              <div className={styles.left__qty}>
                <p className={styles.title}>Qty</p>
                <div className={styles.qty__div}>
                  <AiFillCaretLeft className={styles.upArrow} />
                  <span>100</span>
                  <AiFillCaretRight className={styles.downArrow} />
                </div>
              </div>
              <div className={styles.left__total}>
                <div>
                  <p className={styles.title}>Total</p>
                  <p>$100</p>
                </div>
                <p className={styles.remove}>Remove</p>
              </div>
            </div>
          </div>
        </div>
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
            <tr style={{ marginTop: '1rem', fontSize: '1.3rem' }}>
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
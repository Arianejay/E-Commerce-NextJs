// next and react
import React from 'react'
import Image from 'next/image'

// css
import styles from '../styles/Cart.module.css'

// lib
import { urlFor } from '../lib/client'

// context
import { useStateContext } from '../context/StateContext'

// select library
import Select from 'react-select'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
const options = [
  { value: '7.5', label: '7.5' },
  { value: '8', label: '8' },
  { value: '8.5', label: '8.5' },
  { value: '9', label: '9' },
  { value: '9.5', label: '9.5' },
  { value: '10', label: '10' },
  { value: '10.5', label: '10.5' },
  { value: '11', label: '11' },
  { value: '11.5', label: '11.5' },
]

const Cart: React.FC = () => {
  // context
  const { cartItems, onRemove, toggleQty, totalPrice } = useStateContext()

  return (
    <div className={styles.cart__container}>
      {/* heading */}
      <div className={styles.cart__heading}>
        <h2>My Cart</h2>
      </div>
      {/* if there is no items in cart */}
      {cartItems.length < 1 && (
        <div>
          <h3>Your shopping cart is empty.</h3>
        </div>
      )}
      {cartItems.length >= 1 && (
        <div className={styles.cart__content}>
          {/* left content */}
          <div className={styles.cart__left}>
            {cartItems.map((item) => (
              <div className={styles.left__card} key={item._id}>
                <Image
                  src={urlFor(item?.image[0]).url()}
                  width={125}
                  height={85}
                  alt="img"
                />
                <div className={styles.left__right}>
                  <div className={styles.left__name}>
                    <p className={styles.title}>Details</p>
                    <p className={styles.text}>{item.name}</p>
                    <p className={styles.text}>{item.colorway}</p>
                    <p
                      style={{
                        marginTop: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Size:{' '}
                      <Select className={styles.selectData} options={options} />
                    </p>
                  </div>
                  <div className={styles.left__details}>
                    <p className={styles.title}>Each</p>
                    <p className={styles.text}>${item.price}</p>
                  </div>
                  <div className={styles.left__qty}>
                    <p className={styles.title}>Qty</p>
                    <div className={styles.qty__div}>
                      <AiFillCaretLeft
                        className={styles.upArrow}
                        onClick={() => toggleQty(item._id, 'decrement')}
                      />
                      <span style={{ margin: '0 0.5rem' }}>
                        {item.quantity}
                      </span>
                      <AiFillCaretRight
                        className={styles.downArrow}
                        onClick={() => toggleQty(item._id, 'increment')}
                      />
                    </div>
                  </div>
                  <div className={styles.left__total}>
                    <div>
                      <p className={styles.title}>Total</p>
                      <p className={styles.text}>
                        ${item.price * item.quantity}
                      </p>
                    </div>
                    <p className={styles.remove} onClick={() => onRemove(item)}>
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* right content */}
          <div className={styles.cart__right}>
            <p>Enter Promo Code</p>
            <div className={styles.right__input}>
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
            <table>
              <tbody>
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
                  <td>${totalPrice}</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.checkout}>
              <button>Check Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart

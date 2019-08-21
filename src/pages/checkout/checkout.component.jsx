import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total-before'>Total before tax: ${total}.00</div>
    <div className='sales-tax'>Estimated tax: {(total * 0.05).toFixed(2)}</div>
    <div className='shipping'>Shipping & handling: FREE</div>
    <div className='total'>ORDER TOTAL: ${total + (total * 0.05)}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payment*
      <br/>
      4242 4242 4242 4242 - EXP: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total + (total * 0.05)} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
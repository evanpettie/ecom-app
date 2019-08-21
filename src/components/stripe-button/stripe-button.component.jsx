import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jZWzLZfiryymwkb5Iuitxz3u00cnDYTaut';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Archimedes Apparel'
      billingAddress
      shippingAddress
      image='https://cdn.icon-icons.com/icons2/390/PNG/512/sword-in-stone_38820.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;


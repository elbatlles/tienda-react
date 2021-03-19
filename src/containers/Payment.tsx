import React, { useContext } from 'react';
import {
  ButtonStylingOptions,
  PayPalButton,
  PaypalOptions,
} from 'react-paypal-button';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';


import '../styles/components/Payment.css';
import { PayPalButtonProps } from '../type/Types';
import { handleSumTotal } from '../utils';
interface Props {}

const Payment = (props: Props) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history= useHistory()

  const paypalOptions: PaypalOptions = {
    clientId: 'sb-gg435i5471737@business.example.com',
    intent: 'capture',
    currency: 'EUR',
  };
  const buttonStyle: ButtonStylingOptions = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data: any) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push("/checkout/success")
    }
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div key={item.title} className="Payment-item">
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>{item.price} $</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyle}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => console.log(data)}
            onPaymentError={(data) => console.log(data)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;

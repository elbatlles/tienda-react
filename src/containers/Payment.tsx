import React, { useContext } from 'react';
import {
  
  PayPalButton,
  PaypalOptions,
} from  "react-paypal-button-v2";
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
    //clientId:  String(process.env.CLIENT_ID_PP),
    intent: 'capture',
    currency: 'EUR',
    debug:true,


  };
  console.log(paypalOptions)
  const buttonStyle: any = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data: any) => {
 console.log("completed?")
 console.log(data)
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
     
    }
    history.push("/checkout/success")
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
    //  options={paypalOptions}
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details:any, data:any) => {
          console.log("completed?")
          console.log(data)
          console.log(details)
          alert("Transaction completed by " + details.payer.name.given_name);
         // handlePaymentSuccess()
          // OPTIONAL: Call your server to save the transaction
          if (details.status === 'COMPLETED') {
            const newOrder = {
              buyer,
              product: cart,
              payment: data,
            };
            addNewOrder(newOrder);
           
          }
          history.push("/checkout/success")
        }}
      />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;

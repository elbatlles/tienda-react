import {
  ButtonStylingOptions,
  OnCancelData,
  OnCaptureData,
  OnShippingChangeData,
  PaypalOptions,
} from 'react-paypal-button';

export interface ProductType {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
export type Cart = {
  addToCart: (payload: any) => void;
  removeFromCart: (payload: any) => void;
  addToBuyer: (payload: any) => void;
  addNewOrder: (payload: any) => void;

  state: {
    cart: ProductType[];
    buyer: any;
    orders: [];
    products: ProductType[];
  };
};

export type PayPalButtonProps = {
  paypalOptions: PaypalOptions;
  buttonStyles: ButtonStylingOptions;
  amount: number;
  subscriptionPlanId?: string;
  onApprove?: (data: any, authId: any) => void;
  onPaymentStart?: () => void;
  onPaymentSuccess?: (response: OnCaptureData) => void;
  onPaymentError?: (msg: string) => void;
  onPaymentCancel?: (data: OnCancelData) => void;
  onShippingChange?: (
    data: OnShippingChangeData
  ) => Promise<void | string | number> | string | number | void;
};


export const APIKEY="AIzaSyB1MY7NLSGeE7m6FsNxYbAPi_X5JC4LyvI"
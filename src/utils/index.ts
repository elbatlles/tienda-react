import { ProductType } from '../type/Types';

export const handleSumTotal = (cart: ProductType[]) => {
  const reducer = (acc: any, cur: { price: any }) => acc + cur.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

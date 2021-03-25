import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';
import { ProductType } from '../type/Types';

interface Props {
  //products: any;
}

const Products = (props: Props) => {
  const { products,state, addToCart } = useContext(AppContext);

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };
  // const { products } = props;
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product: any) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';
interface Props {
  products: any;
}

const Products = (props: Props) => {
  const { products } = props;
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product: any) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

import React from 'react';
import { ProductType } from '../type/Types';

interface Props {
  product: ProductType;
  handleAddToCart: Function;
}

const Product = ({ handleAddToCart, product }: Props) => {
  //const { product } = props;
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
        <button onClick={() => handleAddToCart(product)} type="button">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Product;

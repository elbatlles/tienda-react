import React, { PureComponent } from 'react';
import initialState from '../initialState';
import Products from '../components/Products';
interface Props {}

export default class Home extends PureComponent<Props> {
  render() {
    return <Products products={initialState.products} />;
  }
}

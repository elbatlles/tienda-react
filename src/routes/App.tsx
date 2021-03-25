import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import { Cart } from '../type/Types';

const App: React.FC = () => {
  const initialState:Cart = useInitialState();
  const isEmpty =Object.keys(initialState.state).length
  return (
    <>
    {isEmpty > 0 ?  <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>: "<h1>Loading</h1>"}
  
    </>
  );
};

export default App;

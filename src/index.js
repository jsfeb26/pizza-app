import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createStore, combineReducers, applyMiddleware } from 'redux';

import CartReducer from './reducers/CartReducer';
import MenuReducer from './reducers/MenuReducer';
import FormReducer from './reducers/FormReducer';

import PizzaMenu from './containers/PizzaMenu';
import Cart from './containers/Cart';
import PageNotFound from './components/PageNotFound';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://core-graphql.dev.waldo.photos/pizza'})
});

const store = createStore(
  combineReducers({
    cart: CartReducer,
    menu: MenuReducer,
    form: FormReducer,
    apollo: client.reducer(),
  }),
  {},
  applyMiddleware(client.middleware())
);

ReactDOM.render((
  <ApolloProvider client={client} store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PizzaMenu} />
        <Route path="/cart" component={Cart} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'));

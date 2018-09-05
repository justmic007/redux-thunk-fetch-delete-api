import React, { Component } from 'react';
//import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ItemList from './components/ItemList';
import configureStore from './store/configureStore';

const store = configureStore(); // you can also pass in an initialState here

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ItemList />
      </Provider>

    );
  }
}

export default App;

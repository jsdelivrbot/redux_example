import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import rootReducer from './reducers';
import { createStore} from 'redux';
import { Provider } from 'react-redux';


let store = createStore(rootReducer);



render(<Provider store={store}>

  <App/>
  </Provider>

, document.querySelector('.root'));
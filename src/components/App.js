import React from 'react';
import ButtonContainer from '../containers/Button';
import DecrementButtonContainer from '../containers/DecrementButton';
import RandomButtonContainer from '../containers/RandomButton';
import CounterContainer from '../containers/Counter';
import { Header } from './Header'

const App = () => {

return (

  <div className="col-sm-6 col-sm-offset-3">
    <Header/>
    <CounterContainer/>
    <ButtonContainer/>
    <DecrementButtonContainer/>
    <RandomButtonContainer/>
  </div>

);

}

export default App;
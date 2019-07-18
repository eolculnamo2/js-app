import React, { useReducer } from 'react';
import MainContext from './store/MainContext';
import mainReducer from './store/mainReducer';
import mainState from './store/mainState';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home } from './screens';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
});

const Navigation = createAppContainer(MainNavigator);

function App() {
  const [state, dispatch] = useReducer(mainReducer, mainState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <Navigation />
    </MainContext.Provider>
  );
}

export default App;

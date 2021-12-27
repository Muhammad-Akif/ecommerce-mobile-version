import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RootStackNavigator from './navigators/RootStackNavigator';
import store from './store/store';

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

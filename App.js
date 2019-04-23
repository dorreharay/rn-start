import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './js/screens/HomeScreen'
import SecondScreen from './js/screens/SecondScreen'
import ThirdScreen from './js/screens/ThirdScreen'

const AppNavigator = createStackNavigator({
  HomeScreen:   { screen: HomeScreen },
  SecondScreen: { screen: SecondScreen },
  ThirdScreen:  { screen: ThirdScreen },

  initialRouteName: 'SecondScreen'
});

export default createAppContainer(AppNavigator);
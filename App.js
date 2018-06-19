import React  from 'react';
import UserScreen from './pages/userscreen/userscreen.js';
import { StackNavigator } from 'react-navigation';
import SplashScreen from './pages/splashscreen/splashscreen.js';


const AppScreens = StackNavigator({
    SplashScreen: { screen: SplashScreen },
    UserScreen: { screen: UserScreen },
});
const App = () => (
    <AppScreens />
);
export default App;

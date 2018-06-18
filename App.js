import React, {Component} from 'react';
import UserScreen from './pages/userscreen/userscreen.js'
type Props = {};
import {
    StackNavigator,
} from 'react-navigation';
import SplashScreen from "./pages/splashscreen/splashscreen.js";

const AppScreens = StackNavigator({
    SplashScreen: {screen: SplashScreen},
    UserScreen: {screen: UserScreen},
});
export default class App extends Component<Props> {

    render() {
        return (
            <AppScreens/>
        );
    }
}
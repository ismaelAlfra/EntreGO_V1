/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './Components/EntreGO'
import Welcome from './Components/Welcome'
import Login from './Components/Login'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);

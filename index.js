/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './Components/EntreGO'
import Welcome from './Components/Welcome'
import Login from './Components/Login'
import CadEntrega from './Components/CadEntrega'
import Status from './Components/Status'
import DetalhesEntregador from './Components/DetalhesEntregador'


import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DetalhesEntregador);

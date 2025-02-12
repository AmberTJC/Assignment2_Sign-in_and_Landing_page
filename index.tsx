import { AppRegistry } from 'react-native';
import App from './App'; 
import { name as appName } from './app.json';
const appName = require('./app.json').expo.name;

AppRegistry.registerComponent(appName, () => App); 
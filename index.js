// import { AppRegistry } from 'react-native';
import App from './App';

// AppRegistry.registerComponent('YourAppName', () => App);
// import { AppRegistry } from 'react-native';
// import App from './App';
import { name as smartfarm } from './app.json';
import { AppRegistry } from 'react-native-web';

AppRegistry.registerComponent(smartfarm, () => App);
AppRegistry.runApplication(smartfarm, {
  rootTag: document.getElementById('root'),
});

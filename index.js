import { registerRootComponent } from 'expo';

import App from './App';
const Sentry = require("sentry-expo");
const routingInstrumentation = new Sentry.Native.ReactNavigationInstrumentation();
import { Navigation } from "@react-navigation/bottom-tabs"
// Sentry.init({

 
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
 Sentry.Native.wrap(App);

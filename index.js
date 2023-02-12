import { registerRootComponent } from 'expo';
import * as Sentry from "sentry-expo";
const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();
import { Navigation } from 'react-native-navigation';
// Sentry.init({

  Sentry.init({
    dsn: "https://95966da8d48141bebcde31d0f3d5c306@sentry.zakariao.nl/3",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    enableAutoSessionTracking: true,
    environment: "production",
    sessionTrackingIntervalMillis: 10000,
    tracesSampleRate: 1.0,
    beforeSend(event, hint) {
        // Check if it is an exception, and if so, show the report dialog
        if (event.exception) {
            Sentry.Browser  .showReportDialog({ eventId: event.event_id, title: "well dang looks like we got ourselves a problem mateyy" });
        }
        return event;
    },
      // Check if it is an exception, and if so, show the report dialog
       // Check if it is an exception, and if so, show the report dialog
   
    integrations: [
      new Sentry.Native.ReactNativeTracing({
        routingInstrumentation: new Sentry.ReactNativeNavigationInstrumentation(
          Navigation,
        )
  
      }),
    ],
  });
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
export default Sentry.wrap(App);

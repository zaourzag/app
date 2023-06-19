import { registerRootComponent } from 'expo';

import App from './App';
const Sentry = require("sentry-expo");
const routingInstrumentation = new Sentry.Native.ReactNavigationInstrumentation();
import { Navigation } from "@react-navigation/bottom-tabs"
Sentry.init({
  dsn: "https://3ac43dfc5bb7435db4b0815aacbed0e7@o1296783.ingest.sentry.io/6558455",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  enableAutoSessionTracking: true,
  environment: "production",
  enableNative: true,
  enableNativeCrashHandling: true,
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
      routingInstrumentation: new Sentry.Native.ReactNativeNavigationInstrumentation(
        Navigation,
      )

    }),
  ],
});


 
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
 Sentry.Native.wrap(App);

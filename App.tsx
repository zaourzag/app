import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation/index'
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://3ac43dfc5bb7435db4b0815aacbed0e7@o1296783.ingest.sentry.io/6558455",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  enableAutoSessionTracking: true,
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
      // ... other options
    }),
  ],
  sessionTrackingIntervalMillis: 10000,
  tracesSampleRate: 1.0,

});
export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator/>
    </ApplicationProvider>
  </>
);
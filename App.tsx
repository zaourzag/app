import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation/index'
import * as Sentry from "@sentry/react-native";
import {showReportDialog} from "@sentry/react";
// Sentry.init({

  Sentry.init({
    dsn: "https://3ac43dfc5bb7435db4b0815aacbed0e7@o1296783.ingest.sentry.io/6558455",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    enableAutoSessionTracking: true,
    integrations: [
      new Sentry.ReactNativeTracing({
        tracingOrigins: ["localhost", "*", /^\//],
        // ... other options
      }),
    ],
    sessionTrackingIntervalMillis: 10000,
    tracesSampleRate: 1.0,
    beforeSend(event, hint) {
      // Check if it is an exception, and if so, show the report dialog
      if (event.exception) {
        showReportDialog({ eventId: event.event_id });
      }
      return event;
    },
  });

// });
export default () => (
  <>
 
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator/>
    </ApplicationProvider>
  </>
);


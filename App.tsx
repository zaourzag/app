import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation/index'
import { Sentry } from 'sentry';
import { Navigation } from "@react-navigation/bottom-tabs"
Sentry.init({
  dsn: "https://95966da8d48141bebcde31d0f3d5c306@sentry.zakariao.nl/3",
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

// });

export default () => (
  <>
 
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator/>
    </ApplicationProvider>
    

  </>
  
);


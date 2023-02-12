import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation/index'
import * as Sentry from "sentry-expo";
const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

// Sentry.init({

  Sentry.init({
    dsn: "https://95966da8d48141bebcde31d0f3d5c306@sentry.zakariao.nl/3",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    enableAutoSessionTracking: true,
    environment: "production",
    sessionTrackingIntervalMillis: 10000,
    tracesSampleRate: 1.0,
  
      // Check if it is an exception, and if so, show the report dialog
       // Check if it is an exception, and if so, show the report dialog
   
    integrations: [
      new Sentry.Native.ReactNativeTracing({
        routingInstrumentation: new Sentry.ReactNativeNavigationInstrumentation(
          AppNavigator,
        )
  
      }),
    ],
  });


// });

export default Sentry.wrap(
  <>
 
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator/>
    </ApplicationProvider>
    

  </>
  
);


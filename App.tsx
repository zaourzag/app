import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation/index'
import * as Sentry from "sentry-expo";
import * as sentra from "@sentry/react";
import req from "@aero/http";
import Modal from "react-native-modal";
import { TextInput, View } from 'react-native';
// Sentry.init({
const errs = Sentry.Browser;
  Sentry.init({
    dsn: "https://3ac43dfc5bb7435db4b0815aacbed0e7@o1296783.ingest.sentry.io/6558455",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    enableAutoSessionTracking: true,
    environment: "production",
    sessionTrackingIntervalMillis: 10000,
    tracesSampleRate: 1.0,
    beforeSend(event, hint) {
      // Check if it is an exception, and if so, show the report dialog
     //
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
    onError={(error: any) => {
      
       const [text, setText] = useState('');
       <View>
       <Modal>
         <View style={{ flex: 1 }}>
         <TextInput
        style={{height: 40}}
        placeholder="email"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
         <TextInput
        style={{height: 40}}
        placeholder="name"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
         <TextInput
        style={{height: 40}}
        placeholder="mes"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
         </View>
       </Modal>
     </View>
     function a(this: any, ab: any) {
     this.refs.{ab}._lastNativeText
     }
     
     let name = ab(name)
     let mes = ab(mes)
     let email = ab(email)
   req("https://sentry.io/api/0/projects/zakaria-aourzag/ombi/user-feedback/")
 .header('Authorization',"66a9b6a0b221487babb74d4d2c3c8d2fa42178dbf26a45fda7eb993e9c807b24")
 .body(
  {
"event_id": Sentry.Browser.lastEventId,
  name: name,
  comment: mes
  email: email
    }
  'json'
)


-d '{"event_id":"14bad9a2e3774046977a21440ddb39b2","name":"Jane Schmidt","email":"jane@empowerplant.io","comments":"It broke!"}'

    }

  </>
  
);


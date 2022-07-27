// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { env } from "./env.model";

export const environment: env = {
  firebase: {
    projectId: 'samoosa-xpress',
    appId: '1:857308374456:web:eae79c64f75a379384db4d',
    storageBucket: 'samoosa-xpress.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyDgB6XYi5MWM99dUwxpBOu3OOJfzxoVFJM',
    authDomain: 'samoosa-xpress.firebaseapp.com',
    messagingSenderId: '857308374456',
    measurementId: 'G-V4CC2SJ2JX',
  },
  production: false,
  functionsUrl:'https://us-central1-samoosa-xpress.cloudfunctions.net'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

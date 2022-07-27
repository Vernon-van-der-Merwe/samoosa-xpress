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
  production: true,
  functionsUrl:'https://us-central1-samoosa-xpress.cloudfunctions.net'
};

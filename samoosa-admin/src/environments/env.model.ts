export interface env {
    firebase: {
        projectId: string,
        appId: string,
        storageBucket: string,
        locationId:string,
        apiKey: string,
        authDomain: string,
        messagingSenderId: string,
        measurementId: string,
      },
      production: boolean,
      functionsUrl:string
}
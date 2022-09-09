import * as functions from "firebase-functions";
import axios = require('axios');
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

///Simple get method response from functions
export const helloWorld = functions.https.onRequest((req,res)=>{
        res.send("Hello from functions");
})

///Request method management from Function call
export const api = functions.https.onRequest((req,res) => {
    switch (req.method) {
        case 'GET':
            res.send("Request from GET");
            break;
        case 'POST':
            res.send("Request from POST");
            break;
        case 'PUT':
            res.send('Request from PUT');
            break;
        case 'PATCH':
            res.send('Request from PATCH');
            break;
        //Delete or any other method            
        default:
            res.send(`Request from ${req.method}`);
            break;
    }
})

///Third party api call from Functions
export const serveRequest = functions.https.onRequest(async (req,res)=>{
    //@ts-ignore
    var data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.send(data.data);
    Promise.resolve();
})

///Firebase auth event handling

///Firebase auth add user event handle
export const onUserAdded = functions.auth.user().onCreate(user=> {
    console.log(`user created ${user.email}`);
    return Promise.resolve();
});

///Firebase auth delete user event handle
export const onUserUpdate = functions.auth.user().onDelete(user =>{
    console.log(`user deleted ${user.email}`);
    return Promise.resolve();
});


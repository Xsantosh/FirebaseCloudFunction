import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


export const helloWorld = functions.https.onRequest((req,res)=>{
        res.send("Hello from functions");
})

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
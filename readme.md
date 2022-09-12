## Welcome to Firebase Cloud Functions Repo

Hello Viewers, this repo contains firebase cloud function calls in `NodeJS` environment and `TypeScript` programming language.

## Setup

### Check For NodeJS installation

    Node --version

### Check For NPM

    npm --v

### Install Firebase Tools

    npm -i firebase-tools

### Login

    firebase login

### Initialisation

    firebase init
        select cloud function

### Initialization of Emulators

    firebase init emulators
        select auth, functions, firestore, pubsub

### Start Emulators

    firebase emulators:start

### For Converting Typescript to JavaScript

    npm run build

### For Calling Third Party Rest Api install axios

    npm -i axios

## Write Code

### Make Http Request to function name

    ///Simple get method response from functions

    export  const  helloWorld  =  functions.https.onRequest((req,res)=>{
    	    res.send("Hello from functions to GET Request");
        }
    );

### Handle API calls [GET, POST, DELETE, PATCH, PUT]

    ///Request method management from Function call

    export  const  api  =  functions.https.onRequest((req,res)  =>  {
    	switch (req.method) {
    	    case  'GET':
    		    res.send("Request from GET");
    		    break;
    	   case  'POST':
    		    res.send("Request from POST");
    		    break;
    	   case  'PUT':
    	        res.send('Request from PUT');
    	        break;
           case  'PATCH':
    	        res.send('Request from PATCH');
    	        break;
     //Delete or any other method
          default:
    	        res.send(`Request from ${req.method}`);
    	        break;
            }
        }
      );

### Third Party Api call from function

    ///Third party api call from Functions

    export  const  serveRequest  =  functions.https.onRequest(async  (req,res)=>{
          //@ts-ignore
      var  data  =  await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        res.send(data.data);
        Promise.resolve();
        }
     );

## Firebase Auth event handling

### Firebase auth add user event handle

    export const onUserAdded = functions.auth.user().onCreate( user => {
    	    console.log(`User is created using emailId ${user.email}`);
    	    return Promise.resolve();
        }
    );

### Firebase auth delete user event handle

    export const onUserDeleted = functions.auth.user().onDelete( user => {
    	    console.log(`user deleted ${user.email}`);
    	    return Promise.resolve();
        }
    )

## Firebase FireStore Data events

### FireStore document creation listener

    export const onDocumentCreated = functions.firestore.document('/document/{documentId}').onCreate((snapshot)=>{
         console.log(`new snapshot created ${snapshot.data()}`);
         return Promise.resolve();
        }
    );

`Same way we can use onWrite, onUpdate, onDelete`

We can also run Cron Job in cloud function with PUBSUB

    export const schedulerFunction = functions.pubsub.schedule('* * * * *').onRun((context)=>{
        console.log('this scheduler is run every 1 m inute);
        return Promise.resolve();
        }
    )

Santosh Das['github.com/Xsantosh']

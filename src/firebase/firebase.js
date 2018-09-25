import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };
  
  // database.ref().set({
  //   name: 'Rajesh Vanteedu',
  //   age: 100,
  //   stressLevel: 6,
  //   isSingle:false,
  //   job: {
  //       title: 'Software developer',
  //       company: 'Google'
  //   },
  //   location:{
  //           city: 'Hyderbad',
  //           country: 'India'
  //       }    
  // }).then(()=>{
  //   console.log('Updated the data successfully');
  // }).catch((e) => {
  //   console.log('Failed because',e);
  // });

//   database.ref('age').set(110);

//   database.ref('location/city').set('Medchal');

  //  database.ref('attributes').set({
  //    height: 160,
  //    weight: 70
  //  });

// database.ref('isSingle').remove().then(() => {
//   console.log('data aremoved');
// }).catch((e) => {
//   console.log('Failed to remove',e);
// });


// database.ref().update({
//   name: 'Vanteedu Rajesh',
//   age: 25,
//   stressLevel: 9,
//   'job/title': 'Sr Software developer',
//   isSingle: null,
//   'location/city': 'Medchal'
// });



// database.ref().once('value').then((dataSnapshot) =>{
//   console.log('fetching the data successfully ',dataSnapshot.val());
// }).catch((e) => {
//   console.log('Failed fetching the data',e);
// });

// database.ref().on('value',(dataSnapshot) =>{
//   console.log('fetching the data successfully ',dataSnapshot.val());
// });

// setTimeout(() => {
//   database.ref('age').set(29);
//   database.ref().off();
// }, 3500);



// setTimeout(() => {
//   database.ref('age').set(30);
// }, 3500);


// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 12345.33,
//   createdAt: 112345
// });

// database.ref('expenses').push({
//   description: 'Super Market',
//   note: '',
//   amount: 5700,
//   createdAt: 232345
// });

// database.ref('expenses').push({
//   description: 'Fuel',
//   note: '',
//   amount: 2500,
//   createdAt: 345123
// });

// database.ref('expenses').once('value').then((snapShot) => {
//   const expenses = [];
//   snapShot.forEach((childSnapShot) => {
//     expenses.push({
//       'id': childSnapShot.key,
//       ...childSnapShot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('value',(snapShot) => {
//   const expenses = [];
//   snapShot.forEach((childSnapShot) => {
//     expenses.push({
//       'id': childSnapShot.key,
//       ...childSnapShot.val()
//     });
//   });
//   console.log(expenses);
// });

// setTimeout(() => {
//      database.ref('expenses/-LMqc5pzSy5t3PFLcBAr').set({
//       description: 'Super Market',
//       note: '',
//       amount: 6700,
//       createdAt: 232345
//      });
//   }, 3500);

// database.ref('expenses').on('child_changed',(snapShot) => {  
//      console.log(snapShot.key, snapShot.val());
//    });

//    database.ref('expenses').on('child_removed',(snapShot) => {  
//     console.log(snapShot.key, snapShot.val());
//   });

//   database.ref('expenses').on('child_added',(snapShot) => {  
//     console.log(snapShot.key, snapShot.val());
//   });
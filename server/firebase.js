const firebase = require('firebase')
// The configuration for initializing the application will be provided!
const instance = firebase.initializeApp({
  databaseURL: 'https://sample-d4d07.firebaseio.com/'
});

const ref = instance.database().ref("server/tests/cyrptotracker");

module.exports = ref;
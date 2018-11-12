// EXAMPLE ONLY! THIS FILE IS USUALLY NOT PART OF GIT TRACKING
// .gitignore skips this at the project level, but it is added for example here
/**
 * NOTE: This file is ignored from git tracking. In a CI environment, it is
 * generated using build/create-config.js by calling npm run create-config (or
 * using firebase-ci if deploying to Firebase hosting). This is done so that
 * environment specific settings can be applied.
 */

export const env = 'development'

// Config from Firebase Console
export const firebase = {
    apiKey: "AIzaSyCWg-vwF2p8ciN3EYctbMMjcavVaMvNs84",
    authDomain: "webchat-8d861.firebaseapp.com",
    databaseURL: "https://webchat-8d861.firebaseio.com",
    projectId: "webchat-8d861",
    storageBucket: "webchat-8d861.appspot.com",
    messagingSenderId: "158889948823"
}

// Config for react-redux-firebase
// For more details, visit http://docs.react-redux-firebase.com/history/v2.0.0/docs/api/enhancer.html
export const reduxFirebase = {
  userProfile: 'users', // root that user profiles are written to
}

export default { env, firebase, reduxFirebase }
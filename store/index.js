import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import makeRootReducer from '../reducers'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import { firebase as fbConfig, reduxFirebase as rrfConfig } from '../config'


export default (initialState = {}) => {
  // ======================================================
  // Window Vars Config
  // ======================================================

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    thunk.withExtraArgument(getFirebase)
    // This is where you add other middleware like redux-observable
  ]

  firebase.initializeApp(fbConfig)

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      reactReduxFirebase(firebase, rrfConfig),
    )
  )
  store.asyncReducers = {}

  return store
}
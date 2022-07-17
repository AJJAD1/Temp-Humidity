import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducers from './reducer'
import api from './common/api'
import { logger } from './common/logger'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import Amplify from 'aws-amplify'
import { configDev } from './AWSConfig'

if (process.env.REACT_APP_BUILD_ENV === 'prod') {
  console.log('Using prod backend environment')
  //Amplify.configure(configProd);
} else {
  console.log('Using dev backend environment')
  Amplify.configure(configDev)
}

const store = createStore(appReducers, applyMiddleware(thunk, api, logger))

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.REACT_APP_BUILD_ENV !== 'prod',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
      document.getElementById('root'),
    )
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

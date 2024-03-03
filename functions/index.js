/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const { onCall, onRequest } = require('firebase-functions/v2/https')
// import { onRequest, onCall } from 'firebase-functions/v2/https'
// import { info } from 'firebase-functions/logger'
const { info } = require('firebase-functions/logger')

// export const helloWorld = onRequest((request, response) => {
exports.helloWorld = onRequest((request, response) => {
  const par = request.query.text
  info('Hello logs!', { structuredData: true })
  response.send(`Hello from bilalgonen helloWorld onRequest par: ${par} `)
})

// export const hiWorld = onCall((request) => {
exports.hiWorld = onCall((request) => {
  return 'From hiWorld onCall'
})

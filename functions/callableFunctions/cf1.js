// const { onCall, HttpsError } = require('firebase-functions/v2/https')
// const admin = require('firebase-admin')
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import admin from 'firebase-admin'
// import { info } from 'firebase-functions/logger'
// const { info } = require('firebase-functions/logger')

if (admin.apps.length === 0) {
  admin.initializeApp()
}

export const cf1 = onCall((request) => {
  // exports.cf1 = onCall(async (data, context) => {
  console.log('cf1 is called')
  try {
    return {
      success: true,
    }
  } catch (error) {
    console.log('Error: ', error)
    throw new HttpsError('internal', 'Internal server error.')
  }
})

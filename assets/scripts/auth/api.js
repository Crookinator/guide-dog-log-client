'use strict' 
// require the config for the http route
const config = require('./../config')
// require the store for keeping track of api responses
const store = require('../store')

// create a function for signing up a user
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

// create a function for a user to sign in
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

// create a function to allow a user to change their password
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

// create a function to allow a user to sign out
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
	signUp,
	signIn,
	signOut,
	changePassword
}
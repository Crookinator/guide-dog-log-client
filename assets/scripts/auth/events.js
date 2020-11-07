'use strict' 

// require the get form fields function to pass valid sign up, sign in, and change password requests
const getFormFields = require('./../../../lib/get-form-fields')

// require the ui file to pass on successful AJAX request
const ui = require('./ui')

// require the api AJAX requests
const api = require('./api')

// event handler for the sign up event listener
const onSignUp = function (event) {
		event.preventDefault()
		// capture the form from the event
	const form = event.target
		// use getFormFields to extract the data from the form
		const data = getFormFields(form)
		// send data to the api
		api.signUp(data)
			// handle successful response
			.then(ui.signUpSuccess)
			// handle failed response
			.catch(ui.signUpFailure)
}

// handler for the sign in listener
const onSignIn = function (event) {
  event.preventDefault()

  // get the form from the event
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the api
  api.signIn(data)
    // handle successful response
    .then(ui.signInSuccess)
    // handle failed response
    .catch(ui.signInFailure)
}

// handler for the change password listener
const onChangePassword = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.changePassword(data)
    // handle successful response
    .then(ui.onChangePasswordSuccess)
    // handle failed response
    .catch(ui.onChangePasswordFailure)
}

// handler for the sign out listener
const onSignOut = function (event) {
  event.preventDefault()
  // send data in AJAX request to the API
  api.signOut()
    // handle successful response
    .then(ui.onSignOutSuccess)
    // handle failed response
    .catch(ui.onSignOutFailure)
}


// exporting each handler so that app.js will be able to call these functions
module.exports = {
	onSignUp,
	onSignIn,
	onSignOut,
	onChangePassword
}
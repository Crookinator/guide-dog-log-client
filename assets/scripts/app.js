'use strict'
// require the auth events file
const authEvents = require('./auth/events')
// require the auth ui file
const uiAuth = require('./auth/ui')



$(() => {
	//function to reset the forms back to the log in screen
	uiAuth.resetForms()
	//event listeners for the various form buttons
	$('#signUpForm').on('submit', authEvents.onSignUp)
	$('#signInForm').on('submit', authEvents.onSignIn)
	$('#changePasswordForm').on('submit', authEvents.onChangePassword)
	$('#signOutForm').on('submit', authEvents.onSignOut)
	$('#showSignUp').on('click', uiAuth.onShowSignUp)
	$('#showSignIn').on('click', uiAuth.resetForms)
	
	
})

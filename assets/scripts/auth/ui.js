'use strict' 
// require store for saving information into the store object
const store = require('./../store')

// what happens when the sign up is successful
const signUpSuccess = function(res) {
	$('#userAlert').text('Sign Up Successful! Please Click Sign In to continue.')
	$('#signUpForm').trigger('reset')
}

// what happens with a sign up failure
const signUpFailure = function(error) {
	$('#userAlert').text('Sign Up Failed! Please try again.')
}

// what happens when there is a successful sign in 
const signInSuccess = function(res) {
  // save the user in the api response to the store object
  store.user = res.user
	$('#userAlert').text('Sign-in Successful!')
	$('#inAppUi').show()
	$('#signInForm').hide()
	$('#signInForm').trigger('reset')
}

// what happens with failed sign in
const signInFailure = function() {
	console.log('error')
}

// what happens on successful change password success
const onChangePasswordSuccess = function () {
	$('#userAlert').text('Password changed successfully!')
}

// what happens on failed change password
const onChangePasswordFailure = function () {
  $('#userAlert').text('Error password change failed. Please try again.')
}

// on successful sign out
const onSignOutSuccess = function () {
  $('#userAlert').text('Sign out successful. See you next time ' + store.user.email + '!')
  store.user = null
	$('#signInForm').show()
	resetForms()
}

// when sign out fails
const onSignOutFailure = function () {
  $('#userAlert').text('Sign out failed')
}

// function that resets the forms to default of first load state
const resetForms = () => {
	$('#userAlert').text('')
	$('#createPostForm').hide()
	$('#editPostUi').hide()
	$('#changePasswordForm').hide()
	$('#inAppUi').hide()
	$('#signUpForm').hide()
	$('#post-display').text('')
	$('#post-display').hide()
	$('#signInForm').show().trigger('reset')
}

// function to show the sign up form
const onShowSignUp = () => {
	$('#userAlert').text('Please sign up below.')
	$('#signUpForm').show().trigger('reset')
	$('#signInForm').hide()
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordSuccess,
	onShowSignUp,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
	resetForms
}
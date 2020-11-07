'use strict'
// require the auth and post events files
const authEvents = require('./auth/events')
const postEvents = require('./posts/events')
// require the auth ui file
const uiAuth = require('./auth/ui')



$(() => {
	//function to reset the forms back to the log in screen
	uiAuth.resetForms()
	//event listeners for the various form buttons
	$('#signUpForm').on('submit', authEvents.onSignUp)
	$('#signInForm').on('submit', authEvents.onSignIn)
	$('#changePasswordForm').on('submit', authEvents.onChangePassword)
	$('#signOutBtn').on('click', authEvents.onSignOut)
	$('#showSignUp').on('click', uiAuth.onShowSignUp)
	$('#showSignIn').on('click', uiAuth.resetForms)
	$('#showChangePassword').on('click', event => {
		event.preventDefault()
		$('#inAppUi').hide()
		$('#changePasswordForm').show()
	})
	$('.formHomeBtn').on('click', event => {
		$('form').hide()
		$('#inAppUi').show()
		$('#userAlert').text('You are on the home screen.')
	})

	//event listeners for the in App UI
	$('#uiHomeBtn').on('click', event => {
		$('#userAlert').text('You are on the home screen.')
		$('#inAppUi').show()
		$('#post-display').hide()
	})
	$('#createNewPost').on('click', event => {
		$('#userAlert').text('Create a new post below')
		$('#createPostForm').show()
		$('#inAppUi').hide()
	})
	$('#createPostForm').on('submit', postEvents.onCreatePost)
	$('#indexPosts').on('click', postEvents.onSeeAllPosts)
	
	
})

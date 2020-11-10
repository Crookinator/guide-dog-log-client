'use strict'
// require the auth and post events files
const authEvents = require('./auth/events')
const postEvents = require('./posts/events')
// require the auth ui file
const uiAuth = require('./auth/ui')

// declare functions for the event handlers for the app
const authHandlers = function () {
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
		$('#post-display').hide()
		$('#changePasswordForm').show()
	})
	
}
const uiHandlers = function () {
	$('.formHomeBtn').on('click', event => {
		$('.dimmed').prop('disabled', false)
		$('#post-display').hide()
		$('form').trigger('reset')
		$('#updatePostForm').hide()
		$('form').hide()
		$('#inAppUi').show()
		$('#userAlert').text('You are on the home screen.')
	})

	//event listeners for the in App UI
	$('#uiHomeBtn').on('click', event => {
		$('#userAlert').text('You are on the home screen.')
		$('#editPostUi').hide()
		$('#inAppUi').show()
		$('#post-display').hide()
	})
	
}
const postHandlers= function () {
	$('#createNewPost').on('click', event => {
		$('#userAlert').text('Create a new post below')
		$('#createPostForm').show()
		$('#inAppUi').hide()
		$('#post-display').html('').hide()
		
	})
	$('#createPostForm').on('submit', postEvents.onCreatePost)
	$('#indexPosts').on('click', postEvents.onSeeAllPosts)
	$('#post-display').on('click', 'button', postEvents.onEditPost)
	$('#validateDestroy').on('click', function () {
		// if the checkbox is checked
		if ($(this).is(':checked')) {
			// enable the Delete Post button
			$('#destroyPost').prop('disabled', false)
		} else {
			// if it isn't checked disabled the button
			$('#destroyPost').prop('disabled', true)
		}
	})
	$('#destroyPost').on('click', postEvents.onDestroyPost)
	$('#showUpdate').on('click', postEvents.setupUpdateForm)
	$('#updatePostForm').on('submit', postEvents.onUpdatePost)
	
}

$(() => {
	//Make the sign in form available on page ready
	$('#signInForm').show()
	authHandlers()
	uiHandlers()
	postHandlers()
})

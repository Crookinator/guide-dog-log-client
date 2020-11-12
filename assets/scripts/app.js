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
		$('#userAlert').text('Change password below')
		$('#post-display').html('').hide()
		$('.settings').hide()
		$('#changePasswordForm').show()
	})
	
}
const uiHandlers = function () {
	$('.formHomeBtn').on('click', event => {
		$('.dimmed').prop('disabled', false)
		$('#laws-display').html('').hide()
		$('#updatePostForm').trigger('reset').hide()
		$('#home-display').html('').show()
		$('#post-display').html('').hide()
		$('#createNewPost').hide()
		$('#editPostUi').trigger('reset').hide()
		$('form').trigger('reset').hide()
		$('#updatePostForm').hide()
		$('#showChangePassword').hide()
		$('#userAlert').text('You are on the home screen.')
		postEvents.home()
	})
}
const postHandlers= function () {
	const createHTML = (`
		<form name="createPostForm">
						<fieldset>
							<legend>Create Post)</legend>
							<label for="title">Title:</label>
							<input required="" id="title" type="text" name="post[title]" placeholder="Title">
							<label for="guideDogName">Guide's Name:</label>
							<input required='' id='guideDogName' type="text" name="post[guideDogName]" placeholder="Enter Dog's Name here">
							<label for="yearsOfService">Years in Service:</label>
							<input required='' id='yearsOfService' type="text" name="post[yearsOfService]" placeholder="Enter working years here">
							<label for="breed">Breed:</label>
							<input required='' id='breed' type="text" name="post[breed]" placeholder="Enter breed here">
							<label for="postText">Post:</label>
							<input required="" id='postText' type="text" name="post[text]" placeholder="Whats on your mind">
							<input class='uiButton' id='createSubmit' type="submit" value="Create Post">
						</fieldset>
		</form>
		`)
	$('#createNewPost').on('click', event => {
		$('#userAlert').text('Create a new post below')
		$('#createNewPost').hide()
		$('#createPostForm').html(createHTML).show()
		
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
	
	$('#settings').on('click', event => {
		event.preventDefault()
		$('#userAlert').text('Settings are below')
		$('.settings').show()
		$('#showChangePassword').show()
		$('.editPostUi').hide()
		$('#updatePostForm').trigger('reset').hide()
		$('#home-display').html('').hide()
		$('#laws-display').html('').hide()
		$('#changePasswordForm').hide()
		$('#createNewPost').hide()
		$('#post-display').html('').hide()
	})
	$('#laws').on('click', postEvents.onLawsClick)
	$('li').on('click', event => {
		$('.navbar-toggler').click()
	})
})

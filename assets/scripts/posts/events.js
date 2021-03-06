'use strict'

// require the get form fields function to collect data from the event
const getFormFields = require('./../../../lib/get-form-fields')

// require the api and ui files for posts
const api = require('./api')
const ui = require('./ui')

// require the store
const store = require('../store')

// Event handler for the See All Posts listener
const onSeeAllPosts = event => {
	//stop the default action
	event.preventDefault()
	
//call the api
	api.index()
		.then(ui.onIndexSuccess)
		.catch(ui.onError)
}

// Event handler for the submission of a new post
const onCreatePost = event => {
	event.preventDefault()
	
	// capture the form from the event
	const form = event.target
	// use getFormFields to extract the data from the form
	const data = getFormFields(form)
	// send data to the api
	api.create(data)

		// handle successful response
		.then(ui.onCreateSuccess)
		// handle failed response
		.catch(ui.onError)
	$('form').prop('disabled', true)
}

// Event handler for the Edit btn
// Edit btn appears on successful index request
// clicking edit will start a Show request for that specific post
const onEditPost = event => {
	//prevent default action
	event.preventDefault()
	//set a variable for the event targets data attribute
	const id = $(event.target).data('id')
	api.show(id)
		.then(ui.onShowSuccess)
		.catch(ui.onError)
}

// handler for the Delete function
const onDestroyPost = event => {
	//prevent default behavior
	event.preventDefault()
	
	// set the data attribute from the event to a variable
	const id = $(event.target).data('id')
	
	//send the variable to the api delete request
	api.destroy(id)
		.then(ui.onDestroySuccess)
		.catch(ui.onError)
}

// function to pass the current post content to the update post form
const setupUpdateForm = event => {
	event.preventDefault()
	$('#userAlert').text(`Make changes to the post titled (${store.post.title}) Below`)
	$('#updatePostForm').show()
$('#post-display').html('').hide()	
	//setup the UI changes 
	$('.editPostUi').hide()
	
	// create the update html form
	const updateHTML = (`
		<form  name="updatePostForm">
				<fieldset>
					<legend>Update Post</legend> <label for="title">Title:</label><input required="" id="title" type="text" name="post[title]" value="${store.post.title}">
		<label for="guideDogName">Guide's Name:</label><input required="" id='guideDogName' type="text" name="post[guideDogName]" value="${store.post.guideDogName}"> 
		<label for="yearsOfService">Years in Service:</label><input required="" id='yearsOfService' type="text" name="post[yearsOfService]" value="${store.post.yearsOfService}"> 
		<label for="breed">Breed:</label><input required="" id='breed' type="text" name="post[breed]" value="${store.post.breed}"> 
		<label for="postText">Post:</label>
		<input required="" id='postText' type="text" name="post[text]" value="${store.post.text}">
		<input class='uiButton' type="submit" id="subUpdateBtn" value="Update Post">
				</fieldset>
		</form>
	`)
	//inject updateHTML into the display-update-form div
	$('#updatePostForm').html(updateHTML)
	
	// if this is a secondary edit enable the form to be editable
	$('#subUpdateBtn').prop('disabled', false)
	$('#updatePostForm input').prop('disabled', false)
	
	
}

// Event handler for the submission of the update form
const onUpdatePost = event => {
	event.preventDefault()
	// capture the form from the event
	const form = event.target
	// use getFormFields to extract the data from the form
	const data = getFormFields(form)
	// send data to the api
	api.update(data)
		// handle successful response
		.then(ui.onUpdateSuccess)
		// handle failed response
		.catch(ui.onError)
}

// function for the home display
const home = function () {
	let homeHTML = (`
		<h2>Hi ${store.user.email}</h2>
		<p> You are at your home page, use the navigation bar to explore posts, reference the access laws in case you run into an access issue, or change your password in the settings section. </p>
	`)
	$('#home-display').html(homeHTML)
}

// handler for the laws link being clicked
const onLawsClick = function () {
	$('#post-display').html('').hide()
	$('#home-display').html('').hide()
	$('form').hide()
	$('#showChangePassword').hide()
	ui.onLawsSuccess()
}

module.exports = {
	onSeeAllPosts,
	onCreatePost,
	onEditPost,
	onDestroyPost,
	setupUpdateForm,
	onUpdatePost,
	home,
	onLawsClick
}
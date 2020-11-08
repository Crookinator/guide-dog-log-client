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

module.exports = {
	onSeeAllPosts,
	onCreatePost,
	onEditPost,
	onDestroyPost
}
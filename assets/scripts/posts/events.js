'use strict'

// require the get form fields function to collect data from the event
const getFormFields = require('./../../../lib/get-form-fields')

// require the api and ui files for posts
const api = require('./api')
const ui = require('./ui')

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


module.exports = {
	onSeeAllPosts,
	onCreatePost
}
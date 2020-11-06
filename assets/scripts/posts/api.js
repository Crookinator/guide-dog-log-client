'use strict'
// require the config file for the http route
const config = require('./../config')
// require the store for keeping track of responses
const store = require('../store')

// index ajax request to get all the posts
const index = function () {
	return $.ajax({
		url: config.apiUrl + '/posts',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		method: 'GET'
	})
}

// show ajax request to see a specific post
const show = function () {
	return $.ajax({
		url: config.apiUrl + '/posts/:id',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		method: 'GET'
	})
}

// create ajax request to make new post
const create = function () {
	return $.ajax({
		url: config.apiUrl + '/posts',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		method: 'POST'
	})
}

// update ajax request to change a post
const update = function () {
	return $.ajax({
		url: config.apiUrl + '/posts'
	})
}
// delete ajax function to destroy a post
const delete = function () {
	return $.ajax({
		
	})
}
module.exports = {
	index
}
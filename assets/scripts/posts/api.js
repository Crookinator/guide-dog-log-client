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
const show = function (id) {
	//id is a param for passing the posts id from the event handler
	return $.ajax({
		url: config.apiUrl + '/posts/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		method: 'GET'
	})
}

// create ajax request to make new post
const create = function (data) {
	return $.ajax({
		url: config.apiUrl + '/posts',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		method: 'POST',
		data: data
	})
}

// delete ajax request
const destroy = id => {
	return $.ajax({
		url: config.apiUrl + '/posts/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		method: 'DELETE'
	})
}

// update ajax request to change a post
const update = function (data) {
	return $.ajax({
		url: config.apiUrl + '/posts/' + store.post._id,
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		method: 'PATCH',
		data: data
	})
}

module.exports = {
	index,
	create,
	show,
	destroy,
	update
}
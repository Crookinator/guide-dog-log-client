'use strict'
// require the store
const store = require('../store')

// successful index request
const onIndexSuccess = function (res) {
	//set store to the index response 
	store.posts = res.posts
	
	//set a variable for HTML to be injected
	let postHTML

	$('#createNewPost').show()
	// empty the displayPosts div
  $('#post-display').html('')
	
	// set the userAlert field to inform user that posts are available
	$('#userAlert').text('See posts below')
	
	//itterate over each post to inject into HTML
	store.posts.forEach(currentPost => {
		if (store.user._id !== currentPost.owner) {
			postHTML = (`
				<h4>title: ${currentPost.title}</h4>
				<p>Guide: ${currentPost.guideDogName}</p>
				<p>Breed: ${currentPost.breed}</p>
				<p>Years Together: ${currentPost.yearsOfService}</p>
				<p>Post: ${currentPost.text}</p>
				<br>
			`)
		} else {
			postHTML = (`
				<h4>title: ${currentPost.title}</h4>
				<p>Guide: ${currentPost.guideDogName}</p>
				<p>Breed: ${currentPost.breed}</p>
				<p>Years Together: ${currentPost.yearsOfService}</p>
				<p>Post: ${currentPost.text}</p>
				<button class="edit" data-id="${currentPost._id}">Edit Post</button>
				<br>
			`)
		}

		
			//append html below each post
			$('#post-display').append(postHTML)
		})
	$('#post-display').show()
}

// on successful GET request for a single post
const onShowSuccess = function (res) {
	
	$('#editPostUi').show()
	$('#validateDestroy').prop('disabled', false).val("1")
	$('#showUpdate').prop('disabled', false)
	$('#createNewPost').hide()
	//set the store to the response
	store.post = res.post

// pass the id of the post to the Delete Post and Update buttons as a data attribute
	$('#destroyPost').data('id', store.post._id)
	$('#showUpdate').data('id', store.post._id)
  // clear out the HTML in the post-display div
  $('#post-display').html('')

  // created a string of HTML, plugging in post values
  const postHTML = (`
		<h4>title: ${store.post.title}</h4>
			<p>Guide: ${store.post.guideDogName}</p>
			<p>Breed: ${store.post.breed}</p>
			<p>Years Together: ${store.post.yearsOfService}</p>
			<p>Post:\n ${store.post.text}</p>
  `)
$('#userAlert').text('Post is below')
	$('#post-display').html(postHTML)
}

// on successful delete
const onDestroySuccess = function () {
  $('#userAlert').text('Post was successfully deleted. Click "Home" to return to the main screen.')
	$('#post-display').html('').hide()

  // reset the form and disable the update button
	$('#destroyPost').prop('disabled', true)
	$('#validateDestroy').prop('disabled', true)
	$('#showUpdate').prop('disabled', true)
}

// on successful update 
const onUpdateSuccess = function () {
  $('#userAlert').text('Post has updated! Click "Home" to return to the main screen.')

  // disable the update button and clear the form  to prevent further edits
	$('#subUpdateBtn').prop('disabled', true)
	$('#display-update-form input').prop('disabled', true)
	
}

// when a post is created
const onCreateSuccess = function () {
  $('#userAlert').text('Post has been Created! Click "Home" to return to the main screen.')

  // disable the form inputs
  $('#createSubmit').prop('disabled', true).addClass('dimmed')
}

// error msg if something goes wrong
const onError = function (error) {
	$('#userAlert').text('An error occured in this process. Please try again.')
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDestroySuccess,
  onError,
  onUpdateSuccess,
	onCreateSuccess
}
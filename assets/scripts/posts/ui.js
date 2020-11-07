'use strict'

// successful index request
const onIndexSuccess = function (res) {
	//set posts variable to store the response from the api
	const posts = res.posts
	// empty the displayPosts div
  $('#post-display').html('')
	
	posts.forEach(currentPost => {
    const postHTML = (`
      <h4>title: ${currentPost.title}</h4>
      <p>Guide: ${currentPost.guideDogName}</p>
      <p>Breed: ${currentPost.breed}</p>
			<p>Years Together: ${currentPost.yearsOfService}</p>
      <p>Post: ${currentPost.text}</p>
			<p>ID: ${currentPost._id}</p>
      <br>
    `)
			
			$('#post-display').append(postHTML)
		})
	$('#post-display').show()
}

// on successful GET request for a single post
const onShowSuccess = function (res) {
	//set a variable to the response
	const post = res.post

  // clear out the HTML in the post-display div
  $('#post-display').html('')

  // created a string of HTML, plugging in post values
  const postHTML = (`
		<h4>title: ${currentPost.title}</h4>
			<p>Guide: ${currentPost.guideDogName}</p>
		``<p>Breed: ${currentPost.breed}</p>
			<p>Years Together: ${currentPost.yearsOfService}</p>
		<p>Post: ${currentPost.text}</p>
			<p>ID: ${currentPost._id}</p>
    <br>
  `)

  $('#post-display').html(postHTML)

  // clears out form input values
  $('#posts-show').trigger('reset')
}

// on successful delete
const onDestroySuccess = function () {
  $('#userAlert').text('Books have changed! Click "Get All Books" again to see all the posts')

  // reset all forms
  $('form').trigger('reset')
}

// on successful update 
const onUpdateSuccess = function () {
  $('#userAlert').text('Posts have updated! Click "Get All posts" again to see all the posts')

  // reset all forms
  $('form').trigger('reset')
}

// when a post is created
const onCreateSuccess = function () {
  $('#userAlert').text('Book has been Created! Click "Get All Books" again to see all the posts')

  // reset all forms
  $('form').trigger('reset')
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
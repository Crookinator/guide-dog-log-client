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
	$('#createPostForm').hide()
	$('#home-display').html('').hide()
	$('#laws-display').html('').hide()
	$('.settings').hide()
	$('form').hide()
	// empty the displayPosts div
  $('#post-display').html('')
	
	// set the userAlert field to inform user that posts are available
	$('#userAlert').text('See posts below')
	
	//itterate over each post to inject into HTML
	store.posts.forEach(currentPost => {
		if (store.user._id !== currentPost.owner) {
			postHTML = (`
				<br>
				<div class="post">
				<h2>${currentPost.title}</h2>
				<p>Guide: ${currentPost.guideDogName}</p>
				<p>Breed: ${currentPost.breed}</p>
				<p>Years Together: ${currentPost.yearsOfService}</p>
				<p>${currentPost.text}</p>
				</div>
			`)
		} else {
			postHTML = (`
				<br>
				<div class="post">
				<h2>${currentPost.title}</h2>
				<p>Guide: ${currentPost.guideDogName}</p>
				<p>Breed: ${currentPost.breed}</p>
				<p>Years Together: ${currentPost.yearsOfService}</p>
				<p>${currentPost.text}</p>
				</div>
				<br>
				<button class="edit" data-id="${currentPost._id}">Edit Post</button>
			`)
		}

		
			//append html below each post
			$('#post-display').append(postHTML)
		})
	$('#post-display').show()
}

// on successful GET request for a single post
const onShowSuccess = function (res) {
	
	$('#validateDestroy').prop('disabled', false).val("1")
	$('.editPostUi').show()
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
		<div class="post">
		<h2>${store.post.title}</h2>
		<p>Guide: ${store.post.guideDogName}</p>
		<p>Breed: ${store.post.breed} </p>
		<p>Years Together: ${store.post.yearsOfService}</p>
			<p>${store.post.text}</p>
		</div>
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

// function to show the guide dog laws
const onLawsSuccess = function () {
	const lawHTML = (`
		<h2>General Info</h2>
		<p>Access laws in the United States and Canada, including the Americans with Disabilities Act (ADA) and the Human Rights Act of Canada, permit people who are blind to be accompanied by their guide dogs everywhere the general public is allowed: stores, restaurants, office buildings, taxis, buses and all areas of public accommodation. A guide dog is trained to stand, sit or lie quietly in public places when not leading. Individual states and provinces have their own laws as well; for the most current laws, please visit the respective state or province websites.</p>
		<br>
		<h2>Air Carrier Access Act (ACAA)</h2>
		<p>
		Under the Air Carrier Access Act (ACAA) a service animal is any animal that is individually trained or able to provide assistance to a person with a disability; or any animal that assists persons with disabilities by providing emotional support.  Documentation may be required of passengers needing to travel with an emotional support or psychiatric service animal.
		
		Your animal cannot block a space that must remain unobstructed for safety reasons (ex. an aisle or access to an emergency exit).
An airline is not required to upgrade you to a different class of service to accommodate your animal.
Airlines cannot refuse to allow your animal onboard because it makes other passengers or flight crew uncomfortable.
Your animal must behave properly. An animal that engages in disruptive behavior (ex. barking or snarling, running around, and/or jumping onto other passengers, etc. without being provoked) will not be accepted as a service animal.</p>
		<br>
		<h2>ACAA Video Explanation</h2>
		<iframe style="margin-bottom: 20px" width="560" height="315" src="https://www.youtube.com/embed/LbZhruHJKdA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`)
	$('#laws-display').html(lawHTML).show()
		$('#createNewPost').hide()
	
	$('#userAlert').text('Laws are below')

}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDestroySuccess,
  onError,
  onUpdateSuccess,
	onCreateSuccess,
	onLawsSuccess
}
## See the API here:
https://github.com/Crookinator/guide-dog-log-api 

# Full Stack Project Practice

Be prepared to discuss these items with a consultant during a 1 on 1.

You may use GitHub, PowerPoint, Keynote, or any other tools you desire to
complete any part of this.

## Project Idea
An app to serve as a forum for guide dog users. This forum should also reference basic laws to help a guide dog user in situations where they may need to reference the laws. 

## User stories

As a user I would like to sign-up and sign-in
As a user I'd like to change my password.
As a user I would like to reference the guide dog laws
As a user I would like to leave a comment on my own experiences as a guide dog owner
As a user I would like to be able to reference my posts
As a user I would like to be able to edit and delete my posts
As a user I would like to be able to see others posts
As a user I would like to be able to sign out


## Wireframes
### Wire frame description:
Landing screen will have the sign-in form and a button to access sign up form. 
Upon successful sign in/up the main screen will load with the main body of the app having a navbar for settings which will contain the change password UI, sign out, community posts, home,  and see laws.
The community posts view will view all comments and a button that activates a  form to create a new post.
The view laws view will have an overview of laws pertaining to guide dogs and a video linked from YouTube that goes over the Air Carrier Access Act (ACAA).


## Resources
I will need access to the laws and the YouTube link. I will need to create an api to store the user comments (see above link for api) I will also need to setup routes for user comments and the ability to view those comments. 

## ERD (entity relationship diagram)

### ERD description:
The users to comments resource will be a one to many relationship as 1 user can have multiple comments.

## Routing

I will need to have a user route and comment route. I will need to be able to set relationships with the user route and comment routes. I will need to establish CRUD endpoints for the comments in order to achieve the user stories. 


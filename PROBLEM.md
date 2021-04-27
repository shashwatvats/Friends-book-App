# ReactJS Hackathon

## Friends Book Assignment

### Objective:
You need to create a front end for Friends Book social media application. 

### The estimated time to complete this assignment is 3 hours

### Things to do
- Fork the boilerplate
- Clone the repo in your local directory
- Start coding in your local copy
- Push the code in git

### Prerequisite
- Fork this boilerplate repository
- Clone the boilerplate repository and cd into it
- Install dependencies npm install
- Run the json-server which shall run on port:3002
- Run the frontend using npm start which shall run on port:3000
- Run the same auth server that we used in React-Assignment2 which shall run on port:3001.

### The Dummy API to be used as a data source
- To get the list of users use the endpoint - https://dummyapi.io/data/api/user?limit=20
- To get the full profile details of a particular user, use the endpoint - https://dummyapi.io/data/api/user/<user_id>

### To register for an API key, follow these steps:
- You need to signup to [DummyAPI] (https://dummyapi.io/sign-in)
- After registration, API key is generated for you.
- It is required to have the API key in request headers with `app-id` key.

### Assignment Requirements
- Friends Book should use Bootstrap or Material UI for its UI design.
- User shall be shown a login form
- After authentication, user should be able to see all users list from Dummy API on the `Home` Component as Cards
- In each card, there should be 2 links/buttons - `See Profile` & `Add Friend`.
- Upon clicking on `See Profile`, the complete profile of the user should be displayed on `Profile` Component. Use parameterized route for the same.
- Upon clicking on `Add Friend`, the user should be added in Friends List and can be seen from `FriendsList` Component.
- In `FriendsList` component, each user details should be displayed in card, with `See Profile` and `Remove Friend` button/link.
- Header should have links like `My Friends`, `Login` & `Home`. Implement routing for navigating to particular page.
- Data should be persisted in db.json file.
- UI should be responsive.

### Components to be added
- Home
- FriendsList
- Login
- Profile
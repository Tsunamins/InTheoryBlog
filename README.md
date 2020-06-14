# InTheoryBlog

Post bootcamp graduation, I felt it imporant to start familiarizing with other in demand technologies.  Thought it a nice time to reinforce React by learning how to integrate a backend built with Node.js.

This app uses MongoDB as the datatbase in conjuction with MongoDB Atlas, Express.js and Mongoose for introductory simplicity.

Features include the ability to create a user, create a post based on the currently logged in user, edit/delete posts, as well as some basic jwt token based authentication.  Authorization/route protection in the works, but wanted to get the basics for now.

### To use:
Would probably need to create a native MongoDB connection or create a cluster within MondgoDB atlas.
Ran backend server off of global install of nodemon, excluded ./config directory with keys via gitignore, so would have to re-establish a keys file.
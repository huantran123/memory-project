# memory-project

1. Create client and server folder
2. cd to client folder in terminal, type `npx create-react-app ./`
3. cd to server folder in another terminal, create index.js file, type command `npm init -y` to install package.json file
4. In server terminal, type `npm install body-parser cors express mongoose nodemon` to install every things neccessary for the server
      - body-parser: to put data from client side into request body before handling
      - cors: to support cross-origin request and data transfers between browsers and servers
      - express: for serverside management
      - mongoose: for database management
      - nodemon: to watch changes in server
5. In server/index.js, import express, body-parser, mongoose and cors. To use import-from syntax, go to package.js, under "main" line, add "type": "module",
6. In server/package.json, in script tag, remove "test", add "start": "nodemon index.js"
7. In client server, type `npm install axios moment react-file-base-64 redux redux-thunk`
      - axios: to make API request
      - moment: library for time and date
      - react-file-base64: to convert images
      - redux: to manage actions and states
      - redux-thunk: for handle asynchronous actions using redux

8. In client folder, delete src folder (since it has lot of unnecessary default stuff), create a new src folder, add a new index.js file and import neccessary things, do reactDOM.render
9. In client folder, create App.js file. import React, define App function, and export default App.

10. In server/index.js, do intial setup: call `express()`, `app.use` with bodyParser and cors. Create connection url using mongodb cloud atlas (https://www.mongodb.com/cloud/atlas). Specify the PORT number
11. Connect to the cloud database using `mongoose.connect`

12. Inside server folder, create routes folder and the file posts.js inside routes folder.
13. In routes/posts.js, setup rounter by calling `express.Router()`. Handle get request from `'/'` and export router

14. In server/index.js, import the post router, call it `postRoutes`
15. Setup the starting path for all routes inside posts.js

16. Inside server folder, create new controllers folder with posts.js file inside.
17. In controllers/posts.js, write `getPosts` function and export it
18. In routes/posts.js, import getPosts and use it in `router.get('/', getPosts)`

19. Inside server folder, create new models folder with the first postMessage.js file inside
20. Inside models/postMessage.js, import mongoose and create postSchema, create a model for postSchema and export it.
21. In controllers/postMessage.js, export a new function called createPost
22. In routes/posts.js, import createPost function, write function for post request using createPost.
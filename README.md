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

23. In controllers/posts.js, `import PostMessage` from models/postMessage.js.
24. Turn getPosts function in controllers/posts.js into an async function because finding posts inside db will be asychronous function.
25. Turn createPost in controllers/posts.js into an async funciton as well.
26. Learn about status code: https://www.restapitutorial.com/httpstatuscodes.html

27. Moving to client side.
28. Instal Material UI: `npm -f install @material-ui/core`
29. Inside src folder, create images folder that store the memories.png image
30. Create components folder in src. Inside components folder, create Form and Post folders. Create 2 files Form.js and Post.js inside Form folder and Posts folder. Create a new styles.js file in each folder too.
31. Inside Posts folder, create a folder called Post with 2 files Post.js and styles.js inside.

32. Inside App.js, import Container, AppBar, Typography, Grow, and Grid form material ui. Import the memories.png image.
33. Inside App function, edit HTML code in return using Container, AppBar, Typography, Grow and Grid, Posts, and Form
      - Notice inse Grid, xs={12} means that on extra small devices, take the full witdth. sm={7} means that on small or medium devices, take 7/12 spaces.
34. In Posts.js and Forms.js, create Posts and Forms functions, exports them. Import Posts and Form in App.js
35. In Post/Post.js, create Post function, export it and use it in Posts/Posts.js

36. In src folder, create a styles.js file for App.js. For all styles.js files, use provided codes so it wouldn't take time focusing on styling the site.
37. To apply the styles to the component files, in the component files such as App.js, Post.js, etc.:
      a. First, `import useStyles from './styles'`.
      b. Then inside the functions, above return line, add classes variable `const classes = useStyles()`
      c. In each tag that you want to apply styles, add className `className={classes.<name_of_styled_class>}`

38. In src, create api folder with index.js file inside.
39. Inside api/index.js, import axios, create url variable with the url `'http://localhost:1128/posts'`. Export fetchPost function.


40. Install react-redux in termial: `npm install react-redux`
41. Adding Redux sections. In src:
      - Create actions folder, create posts.js file inside
      - Create reducers folder, create posts.js and index.js inside
42. In src/index.js, import Provider, createStore, applyMiddleware, compose, and thunk
43. Use createStore to create store, passing inside reducers, applyMiddleware. But we have to import reducers from reducers/index first.
44. In reducers/index.js, use combineReducers
45. In reducers/posts.js, create reducer for posts and export it
46. In src/index.js, put `<App />` inside `<Provider store={store}>`
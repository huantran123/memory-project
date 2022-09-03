# momory-project

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

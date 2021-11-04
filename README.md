Make two separate folders (client and server) and use two separate terminals for them

client 
terminal - npx create-react-app ./
terminal - npm install axios moment react-file-base64 redux redux-thunk
axios :- for making api request 
moment :- for working with time and date
react-file-base64 :- convert our images
redux-thunk :- used for asynchronous actions using redux
folder - delete src folder in it and create index.js and App.js

server
terminal - npm init -y
terminal - npm install body-parser cors express mongoose nodemon
body-parser :- Enable us to send requests (eg. post)
cors :- Cross origin requests
express :- for creating the routing of our application
mongoose :- To create modals for our post
nodemon :- So that we should not have to manually restart the server when we make a change instead nodemon will be doing that
folder - create index.js
package.json - "scripts": {
    "start": "nodemon index.js"
  }
First work in backend
create routes/posts.js in server folder

Info:
async-await :- we use async await when we have to wait for result while fetching data 

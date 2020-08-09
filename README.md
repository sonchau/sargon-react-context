# Sargon Coding Challenge

 Build a frontend UI to search the “Public Feed” [Flickr JSONP API](https://www.flickr.com/services/feeds/docs/photos_public/) and view pics. 
 Incorporate the following in your solution: 
  - real-time/instant results as the user type
  - image as a thumbnail
  - display author, tags
  - link the thumbnail to the hi-res image so the user can view that too

# Solution 1 technology
  - Create react app
  - Prop type for type checking
  - useContext, useReducer to maintain global state
  - sometimes user type so fast in the text input, use debounce to send request every 500ms to improve performance 
  - fetch-jsonp cause endpoint only support jsonp response. Both axios and fetch api return CORS issue.
  - styled component
  - resonsive design with css grid layout
  - serverless deployment to [github pages](http://sonchau.github.io/sargon-react-context)

### Installation

The code requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/sonchau/sargon-react-context.git
$ cd sargon-react-context
$ npm install
$ npm run start
```
### Todos
 - Write unit using Jest and React Testing Library
 - Write functional test using Cypress
 - Write screenshot test using Storybook
 - Add Night Mode
 - Add accessibility

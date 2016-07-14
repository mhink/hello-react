// Instead of having the user's browser load these packages from a CDN,
// Webpack will bundle them into our output bundle.

// React is what lets us build and instantiate components. It will
// be responsible for all the manipulation of components.
var React     = require("react");

// ReactDOM is more-or-less the link between React and the browser DOM.
// As far as I can tell, this is what takes React's "pseudo-dom diff" 
// and actually performs the requested actions on the browser DOM.
var ReactDOM  = require("react-dom");

// jQuery is still useful for stuff we need to do outside the scope of React.
// We'll use it very sparingly.
var jQuery    = require("jquery");

// This is what a completely vanilla ES5 React component definition.
// looks like. React.createClass() is basically just setting up an 
// object whose prototype is React.Component.
var HelloWorld = React.createClass({
  render: function() {
    return React.createElement("p", {}, "Hello, world!");
  }
});

$(document).ready(function() {
  ReactDOM.render(
    React.createElement(HelloWorld),
    $("#react-root")[0]
  );
});

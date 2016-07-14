// Instead of having the user's browser load these packages from a CDN,
// Webpack will bundle them into our output bundle.

import React, { Component, createElement } from "react"
import ReactDOM from "react-dom"
import $ from "jquery"

class HelloWorld extends Component {
  render () {
    return createElement("p", {}, "Hello, world!");
  }
}

$(document).ready(function() {
  ReactDOM.render(
    createElement(HelloWorld),
    $("#react-root")[0]
  )
})

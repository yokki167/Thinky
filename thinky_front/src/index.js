// Import Components
import App from "./components/App"

// Import Styles

// Import Pacakages
import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"

// Render ./Component/App.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()

// Import Components
import App from "./components/App"

// Import Styles
import "./styles/index.css"

// Import Pacakages
import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()

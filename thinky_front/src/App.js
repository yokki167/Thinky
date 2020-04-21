import React from "react";
import logo from "./logo.svg";
import Home from "./components/Home.js";
import "./App.css";
import Layout from "./components/Layout";
import WhyModal from "./components/WhyModal.js";
import UserMypage from "./components/UserMypage.js";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React11
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Layout>
        <Link to="/home">ホーム画面へ</Link>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/why" component={WhyModal} />
          {/* <Route path="/share" component={Share} /> */}
          <Route path="/mypage" component={UserMypage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

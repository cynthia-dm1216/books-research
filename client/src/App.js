import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./pages/SearchBar";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Jumbotron /> */}
        <Switch>
          <Route exact path= '/'>
            <SearchBar />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

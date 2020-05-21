import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./pages/SearchBar";
import SavedBar from "./pages/SavedBar";
import Nav from "./components/Nav";
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path= '/'>
            <SearchBar />
          </Route>
          <Route exact path='/saved'>
            <SavedBar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

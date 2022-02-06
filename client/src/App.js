import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Home from "./views/NotSignedIn/Home/Home";
import SignIn from "./views/NotSignedIn/SignIn/SignIn";
import Search from "./views/Search/Search";
import Browse from "./views/Browse/Browse";
import "./App.css";
import Register from "./views/NotSignedIn/Register/Register";

function App() {

  const API_KEY = `${process.env.REACT_APP_API_KEY}`;

  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = async (query) => {

    await axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&page=1`
      )
      .then((request) => {
        setSearchResult(request.data.results);
      });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/browse">
            <Browse onSearch={searchHandler} searchResult={searchResult} />
          </Route>

          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/search">
            <Search onSearch={searchHandler} data={searchResult} />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

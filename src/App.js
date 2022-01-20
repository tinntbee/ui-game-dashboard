import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import SideBar from "./components/SideBar/SideBar";
import NewsFeed from "./features/NewsFeed/NewsFeed";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="Body">
        <Nav />
        <div className="Body__Content">
          <Switch>
            <Redirect from="/" to="/news-feed" exact />
            <Route path="/news-feed" component={NewsFeed} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

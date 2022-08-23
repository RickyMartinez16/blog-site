import "./App.css";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return(
    <Router>
      <Route>
        <NavBar />
      </Route>
      <Switch>
        <Route exact={true} path="/">
          <HomePage /> 
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/article/:name">
          <ArticlePage />
        </Route>
        <Route path="/articles-list">
          <ArticlesListPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

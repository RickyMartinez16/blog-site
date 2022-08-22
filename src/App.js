import "./App.css";
import {Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./NavBar";

function App() {
  return(
    <Router>
      <Route>
        <NavBar />
      </Route>
      <Route exact={true} path="/">
         <HomePage /> 
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/articles-list">
        <ArticlesListPage />
      </Route>
      <Route path="/article">
        <ArticlePage />
      </Route>
    </Router>
  )
}

export default App;

import "./App.css";
import {Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";

function App() {
  return(
    <Router>
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

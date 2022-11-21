import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import NewPost from './NewPost';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="nav">
          <nav>
            <ul>
              <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/blog" exact activeClassName="active">Blog</NavLink></li>
              <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
              <li><NavLink to="/contact" exact activeClassName="active">Contact Us</NavLink></li>
            </ul>
          </nav>
          <NavLink to="/blog/post/new" exact activeClassName="active">Create New Post</NavLink>
        </header>
        <main>
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/post/new" exact>
              <NewPost />
            </Route>
            <Route path="/blog/post/:id" exact>
              <Post />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

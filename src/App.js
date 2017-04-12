import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import newPost from './newPost';
import Main from './Main';
import post2 from './post2';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/newPost" component={newPost} />
      <Route path="/post/001" component={post2} />
    </div>
  </Router>
    );

export default App;

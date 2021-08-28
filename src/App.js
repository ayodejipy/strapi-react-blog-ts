import React from 'react';
import { Switch, Route  } from 'react-router-dom';
// Components
import Nav from './components/Nav';
import ArticlesList from './components/Articles';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={ ArticlesList } />
        <Route path="/article/:id" exact component={ Article } />
      </Switch>
      
    </div>
  );
}

export default App;

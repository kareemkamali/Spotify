import React from 'react';
import './App.css';
import {
  Route,
  Redirect,
  Switch,

  
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AlbumsPage from './Pages/AlbumsPage';
function App() {

  return (
  

<Switch>
  <Route exact path="/">     
<HomePage></HomePage> 
  </Route>
  <Route path="/albums/:id">     
<AlbumsPage/>
  </Route>
  <Redirect to='/' />
   </Switch>

   
  );
}

export default App;

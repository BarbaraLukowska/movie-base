import React from 'react';
import ReactDOM from 'react-dom';
import {SearchMovies} from './components/searchMovies.jsx';
import "../scss/style.scss";

document.addEventListener('DOMContentLoaded', function(){


  class App extends React.Component {
    render(){
      return <SearchMovies/>
    }
  }
  ReactDOM.render(
      <App/>,
      document.getElementById('app')
  );
});

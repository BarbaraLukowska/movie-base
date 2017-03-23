import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header.jsx';
import {MovieInfo} from './movieInfo.jsx';

  class SearchMovies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isInputEmpty: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({title: e.target.search.value});
  }

  handleInputChange = (e) => {
    this.setState({ isInputEmpty: !e.target.value})
  }

  render(){
    return <div className="container">
          <Header/>
          <form
            className="search-form"
            onSubmit={this.handleSubmit}
          >
            <div className="inputs">
              <input
                type="text"
                name="search"
                placeholder="Find your favourite movies"
                onChange={this.handleInputChange}
                />
              <button
                type="submit"
                disabled={this.state.isInputEmpty}
              />
            </div>
          </form>
          <MovieInfo title={this.state.title}/>
        </div>
      }
  }

export { SearchMovies };

import React from 'react';
import ReactDOM from 'react-dom';

  class MovieInfo extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        loading: true,
        info: {}
      }
    }

    componentWillReceiveProps(props) {
      if (!props.title) {
        return null;
      }
      fetch('https://www.omdbapi.com/?t=' + props.title).then( resp =>{
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Błąd sieci");
        }
      }).then( info => {
        this.setState({loading: false, info: info})
      }).catch( (err) => {
        this.setState({title: "ERROR!"})
      });
    }

    render(){
      if (this.state.loading) {
        return null;
      } else {
        const details = <div className="movie-info">
            <div className="image">
              <img src={this.state.info.Poster}></img>
            </div>
            <div className="details">
              <h3>{this.state.info.Title}</h3>
              <ul>
                <li><span>Year: </span>{this.state.info.Year}</li>
                <li><span>Genre: </span> {this.state.info.Genre}</li>
                <li><span>Runtime: </span>{this.state.info.Runtime}</li>
                <li><span>Director: </span>{this.state.info.Director}</li>
                <li><span>Actors: </span>{this.state.info.Actors}</li>
                <li><span>Description: </span>{this.state.info.Plot}</li>
                <li><span>Awards: </span>{this.state.info.Awards}</li>
                <li><span>IMDb rating: </span>{this.state.info.imdbRating}</li>
              </ul>
            </div>
          </div>
        return details
      }
    }
  }

export {MovieInfo};

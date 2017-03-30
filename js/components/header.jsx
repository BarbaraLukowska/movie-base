import React from 'react';
import ReactDOM from 'react-dom';

  class Header extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        text: "Welcome to movies base!"
      }
    }
    componentDidMount() {
      this.timerId = setTimeout( () =>{
        this.setState({text: "Feel free to search your favourite movies!"})
      }, 3000)
    }
    componentWillUnmount() {
      clearTimeout(this.timerId);
    }
    render(){
      return <header>
          <h1>{this.state.text}</h1>
        </header>
    }
  }

export { Header };

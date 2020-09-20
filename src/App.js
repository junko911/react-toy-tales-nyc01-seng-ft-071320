import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: data
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  submitHandler = toyObj => {
    this.setState(() => ({
      toys: [toyObj, ...this.state.toys]
    }))
  }

  removeToy = toyObj => {
    this.setState(() => ({
      toys: this.state.toys.filter(toy => toy !== toyObj)
    }))
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submitHandler={this.submitHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} removeToy={this.removeToy}/>
      </>
    );
  }

}

export default App;

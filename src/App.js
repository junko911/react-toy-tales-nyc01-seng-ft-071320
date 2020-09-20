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
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(toyObj)
    }
    fetch("http://localhost:3000/toys", options)
    .then(res => res.json())
    .then(newObj => {
      this.setState(() => ({
        toys: [newObj, ...this.state.toys]
      }))
    })
  }

  removeToy = toyObj => {
    const options = {
      method: "DELETE"
    }
    fetch(`http://localhost:3000/toys/${toyObj.id}`, options)
    // .then(res => res.json())
    // .then(deleteObj => {
      this.setState(() => ({
        toys: this.state.toys.filter(toy => toy !== toyObj)
      }))
    // })
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

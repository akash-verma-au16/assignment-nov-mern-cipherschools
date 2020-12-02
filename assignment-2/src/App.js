import React, { Component } from 'react';
import Card from './components/Card.js'
class App extends Component{

  state = {
        dynamicName: "Click Counter", 
        count: {
          clickNumber: 0,
          id: 1,
        }
    }
  
  countClick = (id) => {
      let countNew = {
        clickNumber: this.state.count.clickNumber + 1,
        id: 1,
      }
      this.setState({count : countNew})
    }

  reduceClick = (id) => {
    if (this.state.count.clickNumber !== 0)
    {
      let countNew = {
        clickNumber: this.state.count.clickNumber - 1,
        id: 1,
      }
      this.setState({count : countNew})
    }
    }

  refreshClick = (id) => {
      let countNew = {
        clickNumber: 0,
        id: 1,
      }
      this.setState({count : countNew})
    }
  
  changeBackground = () => {
    }

  render(){
    return(
      <div>
        <Card dynamicName={this.state.dynamicName} count={this.state.count} countClick={this.countClick} 
        reduceClick={this.reduceClick} refreshClick={this.refreshClick}
        changeBackground></Card>
      </div>  
    )
  }
}

export default App;

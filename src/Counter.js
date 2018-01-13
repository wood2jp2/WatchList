import React, { Component } from 'react'

class Counter extends Component {

  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  increment = e => {
    e.preventDefault()
    this.setState({
      count: this.state.count+1
    })
  }

  decrement = e => {
    e.preventDefault()
    this.setState({
      count: this.state.count-1
    })
  }

  render() {
     return (
       <div>
         <p>{this.state.count}</p>
         <button
           val='increment'
           onClick={ e => {
             this.increment(e)
           }}>
           Increment
         </button>
         <button
           val='decrement'
           onClick={ e => {
             this.decrement(e)
           }}>
           Decrement
         </button>
       </div>
     )
  }
}

export default Counter

import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("Clicked the Function button")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me - Class component</button>
      </div>
    )
  }
}

export default EventsClass
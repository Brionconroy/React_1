import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('Constructor called')
      super(props)
    
      this.state = {
         greeting: 'hello'
      }
    }
    updateGreeting = () => {
        console.log('updated greeting called')
        this.setState(prevState => {
            return{
                greeting: prevState.greeting === 'Hello' ? 'Goodbye' : 'Hello'
            }
        })
    }
    componentDidUpdate() {
        console.log('Component updated')
    }

   render() {
    console.log('render method called')
    return (
      <div>
        <h1>
            {this.state.greeting}
        </h1>
        <button onClick={this.updateGreeting}>
            Update Greeting
        </button>
        <LifeCyclesCDUChild parentGreeting={this.state.greating}/>
      </div>
    )
  }
}

export default LifeCyclesCDU
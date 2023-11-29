import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post: [],
         error: null
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            console.log(response)
            this.setState({
                post: Array.isArray(response.data)
                ? response.data
                : [response.data]
            })
        })
        .catch(error =>{
            this.setState({
                error: error.message
            })
        })
    }
  render() {
    const post = this.state.post;
    return (
        <div>
            <h2>Post:</h2>
            {
                post.length ? (
                    post.map(post => (
                        <div key ={post.id}>
                            <h2>{post.id}. {post.title}</h2>
                            <h4>By User ID {post.userId}</h4>
                            <p>{post.body}</p>
                            <hr></hr>
                        </div>
                    ))
                ) : (
                    this.state.error
                    ? <p>{this.state.error}</p>
                    : <h4>Loading post....</h4>
                )
            }
        </div>
    )
  }
}

export default HTTPRequests
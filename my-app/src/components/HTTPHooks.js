import React, {useState, useEffect} from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);
    const postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello world!',
                body: 'It works!',
                userId: 123,
            }
        ).then(response => {
            setPostMessage(response.status === 201
                ? `Sussess! Title: ${response.data.title}`
                : 'Failed'
            )
        })
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => {
            console.log(response);
            const data = Array.isArray(response.data)
            ? response.data
            : [response.data]
            setPost(data);
        })
        .catch(error =>{
            setError(error.message);
            })
    }, [])

    return (
        <div>
            <button onClick={postToApi}>
                    Create Post
            </button>
            <p>{postMessage}</p>
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
                    error
                    ? <p>{error}</p>
                    : <h4>Loading post....</h4>
                )
            }
        </div>
    )
}

export default HTTPHooks
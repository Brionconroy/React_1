import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Gluck",
    //     })
    //     console.log(this);
    // }

// using an arrow function to define state

    handleClick = () => {
        this.setState({
            introduction: "Gluck",
        })
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting} {this.props.name} </h1>
                {/* <button onClick={() => this.handleClick()}> option 1 */}
                {/* <button onClick={this.handleClick.bind(this)}> option 2 */}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding;
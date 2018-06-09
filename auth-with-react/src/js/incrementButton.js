
import React, { Component } from 'react'


class Button extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    updateCount() {
        this.setState((prevState, props) => {
            return { count: prevState.count +1 }
        })
    }

    render() {
        return (
            <button onClick={() => this.updateCount()} >
                Clicked {this.state.count} times
            </button>
        )
    }
}

export default Button
import React, { Component } from 'react'
import { connect } from "dva"

class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default connect()(App)

import React, { Component, PropTypes } from 'react'
import './style.css'

class Square extends Component {
    render(){
        return (
          <button className="square" onClick={() => this.props.onClick()}>
            {this.props.value}
          </button>
        );
    }
}

export default Square
import React, { Component } from 'react';



class Buttons extends Component {
    render() {
        return (
            <div>
       
               <button src={ this.props.src } className = { this.props.btnClass } > { this.props.name }  </button>

            </div>
        )
    }
}

export default Buttons;
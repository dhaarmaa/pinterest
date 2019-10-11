import React, { Component } from 'react';



class Buttons extends Component {
    render() {
        return (
            <div>
       
               <button href={ this.props.href } className = { this.props.btnClass } > { this.props.name } </button>

            </div>
        )
    }
}

export default Buttons;
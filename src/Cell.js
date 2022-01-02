import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super();
        this.state = {
            color: props.value
        }
    }
//props.value, not props.values!
    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render(){
        return (<div className='cell'
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}></div>)
    }
}
//this.setState isnt called directly, but is invoked through handleClick, which then updates the color of state with a setState method
export default Cell
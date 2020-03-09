import React from 'react';
import ReactDOM from 'react-dom';

const black = '#000000';
const red = '#FF0000';

class ToggleHeart extends React.Component{
  constructor(props){
    super(props);
    this.state = { color: black };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newColor = this.state.color == black ? red : black;
    this.setState({ color: newColor })
  }
  render(){
    return(
  
      <i className="fa fa-heart" onClick={this.changeColor} style={{color: this.state.color}}></i>
   
    )
  }
}

export default ToggleHeart;
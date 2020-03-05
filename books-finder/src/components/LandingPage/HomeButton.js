import React  from 'react';
import { Icon } from '@material-ui/core';
import { borderRight, flexbox } from '@material-ui/system';


const buttonStyle = {
marginRight: 0,


};


const HomeButton =() => {
    return(
  <button>
        <i class="fa fa-home" style={buttonStyle}></i>
 </button>
    )
}

export default HomeButton;
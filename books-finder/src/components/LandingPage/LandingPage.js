import React  from 'react';
import LoginBox from'../Login/LoginBox' ;
import './LandingPage.css';




const LandingPage = () => {
  return (
    <>
       <div>
            <img className = "main-picture"src = "images/101722-OM1D1L-865.jpg" alt="Ilustracja szczęśliwej rodziny" />
        </div>
        <div >
            <img className = "logo" src = "images/logo.jpg" />
        </div>
        <LoginBox />

        </>
  );
};

export default LandingPage;


// const HomeButton =() => {
//   return(
// <button>
//       <i class="fa fa-home" style={buttonStyle}></i>
// </button>
//   )
// }

// export default HomeButton;
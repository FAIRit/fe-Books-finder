import React  from 'react';
import LoginBox from'../Login/LoginBox' ;
import Header from '../Header/Header';
import Nav from '../Nav/Nav';


const LandingPage = () => {
  return (
    <>
    <Nav />
    <Header />
    <LoginBox />
    </>
  );
};

export default LandingPage;

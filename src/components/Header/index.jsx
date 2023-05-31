import React from 'react';
import { Helmet } from 'react-helmet-async';
import UbcLogo from "../../images/ubcLogo.png";

const Header = (props) => {
  return (
    <Helmet>
        <title>{"CSPC 455 Assignment 2 " + props.title + " Page"}</title>
        <link rel="icon" type="image/png" href={UbcLogo} sizes="1x1"/>
    </Helmet>
  );
};

export default Header;
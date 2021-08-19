import React from "react";

// components
import Navbar from "../Components/Navbar/Navbar";
import FootTab from "../Components/FootTab/FootTab";


const HomeLayout = (props) => {
  return <>
  <Navbar/>
  <div className="container mx-auto px-4 lg:px-20">
     
     {props.children}
  </div>
  <FootTab/>

  </>;
};

export default HomeLayout;
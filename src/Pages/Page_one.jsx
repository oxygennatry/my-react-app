
import React from "react"
import { useNavigate } from "react-router-dom";


export const PageOne = () => {
    const navigate = useNavigate();
  
    const goToNextPage = () => {
      navigate("/page-two"); 
    };
  
    return (
      <>
        <h1>Hello World!</h1>
        <button onClick={goToNextPage}>NEXT PAGE!</button>
      </>
    );
  };
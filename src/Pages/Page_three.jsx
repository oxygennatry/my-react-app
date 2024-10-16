import React from "react"
import { useNavigate } from "react-router-dom";

export const PageThree = ()=>{
    const navigate = useNavigate();
  
    const goToNextPage = () => {
      navigate("/page-four"); 
    };
    
    return(
        <div className="">
        <h1>This is my Page!</h1>
        <button onClick={goToNextPage}>GO TO LAST PAGE!</button>
        </div>
    )

}
import React from "react"
import { useNavigate } from "react-router-dom";

export const PageTwo = ()=>{
    const navigate = useNavigate();
  
    const goToNextPage = () => {
      navigate("/page-three"); 
    };

    return(
        <div className="">
        <h1>Second Page!</h1>
        <button onClick={goToNextPage}>NEXT PAGE!</button>
        </div>
    )

}
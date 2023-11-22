import React, { Component } from "react";

export default function SubTitle({title}) {
    return (
      <>
        <h2
         className="font-semibold text-2xl">{title}</h2>
        <div className="bg-cyan-200 h-2"></div>
      </>
    );

}
// HOF : HIGH ORDER FUNCTION : 
//function qui renvoi une function 
// ou prend en parametre une func 
// ou les deux en mêmes temps 
// exemple : map , filter 

// HOC : HIGH ORDER COMPONENT 

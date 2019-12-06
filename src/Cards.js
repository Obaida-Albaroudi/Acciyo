import React, {useState, useEffect} from 'react';
import { Card} from 'semantic-ui-react'

        // <div style={{flexDirection:"row", flexWrap:"wrap", width:"150%"}}>
const Cards =(props) =>{
    return(
      <>
            {props.card.map(car =>{
              return(
            <div style={{width:"25%", marginLeft:"2%", marginBottom:"5%"}}>
            <img style={{width:"80%", height:"35%"}} src={car.urlToImage}/>
            <h2 style={{fontWeight: "bold",color: "#fff"}}>Title: {car.title}</h2>
            <p style={{fontStyle: "italic",color: "#fff"}}> Author: {car.author}</p>
            <p style={{font: 9,color: "#fff"}}>Summary: {car.description}</p>
            <a style={{color: "#fff"}}href={car.url}>Click Here</a>
            </div>
    )})}
      </>
    )
}

export default Cards;
import React from "react";
import sample11 from "../images/sample11.svg"
import "./card-style.css"

const Card = props => {
   const cardInfo=[
      {
        "title":"Title1",
        "description":"Lady with a red umbrella",
        "image":"https://i.imgur.com/pwpWaWu.jpg"
      },
      {
         "title":"Title2",
        "description":"Flowers and some fruits",
        "image":"https://i.imgur.com/KIPtISY.jpg"
      },
      {
         "title":"Title3",
        "description":"Beautiful scenery",
        "image":"https://i.imgur.com/2jMCqQ2.jpg"
      },
      {
        "title":"Title4",
        "description":"Some kind of bird",
        "image":"https://i.imgur.com/QFDRuAh.jpg"
      },
      {
        "title":"Title5",
        "description":"The attack of dragons",
        "image":"https://i.imgur.com/8yIIokW.jpg"
      }
      
    ];
    const renderCard=(card,index) =>{
       return (
         
         <div className="card-main text-center" key={index}>
            <div className="card">
               <img className="card-img-top" src={card.image} alt="Card image cap"></img>
               <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
         </div>
      </div>
       );
    }
     return <div className="Card-Container d-flex flex-row align-self-stretch">
        {cardInfo.map(renderCard)}
     </div>;
}
export default Card;

import React,{Component} from "react";
import Card from "../cardsexp/CardsUi"

class Cards extends Component {
   
    render() {
        return (
          <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                <div>
                    <Card></Card>
                </div>
               </div>
          </div> 
        );
    }
}

export default Cards;
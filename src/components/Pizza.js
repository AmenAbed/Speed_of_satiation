import React, { Component } from "react";
import ProdPizza from "./ProdPizza";
class Pizza extends Component{
    render(){
        const info=[{
            Image: "./images/IMG_20230905_195201_364.jpg",
            Titel: "Pepperoni Pizza",
            Text: "It contains slices of pepperoni and mozzarella cheese.",
            ID: "Pepperoni"
        },
        {Image: "./images/IMG_20230905_195208_019.jpg",
            Titel: "Vegetarian Pizza",
            Text: "It contains tomato sauce, mozzarella cheese, mushrooms, jalapenos, olives, and green peppers.",
            ID: "Vegetarian"
        },
        {
            Image: "./images/IMG_20230905_195224_718.jpg",
            Titel: "Sausage and egg Pizza",
            Text: "It contains slices of sausage, boiled eggs, and mozzarella cheese.",
            ID: "Sausage"
        },
        {Image: "./images/IMG_20230905_195204_635.jpg",
            Titel: "Margherita Pizza",
            Text: "It contains tomato sauce, mozzarella cheese, and basil leaves.",
            ID: "Margherita"
        },
        {
            Image: "./images/IMG_20230905_195213_946.jpg",
            Titel: "Caprese Pizza",
            Text: "It contains tomato sauce, mozzarella cheese, tomato slices, basil leaves, and olive oil.",
            ID: "Caprese"
        },
        {Image: "./images/IMG_20230905_195220_209.jpg",
            Titel: "Hot dog Pizza",
            Text: "It contains slices of hot dog, mozzarella chesse, and kethup sause.",
            ID: "Hot"
        },
        {
            Image: "./images/IMG_20230905_195231_161.jpg",
            Titel: "BBQ chicken Pizza",
            Text: "davaIt contains grilled checken pieces, mozarella cheese, and barbecue sauce.",
            ID: "BBQ"
        }
        
    ]
        const member=info.map(function(member){
            return (
               
                <ProdPizza 
                Image= {member.Image}
                Titel= {member.Titel}
                Text= {member.Text}
                ID= {member.ID}
                />
                
            )
            
        })

        return(
            
            <div className="container w-100">
                <div className="row " style={{marginTop: '10px'}}>
                <div div className="col-12">
                <h1 className="text-light bg-dark text-center">PIZZA</h1>
             </div>
                </div>
                <div className="row justify-content-center bg-dark position-relative p-0" style={{marginTop:"-10px", height: '440px', overflow: 'scroll'}}>
                {member}
                <div className="Stpizza ST">
                <button className="btn btn-danger btn-red btn-lg">Open</button>
                </div>
                </div>
            </div>
           
        )
    }
}
export default Pizza;

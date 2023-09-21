import React, { Component } from "react";
import ProdFries from "./ProdFries";
class Fries extends Component{
    render(){
        const info=[{
            Image: "./images/IMG_20230905_195411_854.jpg",
            Titel: "French fries",
            Text: "Potatoes cut into slices and fried in oil until golden and crispy.",
            ID: "Fr-fr"
        },
        {Image: "./images/IMG_20230905_195414_024.jpg",
            Titel: "Cheese fries",
            Text: "French fries with added shredded or melted cheese on top.",
            ID: "Ch-fr"
        },
        {
            Image: "./images/IMG_20230905_195416_813.jpg",
            Titel: "Paprika fries",
            Text: "French fries with added spices such as salt, pepper, and seasonings to give an extra flavor.",
            ID: "Pa-fr"
        },
        
    ]
        const member=info.map(function(member){
            return (
               
                <ProdFries 
                Image= {member.Image}
                Titel= {member.Titel}
                Text= {member.Text}
                ID= {member.ID}
                />
                
            )
            
        })

        return(
            <div className="container w-100">
                <div className="row" style={{marginTop: '20px'}}>
                <div div className="col-12">
                <h1 className="text-light bg-dark text-center">Fires</h1>
             </div>
                </div>
                <div className="row justify-content-center bg-dark position-relative" style={{marginTop:"-10px", height: '440px', overflow: 'scroll'}}>
                {member}
                <div className="Stfries ST">
                <button className="btn btn-danger btn-red btn-lg">Open</button>

                </div>

                </div>
            </div>
           
        )
    }
}
export default Fries;
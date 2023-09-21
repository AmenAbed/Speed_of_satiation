import React, { Component } from "react";
import ProdBurger from "./ProdBurger";
class Burger extends Component{
    render(){
        const info=[{
            Image: "./images/IMG_20230905_195300_726.jpg",
            Titel: "Cheese burger",
            Text: "A hamburger with a slice of cheese.",
            ID: "Ch-burger"
        },
        {Image: "./images/IMG_20230905_195306_198.jpg",
            Titel: "Viggie burger",
            Text: "A vegetarian burger made from vegetables and grains.",
            ID: "Vi-burger"
        },
        {
            Image: "./images/IMG_20230905_195310_987.jpg",
            Titel: "Mushroom swiss burger",
            Text: "A burger with mushrooms and Swiss cheese.",
            ID: "Mu-burger"
        },
        {Image: "./images/IMG_20230905_195323_105.jpg",
            Titel: "Turkey burger",
            Text: "A burger made with turkey meat.",
            ID: "Tu-burger"
        },
        {
            Image: "./images/IMG_20230905_195325_785.jpg",
            Titel: "Jalapeno burger",
            Text: "A burger with spicy jalapeno peppers.",
            ID: "Ja-burger"
        },
        {Image: "./images/IMG_20230910_083604_611.jpg",
            Titel: "BBQ burger",
            Text: "A grilled burger with barbecue sauce.",
            ID: "Bbq-burger"
        },
        {
            Image: "./images/IMG_20230910_083613_670.jpg",
            Titel: "Fish burger",
            Text: "A burger made with fish.",
            ID: "Fish-burger"
        },
        
    ]
        const member=info.map(function(member){
            return (
               
                <ProdBurger 
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
                <h1 className="text-light bg-dark text-center">Burger</h1>
             </div>
                </div>
                <div className="row justify-content-center bg-dark position-relative" style={{marginTop:"-10px", height: '440px', overflow: 'scroll'}}>
                {member}
                <div className="Stburger ST">
                <button className="btn btn-danger btn-red btn-lg">Open</button>

                </div>

                </div>
            </div>
           
        )
    }
}
export default Burger;
import React, { Component } from "react";
import ProdFish from "./ProdFish";
class Fish extends Component{
    render(){
        const info=[{
            Image: "./images/IMG_20230905_195340_188.jpg",
            Titel: "Moroccan grilled fillet",
            Text: "Grilled fillet is a popular Moroccan dish made with tender cuts of beef or lamb that are marinated in a blend of spices and grilled to perfection. It is often served with couscous and a side of grilled vegetables.",
            ID: "Gr-fi"
        },
        {Image: "./images/IMG_20230905_195403_432.jpg",
            Titel: "Norwegian smoked salmon",
            Text: "Norwegian smoked salmon is a delicacy made from fresh salmon that has been cured with salt and then smoked over wood chips. It has a rich, smoky flavor and a tender, melt-in-your-mouth texture.",
            ID: "Sm-fi"
        },
        {
            Image: "./images/IMG_20230905_195406_061.jpg",
            Titel: "Sushi",
            Text: "Sushi is a traditional Japanese dish made with vinegared rice, fresh seafood, and vegetables. It is often served with soy sauce, wasabi, and pickled ginger.",
            ID: "Su"
        },
        {Image: "./images/IMG_20230910_083504_908.jpg",
            Titel: "Spanish paella",
            Text: "Paella is a classic Spanish rice dish that originated in Valencia. It is typically made with saffron-infused rice, seafood, chicken, and vegetables. The dish is cooked in a large, shallow pan called a paellera and is often served with a side of crusty bread.",
            ID: "Sp-pa"
        },
        {
            Image: "./images/IMG_20230910_083509_133.jpg",
            Titel: "Portygues sardines",
            Text: "Portuguese sardines are small, oily fish that are typically grilled or roasted and served with lemon and olive oil. They have a rich, flavorful taste and are a popular ingredient in many traditional Portuguese dishes.",
            ID: "Po-sa"
        },
        {Image: "./images/IMG_20230910_083513_810.jpg",
            Titel: "British fish and chips",
            Text: "Fish and chips is a quintessential British dish made with battered and fried fish (usually cod or haddock) and crispy French fries. It is typically served with mushy peas (a type of mashed peas) and dill pickles.",
            ID: "Br-fi"
        },
        {
            Image: "./images/IMG_20230910_083518_655.jpg",
            Titel: "Chinese hot pot",
            Text: ": Hot pot is a popular Chinese dish that involves cooking thinly sliced meats, seafood, and vegetables in a simmering pot of broth at the table. The dish is often served with dipping sauces and is a fun, interactive meal to share with friends and family.",
            ID: "Ch-ho"
        }
        
    ]
        const member=info.map(function(member){
            return (
               
                <ProdFish 
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
                <h1 className="text-light bg-dark text-center">Fish</h1>
             </div>
                </div>
                <div className="row justify-content-center bg-dark position-relative" style={{marginTop:"-10px", height: '440px', overflow: 'scroll'}}>
                {member}
                <div className="Stfish ST">
                <button className="btn btn-danger btn-red btn-lg">Open</button>

                </div>

                </div>
            </div>
           
        )
    }
}
export default Fish;
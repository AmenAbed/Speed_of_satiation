import React, { Component } from "react";
import ProdRamen from "./ProdRamen";
class Ramen extends Component{
    render(){
        const info=[{
            Image: "./images/IMG_20230910_083530_429.jpg",
            Titel: "Spaghetti Bolognese",
            Text: ": A classic Italian dish consisting of spaghetti pasta topped with a rich tomato-based meat sauce, usually made with ground beef or pork.",
            ID: "Sp-bo"
        },
        {Image: "./images/IMG_20230910_083534_371.jpg",
            Titel: "Lasagna",
            Text: "A popular Italian pasta dish made by layering lasagna sheets with meat or vegetable filling, tomato sauce, and cheese.",
            ID: "La"
        },
        {
            Image: "./images/IMG_20230910_083536_946.jpg",
            Titel: "Ravioli",
            Text: "Small, square-shaped pasta pockets filled with cheese, meat, or vegetables and served with a sauce such as tomato or pesto.",
            ID: "Ra"
        },
        {Image: "./images/IMG_20230910_083541_327.jpg",
            Titel: " Pesto pasta",
            Text: "A simple yet flavorful pasta dish made by tossing cooked pasta with a sauce made from basil, garlic, pine nuts, Parmesan cheese, and olive oil.",
            ID: "Pe-pa"
        },
        {
            Image: "./images/IMG_20230910_083544_118.jpg",
            Titel: "Fettuccine Alfredo",
            Text: "A creamy pasta dish made with fettuccine noodles and a rich sauce made from butter, cream, and Parmesan cheese.",
            ID: "Fe-al"
        },
        {Image: "./images/IMG_20230910_083547_254.jpg",
            Titel: "Jambalaya pasta",
            Text: "A spicy pasta dish inspired by the Cajun cuisine of Louisiana, made with shrimp, sausage, and a spicy tomato-based sauce.",
            ID: "Ja-pa"
        },
        {
            Image: "./images/IMG_20230910_083551_194.jpg",
            Titel: "Lingunine alla Vongole",
            Text: "A traditional Italian pasta dish made with linguine noodles and clams cooked in a white wine and garlic sauce.",
            ID: "Li-al"
        }
        
    ]
        const member=info.map(function(member){
            return (
               
                <ProdRamen 
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
                <h1 className="text-light bg-dark text-center">Ramen</h1>
             </div>
                </div>
                <div className="row justify-content-center bg-dark position-relative" style={{marginTop:"-10px", height: '440px', overflow: 'scroll'}}>
                {member}
                <div className="Stramen ST">
                    <button className="btn btn-danger btn-red btn-lg">Open</button>
                </div>
                </div>
            </div>
           
        )
    }
}
export default Ramen;
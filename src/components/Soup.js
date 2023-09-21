import React, { Component } from "react";
import ProdSoup from "./prodSoup";
class Soup extends Component{
    render(){
        const info=[{
            Image: "./images/IMG_20230905_195328_924.jpg",
            Titel: "Chicken noodle soup",
            Text: "A soup made with chicken and noodles.",
            ID: "Ch-soup"
        },
        {Image: "./images/IMG_20230905_195332_142.jpg",
            Titel: "Tomato soup",
            Text: ": A soup made with tomatoes.",
            ID: "To-soup"
        },
        {
            Image: "./images/IMG_20230905_195334_664.jpg",
            Titel: "French onion soup",
            Text: "A French soup made with onions.",
            ID: "Fr-soup"
        },
        {Image: "./images/IMG_20230905_195337_643.jpg",
            Titel: "Broccli and cheese soup",
            Text: "A soup made with broccoli and cheese.",
            ID: "Br-soup"
        },
    ]
        const member=info.map(function(member){
            return (
               
                <ProdSoup 
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
                <h1 className="text-light bg-dark text-center">Soup</h1>
             </div>
                </div>
                <div className="row justify-content-center bg-dark position-relative" style={{marginTop:"-10px", height: '440px', overflow: 'scroll'}}>
                {member}
                <div className="Stsoup ST">
                <button className="btn btn-danger btn-red btn-lg">Open</button>

                </div>

                </div>
            </div>
           
        )
    }
}
export default Soup;
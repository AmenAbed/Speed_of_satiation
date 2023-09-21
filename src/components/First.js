import React, { Component } from "react";
import Social from "./Socail";
class First extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-dark text-light w-100" >
                    <div className="row p-5 position-relative" style={{height: '600px'}}>
                        <div className="col-md-12 col-12 po-re" id="bigimagel" style={{height: '400px', overflowY: 'auto'}}> 
                        <p className="po-re">
                            <h1><i><span style={{color: 'rgb(192, 0, 0)', fontWeight: 'bolder'}}>Speed</span> of satiation</i></h1>
                            <p>
                            We welcome you with a smile and offer you the most delicious dishes.
                            </p>
                            <p>
                            have many dishes prepared by famous chefs around the world.
                            </p>
                        </p>
                        <Social info={
                            {
                                facebook: "fab fa-facebook",
                                telegram: "fab fa-telegram",
                                whatsapp: "fab fa-whatsapp",
                                instagram: "fab fa-instagram"
                            }
                        }/>

                        <button className="btn bg-light bg-light-font m-3 rounded-4 po-re" id="more">More</button>
                        </div>
                        
                        <img src="./images/IMG_20230913_113913_124.jpg" alt="" id="bcg"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default First;
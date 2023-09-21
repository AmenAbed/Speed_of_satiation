import React, { Component } from "react";
class Back extends Component{
    render(){
        return(
            <div className="comeback">
            <a href="#NavToBack">            
            <button className="btn btn-lg btn-red float-end"><i className="fas fa-arrow-up"></i></button>
            </a>
            </div>
        )
    }
}
export default Back;
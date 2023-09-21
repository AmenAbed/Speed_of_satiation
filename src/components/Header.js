import React, { Component } from "react";
import Nav from "./Nav";
class Header extends Component{
    render(){
        return(
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="NavToBack">
           <Nav/>
           </nav>
        )
    }
}   

export default Header;
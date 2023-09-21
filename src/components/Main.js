import React, { Component } from "react";
import First from "./First";
import Back from "./Back";
import Add from "./Add";
import Pizza from "./Pizza";
import Burger from "./Burger";
import Soup from "./Soup";
import Fries from "./Fries";
import Fish from "./Fish";
import Ramen from "./Ramen";
import Order from "./Order";
import Info from "./Info";
import Add2 from "./Add2";
class Main extends Component{
    render(){
        return(
            <div>
            <Info />
            <First />
            <Add />
            <Back />
            <Pizza />
            <Burger />
            <Soup />
            <Fries />
            <Fish />
            <Ramen />
            <Add2 />
            <Order />
            </div>
        )
    }
}
export default Main;
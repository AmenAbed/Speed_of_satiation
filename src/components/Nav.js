import React, { Component } from "react";
class Nav extends Component{
    render(){
        return(
            <div className="container-fluid">
            <a className="navbar-brand" href="#"><i className="fas fa-pizza-slice"></i> <span style={{color: 'rgb(192, 0, 0)', fontWeight: 'bolder'}}>Speed</span> of satiation</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PIZZA
                  </a>
                  <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#Pepperoni" id="pep">Pepperoni pizza</a></li>
                    <li><a className="dropdown-item" href="#Margherita" id="marg">Margherita pizza</a></li>
                    <li><a className="dropdown-item" href="#Vegetarian" id="vege">Vegetarian pizza</a></li>
                    <li><a className="dropdown-item" href="#Caprese" id="capr">Caprese pizza</a></li>
                    <li><a className="dropdown-item" href="#Hot" id="hot">Hot dog pizza</a></li>
                    <li><a className="dropdown-item" href="#Sausage" id="saus">Sausage and Egg pizza</a></li>
                    <li><a className="dropdown-item" href="#BBQ" id="bbq">BBQ pizza</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Burger
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" id="ch-burger" href="#Ch-burger">Cheese burger</a></li>
                    <li><a className="dropdown-item" id="vi-burger" href="#Vi-burger">Viggie burger</a></li>
                    <li><a className="dropdown-item" id="mu-burger" href="#Mu-burger">Mushroom burger</a></li>
                    <li><a className="dropdown-item" id="tu-burger" href="#Tu-burger">Turkey burger</a></li>
                    <li><a className="dropdown-item" id="ja-burger" href="#Ja-burger">Jalapeno burger</a></li>
                    <li><a className="dropdown-item" id="bbq-burger" href="#Bbq-burger">BBQ burger</a></li>
                    <li><a className="dropdown-item" id="fish-burger" href="#Fish-burger">Fish burger</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Soup
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#Ch-soup" id="ch-soup">Chicken noodle soup</a></li>
                    <li><a className="dropdown-item" href="#To-soup" id="to-soup">Tomato soup</a></li>
                    <li><a className="dropdown-item" href="#Fr-soup" id="fr-soup">French onion soup</a></li>
                    <li><a className="dropdown-item" href="#Br-soup" id="br-soup">Broccli and cheese soup</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Fries
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#Fr-fr" id="fr-fr">French fries</a></li>
                    <li><a className="dropdown-item" href="#Ch-fr" id="ch-fr">Cheese fries</a></li>
                    <li><a className="dropdown-item" href="#Pa-ch" id="pa-fr">Paprika fries</a></li>
                  </ul>
                </li><li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Fish
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#Gr-fi" id="gr-fi">Moroccan grilled fillet</a></li>
                <li><a className="dropdown-item" href="#Sm-fi" id="sm-fi">Norwegian smoked salmon</a></li>
                <li><a className="dropdown-item" href="#Su" id="su">Sushi</a></li>
                <li><a className="dropdown-item" href="#Sp-pa" id="sp-pa">Spanish paella</a></li>
                <li><a className="dropdown-item" href="#Po-sa" id="po-sa">Portygues sardines</a></li>
                <li><a className="dropdown-item" href="#Br-fi" id="br-fi">British fish and chips</a></li>
                <li><a className="dropdown-item" href="#Ch-ho" id="ch-ho">Chinese hot pot</a></li>
                </ul>
              </li><li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ramen
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#Sp-bo"  id="sp-bo">Spaghetti Bolognese</a></li>
                <li><a className="dropdown-item" href="#La" id="la">Lasagna</a></li>
                <li><a className="dropdown-item" href="#Ra" id="ra">Ravioli</a></li>
                <li><a className="dropdown-item" href="#Pe-pa"  id="pe">Pesto pasta</a></li>
                <li><a className="dropdown-item" href="#Fe-al"  id="fe-al">Fettuccine Alfredo</a></li>
                <li><a className="dropdown-item" href="#Ja-pa"  id="ja-pa">Jambalaya pasta</a></li>
                <li><a className="dropdown-item" href="#Li-al"  id="li-al">Lingunine alla Vongole</a></li>
              </ul>
            </li>
              </ul>
            </div>
          </div>
        )
    }
}
export default Nav;
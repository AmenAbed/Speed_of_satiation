import React, { Component } from "react";
class Add2 extends Component{
    render(){
        return(
            <div className="container">
                <div className="row position-relative rounded-2 p-1 justify-content-around" id="Arrow">
                <div className="col-12 col-md-6  col-lg-5  rounded-2"  style={{ marginTop: '20px', background: 'linear-gradient(to right, #280e05, #45140a, #621c0e, #7f230f, #9c2a0d', height: '250px'}}>
                    <div className="row text-light">
                    <div className="col-12 col-md-6 mt-md-5"><h4>Double Cheese</h4>
                    <h1 style={{color: 'rgb(192, 0, 0)', fontWeight: 'bolder', fontFamily: 'sans-serif'}}>BURGER</h1>
                    <h6 style={{ animationDuration: '8s',}} className="animate__bounce">With Free Coclacola. Stay home, we deliver.</h6></div>
                    <div className="col-12 col-md-5 align-self-center">
                    <img src="./images/1694622128677.png" alt="" className="float-end" style={{width: 'auto', height: '115px', position: 'relative', filter: 'drop-shadow(5px 5px 5px #000)'}}/>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-5 rounded-2"  style={{ marginTop: '20px', background: 'linear-gradient(to left, #ff0500, #ff6347, #ffff 70%', height: '250px'}}>
                    <div className="row">
                    <div className="col-12 col-md-6 animate__rubberBand mt-md-3" style={{ animationDuration: '8s',}}><h4>With every order of french fries you get a free Ketchup bottle and a mayonnaise bottle.</h4>
                    
                    </div>
                    <div className="col-12 col-md-5 align-self-center">
                    <img src="./images/catchandmy.png" alt="" className="float-end" style={{width: 'auto', height: '115px', position: 'relative', filter: 'drop-shadow(5px 5px 5px #000)'}}/>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5  rounded-2" style={{ marginTop: '20px', background: 'linear-gradient(to bottom, #00ff00 60% , #089900', height: '250px'}}>
                    <div className="row">
                    <div className="col-12 col-md-6 mt-md-4"><h4>Get a</h4>
                    <h1 style={{color: 'rgb(192, 0, 0)', fontWeight: 'bolder', fontFamily: 'sans-serif'}}  className="animate__heartBeat m-3">FREE</h1>
                    <h6 style={{ animationDuration: '8s',}}>salad with every meal you order at our fantastic restaurant.</h6></div>
                    <div className="col-12 col-md-5 align-self-center">
                    <img src="./images/1694849188490.png" alt="" className="float-end" style={{width: 'auto', height: '90px', position: 'relative',left: '8px', filter: 'drop-shadow(5px 5px 5px #000)'}}/>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-5 rounded-2"  style={{ marginTop: '20px', background: 'linear-gradient(to right, #ffb6c1 60%, #ffff', height: '250px'}}>
                    <div className="row">
                    <div className="col-12 col-md-6 animate__jello mt-md-5" style={{ animationDuration: '8s',}}><h4>Special discount on Japanese-style pasta</h4>
                    <span><del>60$</del><span style={{color: 'rgb(192, 0, 0)', fontWeight: 'bolder', fontFamily: 'sans-serif', fontSize: '30px'}}>  20$</span></span>
                    </div>
                    <div className="col-12 col-md-5 align-self-center">
                    <img src="./images/smile-happy.gif" alt="" className="float-end" style={{width: 'auto', height: '115px', position: 'relative', filter: 'drop-shadow(5px 5px 5px #000)'}}/>
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
        )
    }
}
export default Add2;
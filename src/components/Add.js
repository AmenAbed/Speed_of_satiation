import React, { Component } from "react";
class Add extends Component{
    render(){
        return(
            <div className="container w-75">
                <div className="row" style={{ marginTop: '80px'}}>
                    <div className="col-md-6 col-12 m-2 m-md-0 text-bg-red rounded-2 pizzabg" style={{height: '280px'}}>
                        <h1>Special Deliciaus</h1>
                        <button className="btn bg-light bg-light-font m-2 rounded-4 Or-Now">ORDER NOW</button>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-12 text-bg-dark rounded-2 h-auto" style={{height: '165px', margin: '0 0 10px 10px'}}>
                                <h4>The Faster In Delivery Food</h4>
                                <button className="btn bg-light bg-light-font m-2 rounded-4 Or-Now">ORDER NOW</button>
                                <img src="./images/foodpanda-food (1).gif" className="float-end" style={{width: '100px', height: '90px', position: 'relative', top: '-5px'}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 bg-pink rounded-2 h-auto" style={{height: '165px', margin: '10px 0 0 10px'}}>
                            <h4>Enjoy Our Deliciaus Item</h4>
                            <button className="btn bg-light bg-light-font m-2 rounded-4 Or-Now">ORDER NOW</button>
                            <img src="./images/french-fries-fast-food.gif" className="float-end" style={{width: '110px', height: '90px', position: 'relative', top: '-5px'}}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Add
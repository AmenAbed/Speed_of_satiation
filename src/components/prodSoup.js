import React, { Component } from "react";
class ProdSoup extends Component{
    render(){
        return(
                    <div className="col-md-4  col-sm-3 m-sm-2 col-6 m-3 m-lg-4 card bg-mycolor text-light rounded-0 " style={{width: '220px', height: '300px'}} id={this.props.ID}>
                            <div className="bg-dark" style={{overflow: 'hidden'}}>
                            <img src={this.props.Image} className="card-img-top w-100 myeff" alt="" style={{height: '150px'}}/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">{this.props.Titel}</h6>
                                <div className="card-text" style={{overflow: 'scroll', height: '80px', fontSize: '15px'}}>{this.props.Text}</div>
                            </div>
                        </div>
        )
    }
}
export default ProdSoup;
import React, { Component } from "react";
class Footer extends Component{
    render(){
        return(
            
            <div className="container-fluid" style={{marginTop: '50px'}}>
                <div className="row bg-dark text-light p-4">
                <div className="col-6">
                    <h1>Contacts</h1>
                    <p>Email: Speed of satiation@gmail.com</p>
                    <p>Phone: +1 000(0) 0000</p>
                    <p>Fax: +1 000(0) 0000</p>
                </div>
                <div className="col-6">
                    <h1>Contact Us</h1>
                    <form>
                    <div className="row">
                        <label htmlFor="v1" className="form-label text-light">Name:</label>
                                    <input type="text" className="form-control" id="v1" />
                    </div>
                    <div className="row">
                        <label htmlFor="v2" className="form-label text-light">Email:</label>
                                    <input type="text" className="form-control" id="v2" />
                    </div>
                    <div className="row">
                        <label htmlFor="v3" className="form-label text-light">Message:</label>
                                    <input type="text" className="form-control" id="v3" />
                    </div>
                    </form>
                    <button className="btn btn-dark btn-red">Send</button>
                </div>
                </div>
                
            </div>
        )
    }
}
export default Footer;
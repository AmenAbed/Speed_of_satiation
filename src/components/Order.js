import React, { Component } from "react";
class Order extends Component {
    render() {
        return (
            <div className="order-form bg-dark ">
                <div className="container w-75">
                    <h1 className="text-light" id="start"><span style={{ color: 'rgb(192, 0, 0)',background: "#fff", fontWeight: 'bolder' }}>Customer</span> information</h1>
                    <form className="row g-3 justify-content-between">
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="validationServer01" className="form-label text-light">First name:</label>
                                    <input type="text" className="form-control" id="validationServer01" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="validationServer02" className="form-label text-light">Last name:</label>
                                    <input type="text" className="form-control" id="validationServer02" />
                                </div>
                                <div className="col-md-12">
                                    <label for="validationServer03" className="form-label text-light">Phone number:</label>
                                    <input type="tel" className="form-control" id="validationServer03" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="validationServer04" className="form-label text-light">The city:</label>
                                    <select className="form-select" aria-label="Default select example" id="validationServer04">
                                        <option selected></option>
                                        <option value='0'>Homs</option>
                                        <option value='1'>Hama</option>
                                        <option value='2'>Damascuse</option>
                                        <option value='3'>Aleppo</option>
                                        <option value='4'>Draa</option>
                                        <option value='5'></option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="validationServer05" className="form-label text-light">Street name:</label>
                                    <input type="text" className="form-control" id="validationServer05" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="validationServer06" className="form-label text-light">House number:</label>
                                    <input type="number" className="form-control" id="validationServer06" />
                                </div></div></div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="validationServer07" className="form-label text-light">Orders:</label>
                                    <textarea className="form-control" rows="2" id="validationServer07"></textarea><br />
                                </div>
                                <div className="col-md-12 form-check">
                                    <input type="radio" className="form-check-input radio" id="flexRadioDefault2" name="flexRadioDefault" />
                                    <label className="form-check-label text-light" htmlFor="flexRadioDefault2">Payment by electroic card</label>
                                </div>
                                <div className="col-md-12 p-0">
                                    <input type="radio" className="form-check-input radio" id="flexRadioDefault3" name="flexRadioDefault" />
                                    <label className="form-check-label text-light" htmlFor="flexRadioDefault3">Cash payment</label>
                                </div>
                                <a href="#start" className="btn btn-lg btn-light" id="ImHung" style={{ marginTop: '20px' }}>order</a>
                                <div id="Alert">
                                <div class="alert alert-danger d-flex align-items-center mt-2" role="alert">
                                    <div>
                                        <i className="fas fa-face-frown"></i> Please fill in all the required information in order to be able to submit the request!
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <button className="close"><i className="fas fa-x cls1"></i></button>

                <img src="./images/yellow-cab-yellow-cab-pizza.gif" className="ImHung" alt="" style={{ height: '50%', width: '50%' }} />
            </div>
        )
    }
}
export default Order;
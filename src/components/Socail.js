import React from "react";
function Social(props) {
    return (
        <div id="Social" className="text-center">
            <div className="row">
                <div className="col-2 col-md-1">
                    <i className={props.info.facebook}></i>
                </div>
                <div className="col-2 col-md-1">   
                <i className={props.info.telegram}></i>
                </div>
                <div className="col-2 col-md-1">
                         <i className={props.info.whatsapp}></i>
                </div>
                <div className="col-2 col-md-1">
                    <i className={props.info.instagram}></i>
                </div>
            </div>
        </div>
    )
}
export default Social;
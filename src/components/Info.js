import React, { Component } from "react";
class Info extends Component{
    render(){
        return(
            <div className="info">
                <div className="ininfo ">
                    <div className="photo">
                        <img src="./images/IMG_20230905_195153_291.jpg" className="w-100 h-100" alt=""/>
                    </div>
                    <div className="myinfo">
                    <p>
                    Welcome!<br/>
Our restaurant offers the most delicious international dishes supervised by over 15 chefs who are known for their creativity and experience.<br/> They have traveled hundreds of rounds around the world to learn the best cooking techniques.<br/>
What distinguishes our restaurant is cleanliness and good customer service, in addition to offers that target specific groups In society, such as students, teachers, and low-income families.<br/>
We also provide free meals on Sundays and Thursdays from 9 am to 6 pm for those with limited Income.<br/>
But that's not all!<br/>
One of the best features of our restaurant is the delivery service, where customers can choose the delivery method such as motorcycles, bicycles, or cars to achieve the best delivery time for food.<br/>
About our restaurant:<br/>
- Founded in 2004 by Chef John Item.<br/>
- The restaurant's fame increased in 2007, whichh helped in attracting international chefs to work there.<br/>
- It started expanding In 2011 to includeincludee several branches in different provinces.<br/>
- In 2020, a new branch was established outside the country, specifically in Lebanon – Beirut (but it Is currently on hold).<br/>
- It has been visited by many singing stars, football stars, and famous actors, which has earned It fame and a good reputation.<br/>
- In 2023, it won the award for the best restaurant In the Middle East.<br/>

                    </p></div>
                </div>
                <button className="close"><i className="fas fa-x cls1"></i></button>
            </div>
        )
    }
}
export default Info;
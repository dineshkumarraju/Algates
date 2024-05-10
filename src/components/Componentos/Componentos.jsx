import React from "react";
import './componentos.css';
import img from '../../Assets/imgc1.webp'
const componentos = () =>{
    return(
        <div className="class">
            <div className="trilok">
                <h1>Our Expertise is GROWING Wealth</h1><br/><br/>
                <p>We believe in providing a full range of investment services to our clients with the help of our dedicated relationship managers.</p><br />
                <p>Our relationship managers work throughout the market hours to help you navigate though market volatility and maintain a healthy portfolio.</p><br/>
                <p>Because for us,your financial goals and well-being are the top-priorities.</p>
                <div className="class2">

                <btn className="button2">LET'S CONNECT</btn>
                </div>
            </div>
            <div><img src={img} alt="" /></div>
        </div>
    )
}

export default componentos;
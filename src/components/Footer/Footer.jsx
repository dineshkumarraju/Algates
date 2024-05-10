import react from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

const footer=()=>{
    return(
        <div >
            <div className="Box1">
            <div >
                <h2>Stock Broking Regisration Details</h2>
                <p>Aligates Financial Private Limaited is an Authorised<br/>
                Person of Cholamandalam Securities Limited.</p>

                <p>NSE Registration Number: ############<br/>
                BSE Registration Number:############.
                </p><br/>
                <p> For any complaints pertaining tosecurities broking,<br/>
                you can Contact<br/>
                Customercare@chola.murugappa.com</p><br/>

                <h2>Business </h2><br/>

               <p className='p1'>Meet our Experts<br/>
               Services<br/>
               Blogs
               </p><br/>
               <div> 
                <a> <FaFacebook /> </a>
                <a> <FaTwitter /></a>
                <a> <AiOutlineInstagram/></a>
                <a><FaGoogle /></a>
                <a><CiLinkedin /></a>
               </div><br/>
               <div className='sony'>
               <p><b>Disclaimer</b>,investments in the securities markets are subject to market risks,please read all related documents before investing</p></div>
               
               
             </div>
             <div>
             <h2>Comapany</h2>
             <p>Home</p>
             <p>Products</p><br/>
             <h6 className='sony1'>
                <p>Equlity<br/>
                Futures and options<br/>
                Mutual Funds<br/>
                Bonds</p>
                </h6><br/>
             <p>Events</p>
             <p>careers</p>
             <p>Contact</p>
           
             
             </div>
             <div className='get'>
                <h5> Get In Touch</h5>
                <p><h4>Algates Financial Private Limited</h4>
                2nd Floor,777/p,13th Main, HAL2ndStage,<br/>
                Indranagar,Banglore-560008<br/>
                Telephone:####-######<br/>
                Email:Contact@algates.in</p>
             </div>
             </div>
             <div className='disclaimer'>
             <p>Copyright 2024 Algates | Powered by Algates</p>
             </div>
             

             </div>
                  
       
        
   

    )
}
export default footer;

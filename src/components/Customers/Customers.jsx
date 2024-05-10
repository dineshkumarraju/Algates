import React from "react";
import "./customers.css";
import img from "../../Assets/imgt1.webp";
import img1 from "../../Assets/imgt2.webp";

const customers = () => {
  return (
    <div className="outer">
      <div className="inside">
        <h1>What our customers say</h1>
      </div>
      <div className="inside1">
        <div className="insidein">
          <p>
            Algates Financial is one of the best stock brokering firms. It
            offers
             a wide range of products for investments. The mobile app is
            very
            easy to use and there research team gives good calls. Also
            their
             relationship managers are very helpful and always available
            for support.
            <br /><br />
            <h3>Nikhil Bagamane</h3>
          </p>


        </div>
        <div className="inside2">
          <div>
            <img className="imagep" src={img} alt=""></img>

            <h2 className="number"> 80+</h2>
            <p>
              people met their <br />
              financial goals with <br />
              our expertise
            </p>
          </div>
          <div>
            <img className="imagep" src={img1} alt="" />

            <h2 className="number">500+</h2>
            <p>
              clients are building
              <br />
              their wealth by using
              <br />
              our platform
            </p>
          </div>
        </div>
      </div><br /><br /><br />
      <div className="inside3">
        <div >
          <h4 className="h4">Connect with our Growth Experts now for a valuable consultation.</h4><br />  
          <btn className="button6">CALL NOW</btn>
        </div>


      </div>
    </div>

  );
};

export default customers;

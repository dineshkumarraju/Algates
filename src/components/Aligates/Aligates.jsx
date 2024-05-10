import React from "react";
import './aligates.css'
import img from '../../Assets/imgA.webp'
import img1 from '../../Assets/imgA1.webp'
import img2 from '../../Assets/imgA2.webp'
import img3 from '../../Assets/imgA3.webp'
import img4 from '../../Assets/imgA4.webp'
import img5 from '../../Assets/imgA5.webp'

const Aligates = () => {
    return (
        <div className="hi">
            <div><h1 className="h1">Why Algates?</h1></div>
            <div className="bg">
                <div>
                    <div><img className="img" src={img} alt="img" /></div>
                </div>
                <div className="Box">
                    <div className="box">
                        <div className="box1">
                            <img className="pic" src={img1} alt="img" />
                            <div className="boxINSIDE">
                                <h2 className="subheading1">Personalised Assistance</h2><br />
                                <p>We have a dedicated dealer<br />
                                    desk.you can and place<br />
                                    your order during market<br />
                                    hours.
                                </p>
                            </div>

                        </div>
                        <div className="box2">
                            <img className="pic" src={img2} alt="img" />
                            <div className="boxINSIDE">
                                <h2 className="subheading1">Dedicated Relationship Manager</h2><br />
                                <div></div>
                                <p>
                                    Each client will have a<br /> dedicated relationship<br /> manager who will guide you<br /> through your stock market <br />investment journey
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="box12">
                        <div className="box3">
                            <img className="pic" src={img3} alt="img" />
                            <div className="boxINSIDE">
                                <h2 className="subheading1">
                                    Investment Growth Experts
                                </h2><br />
                                <p>
                                    We have 10+ years of <br />
                                    experience in stock market<br />
                                    investments with good ROI.
                                </p>
                            </div>

                        </div>
                        <div className="box4">
                            <img className="pic" src={img4} alt="img" />
                            <div className="boxINSIDE">
                                <h2 className="subheading1">Trustworthy Partner</h2><br />
                                <div></div>
                                <p>


                                    We are associated with Cholamandalam Securities Ltd, which is a leading and trustworthy stock broker in South India.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="box13">
                        <div className="box5">
                            <img className="pic" src={img5} alt="img" />
                            <div className="boxINSIDE">
                                <h2 className="subheading1">Personalised Assistance</h2><br />
                                <p>We have a dedicated dealer<br />
                                    desk.you can and place<br />
                                    your order during market<br />
                                    hours.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>













    )
}
export default Aligates;

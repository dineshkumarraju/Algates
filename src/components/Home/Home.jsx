import React, { useEffect } from 'react'
import './home.css'
import img1 from '../../Assets/img1.webp'
import imgp1 from '../../Assets/imgp1.webp'
import imgp2 from '../../Assets/imgp2.webp'
import imgp3 from '../../Assets/imgp3.webp'
import imgp4 from '../../Assets/imgp4.webp'

const Home = () => {


    return (
        <section className='homepage' >

            <div className="home">

                <div className="homeContent container">
                    <div className="textDiv">

                        <h1 data-aos="fade-up" className="homeTitle">
                            Invest Now To Grow Your Wealth
                        </h1>
                        <span data-aos="fade-up" className="smallText">
                            Enjoy the services of a full service brokerage firm by opening an account with Algates Financial
                        </span>

                        <h6><btn className="button">OPEN A DEMAT ACCOUNT</btn></h6>
                    </div>

                </div>
                <img src={img1} />
            </div>

            <div className="Blank">
                <div className="Blank1">
                    <div className='blank'>
                        <h2>PRODUCT AND OFFERINGS</h2>
                    </div><br />
                    <div className="blank1">
                        <div>
                            <div className="product">
                                <div>
                                    <img className='pic' src={imgp1} alt="" />
                                    <h3 className='subheading'>Equity</h3><br />
                                    <p>Start your wealth creation <br /> journey today.​</p><br /><br />
                                    <btn className="button">KNOW MORE</btn>
                                </div>
                            </div>
                            <div className="product">
                                <div>
                                    <img className='pic' src={imgp2} alt="" />
                                    <h3 className='subheading'>Futures and Options</h3><br />
                                    <p>Do systematic trading to build  wealth over time.​​</p><br /><br />
                                    <btn className="button">KNOW MORE</btn>
                                </div>
                            </div>
                            <div className="product">
                                <div>
                                    <img className='pic' src={imgp3} alt="" />
                                    <h3 className='subheading'>Mutual Funds</h3><br />
                                    <p>Start with as low as Rs 100. <br />​</p><br /><br />
                                    <btn className="button">KNOW MORE</btn>
                                </div>
                            </div>
                            <div className="product">
                                <div>
                                    <img className='pic' src={imgp4} alt="" />
                                    <h3 className='subheading'>Bonds</h3><br />
                                    <p>Invest in curated secured <br />bonds to earn fixed returns.​</p><br /><br />
                                    <btn className="button">KNOW MORE</btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
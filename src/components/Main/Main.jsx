import './main.css';
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import React, { useState } from "react";
const dataCollection = [

    {
        question: '1.How much money is required to start investing in the stock market?',
        answer: 'You can start investing in the stock market from as low as 10000/- rupees where you can see better returns.'
    },
    {
        question: '2.Do you provide assistance for buying stock?',
        answer: 'Yes, we offer personalised assistance in buying the stocks from the Cholamandalam Securities trading portal.'
    },
    {
        question: '3.Can I invest in mutual funds with my Demat Account?',
        answer: 'Yes, you can invest from your existing Demat Account. But to avail our personalised assistance and expertise to buy and sell stocks with more profit, you need to open a Demat account from our portal.'
    },
    {
        question: '4.How to open a Demat Account',
        answer: 'You can easily open a demat account with us in less than 5 minutes.'
    },
    {
        question: '5.What are the documents required to open a Demat Account?',
        answer: 'PAN card,Aadhar Card,6 months Bank Statement Cancelled cheque,Signature on a plain paper.'
    },
    {
        question: '6.Do you provide assistance for opening a Demat Account',
        answer: 'Yes, we do provide assistance in opening a Demat Account. If you are looking to open a Demat Account now, feel free to register with us here.'
    }
];

function Accordion() {
    const [accordion, setActiveAccordion] = useState();

    function toggleAccordion(index) {
        if (index === accordion) {
            setActiveAccordion(-1);
            return;
        }
        setActiveAccordion(index);
    }




    return (
        <div className="main">
            <div className='FAQs'>
                <h1>FAQs</h1>
            </div>
            <div className="total">
                <div className="container">
                    <div className='accordion__faq'>
                        {dataCollection.map((item, index) => (
                            <div key={index} onClick={() => toggleAccordion(index)}>
                                <div className="accordion__faq-heading">
                                    <h3 className={accordion === index ? "active" : ""}>

                                        {item.question}

                                    </h3>
                                    <div>
                                        {accordion === index ? (<span className="verticle">-</span>) : (
                                            <span className="horizental"></span>
                                        )}
                                    </div>

                                </div>

                                <p className={accordion === index ? "active" : "inactive"}>
                                    {item.answer}
                                </p>

                            </div>

                        ))}
                    </div>
                </div>

                <div className="socialnetworks">
                    <h1>Have more questions,</h1><br />
                    <h2 className='subheading1'>Talk with an Expert</h2><br /><br />
                    <btn className="button3">
                        <FaWhatsapp />Let's Chat +91 0000000000
                    </btn><br /><br /><br /><br /><br />
                    <btn className="button4"> 
                        <BiLogoGmail /> Write To Us  contact@gmail.com 
                    </btn>
                </div>
            </div>

        </div>

    )
}



export default Accordion
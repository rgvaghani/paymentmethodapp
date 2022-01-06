import React, { useState } from 'react';
import howToUseApp from './API/howToUse';

const Aboutus = () => {
    const [aboutData, setAboutData] = useState(howToUseApp);
    return (
        <>
         <section className="common-section our-services">
             <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                        <img src="./images/hero3.jpg" alt="aboutusImg" />
                    </div>
                    {/* 1 section right side data */}
                    <div className="col-12 col-lg-7 our-services-list">
                        <h3 className="mini-title">--AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
                        <h1 className="mini-heading">How to use App?</h1>
                        {
                            aboutData.map((curElem)=>{
                                const {id,info,title} = curElem;
                            return (<>
                            <div className="row our-services-info" key={id}>
                            <div className="col-1 our-services-number">{id}</div>
                            <div className="col-10 our-services-data">
                                <h2>{title}</h2>
                                <p className="main-hero-para">{info}</p>
                            </div>
                        </div>
                            </>
                            )
                            })}
                        <br/>
                        <button className="btn-style btn-style-border">Learn more</button>
                    </div>
                </div>
             </div>
             </section>   

             {/* 2 part of about section */}

             <section className="common-section our-services our-services-rightside-content">
             <div className="container mb-5">
                <div className="row">
                    {/* 1 section right side data */}
                    <div className="col-12 col-lg-7 our-services-rightside-content 
                    d-flex justify-content-center align-items-start flex-column">
                        <h3 className="mini-title">--SUPPORT IN ANY LANGUAGES</h3>
                        <h1 className="mini-heading">
                            World class support is <br/> available 24/7
                        </h1>
                        {
                            aboutData.map((curElem)=>{
                                const {id,info,title} = curElem;
                            return (<>
                            <div className="row our-services-info" key={id}>
                            <div className="col-1 our-services-number">{id}</div>
                            <div className="col-10 our-services-data">
                                <h2>{title}</h2>
                                <p className="main-hero-para">{info}</p>
                            </div>
                        </div>
                            </>
                            )
                            })}
                        <br/>
                        <button className="btn-style btn-style-border">Learn more</button>
                    </div>
                     {/* immages section 2 */}
                    <div className="col-12 col-lg-5 our-services-rightside-img">
                        <img src="./images/callcenter.jpg" alt="aboutusImg" />
                    </div>
                </div>
             </div>
             </section> 

        </>
    )
}

export default Aboutus

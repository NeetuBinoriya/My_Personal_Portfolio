import React from 'react'
import './Hero.css'
import profile_img from '../../assets/chinky.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <>
            <div id='home' className="hero">
                <img src={profile_img} style={{ width: '200px', height: '200px', borderRadius: '100%', border: '2px solid gray' }} alt="" />
                <h1><span>I'm Neetu Binoriya,</span> MERN Stack developer based in INDIA</h1>
                <p>I am a Mern Stack developer from Indore, India </p>
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
                    <div className="hero-resume">My resume</div>
                </div>
            </div>
        </>
    )
}

export default Hero
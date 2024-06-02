import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.jpg'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt=""  style={{width:"60px", height:'60px', borderRadius:"50px"}}/>
                <p> Hi, I'm Neetu Binoriya, a passionate web developer with experience in creating dynamic and responsive websites using modern web technologies. My expertise lies in developing high-quality web applications with a focus on user experience and performance. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' name="" id="" />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"> &copy; 2024 Neetu Binoriya. All rights reserved</p>
            <div className="footer-bottom-right">
                <p><AnchorLink className='anchor-link' offset={50} href='#services'> Services</AnchorLink></p>
                <p> <AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></p>
                <p><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
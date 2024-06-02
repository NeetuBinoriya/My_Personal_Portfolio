import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/chinky.jpeg'

const About = () => {
    return (
        <>
            <div id='about' className="about">
                <div className="about-title">
                    <h1>About Me</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={profile_img} alt="" style={{ width: '300px', height: '350px' }} />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>Hello! I'm a passionate and dedicated MERN Stack Developer based in Indore, India. While I am a fresher in the IT industry, I bring nearly 5 years of experience in administration, which has honed my problem-solving skills, attention to detail, and ability to work efficiently under pressure.</p>
                            <p>Transitioning into web development, I have immersed myself in mastering the MERN stack (MongoDB, Express.js, React, and Node.js). I am enthusiastic about building dynamic, responsive, and user-friendly web applications. </p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS </p> <hr style={{ width: '70%' }} /></div>
                            <div className="about-skill"><p>JavaScript </p> <hr style={{ width: '60%' }} /></div>
                            <div className="about-skill"><p>React JS </p> <hr style={{ width: '50%' }} /></div>
                            <div className="about-skill"><p>Express JS </p><hr style={{ width: '50%' }} /></div>
                            <div className="about-skill"><p>Next JS </p><hr style={{ width: '50%' }} /></div>
                            <div className="about-skill"><p>Node JS </p> <hr style={{ width: '50%' }} /></div>
                            <div className="about-skill"><p>MongoDB </p> <hr style={{ width: '50%' }} /></div>
                            

                        </div>
                    </div>
                    </div>
                    <div className="about-experiences">
                        <div className="about-experience">
                            <h1>5+</h1>
                            <p>YEARS OF EXPERIENCE IN MANAGEMENT</p>
                        </div>
                        <hr />
                        <div className="about-experience">
                            <h1>10+</h1>
                            <p>PROJECTS CREATED</p>
                        </div>
                        <hr />
                        <div className="about-experience">
                            <h1>6+</h1>
                            <p>MONTHS OF INTERNSHIP</p>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default About
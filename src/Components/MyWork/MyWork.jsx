import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <>
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Project</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((mywork, index)=>{
                    return <img src={mywork.w_img} alt='' key={index}/>                    
            
                })}
                </div>
                <div className="mywork-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            
        </div>
    </>
  )
}

export default MyWork
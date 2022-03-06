import React from 'react'
import "../Styles/ResumeCard.css"
import ResumeContent from './ResumeContent'

const ResumeCard = () => {
    return (
        <div>
            <div style={{paddingRight:"30px"}}>
                <div className='resumeCardhead'>
                    <span>2007 - 2010</span>
                    <h1>Education Quality</h1>
                </div>

                <div className="resumemain">
                   
                    <ResumeContent />
                   <ResumeContent/>
                   <ResumeContent/>
             


                </div>

            </div>
        </div>
    )
}

export default ResumeCard

import React from 'react'
import ResumeCard from '../components/ResumeCard'
const ResumeCompo = () => {
    return (
        <div>
            <div style={{ marginLeft: "100px", display: "flex", flexWrap: 'wrap' }}>
                <ResumeCard />
                <ResumeCard />


            </div>
        </div>
    )
}

export default ResumeCompo

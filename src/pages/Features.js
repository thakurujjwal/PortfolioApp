import React from 'react'
import FeatureCards from '../components/FeatureCards.js'
import '../Styles/Features.css'


const Features = ({ features }) => {
    return (
        <div Id='MainFeature'>
            <div className='feature'>
            <span>Features</span>
            <h1>What I Do</h1>
            </div>
            <div className='card'>
             {/* <a href="https://dvlpujjwal-miclone.netlify.app/"  > <FeatureCards/></a>
             <a href="https://dvlpujjwal-miclone.netlify.app/"  > <FeatureCards/></a>
             <a href="https://dvlpujjwal-miclone.netlify.app/"  > <FeatureCards/></a>
             <a href="https://dvlpujjwal-miclone.netlify.app/"  > <FeatureCards/></a>
             <a href="https://dvlpujjwal-miclone.netlify.app/"  > <FeatureCards/></a>
             <a href="https://dvlpujjwal-miclone.netlify.app/"  > <FeatureCards/></a>
            */}
                
                {features.map((val, index) => (
                <FeatureCards key={val.index} index={index} firstIcon={val.firstIcon} title ={val.title} content={val.content} secIcon={val.secIcon} />
            ))}

            </div>
        </div>
    )
}

export default Features

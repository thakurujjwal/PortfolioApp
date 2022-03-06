import React from 'react'
import '../Styles/Portfolio.css'

import PortfolioCard from '../components/PortfolioCard'

const Portfolio = ({myBolg}) => {
    return (
        <div>
            <div className='Portheading'>
                <span>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
                <h1>My Portfolio</h1>
                <div className='card'>
                    {/* <a href="https://dvlpujjwal-miclone.netlify.app/"  >  <PortfolioCard/></a>
                    <a href="https://dvlpujjwal-miclone.netlify.app/"  >  <PortfolioCard/></a>
                    <a href="https://dvlpujjwal-miclone.netlify.app/"  >  <PortfolioCard/></a>
                    <a href="https://dvlpujjwal-miclone.netlify.app/"  >  <PortfolioCard/></a>
                    <a href="https://dvlpujjwal-miclone.netlify.app/"  >  <PortfolioCard/></a>
                    <a href="https://dvlpujjwal-miclone.netlify.app/"  >  <PortfolioCard/></a>
                     */}
                         {myBolg.map((item, index) => (
                <PortfolioCard key={item.image} name={item.name} readTime={item.readTime} image={item.image} index={index} title={ item.title}/>
           ))} 
                </div>
            </div>
        </div>
    )
}

export default Portfolio

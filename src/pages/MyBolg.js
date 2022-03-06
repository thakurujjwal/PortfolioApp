import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import "../Styles/Portfolio.css";

const MyBolg = ({myBolg}) => {
    return (
      <div>
        <div className="Portheading">
          <span>VISIT MY BLOG AND KEEP YOUR FEEDBACK</span>
          <h1>My Blog</h1>
       
          <div className="card">
            {/* <div>  <PortfolioCard/> </div>
                    <div>  <PortfolioCard/> </div>
                    <div>  <PortfolioCard /> </div> */}
            {myBolg.map((item, index) => (
              <PortfolioCard
                key={item.image}
                name={item.name}
                readTime={item.readTime}
                image={item.image}
                index={index}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default MyBolg

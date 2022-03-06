import React from "react";
import "../Styles/PortfolioCard.css";

const PortfolioCard = ({name,readTime,title, image}) => {
  return (
    <div>
      <div className="portfolioCard">
        <div className="dance">
          {/* <img src="\images\portfolio-01.jpg" alt="logo" /> */}
          <img src={image} alt="logo" className="portfolioCard_img" />
        </div>
        <div className="aicon">
          <a href="https://dvlpujjwal-miclone.netlify.app/">{name}</a>
          <div>
            <i class="far fa-heart"></i> {readTime}
          </div>
        </div>
        <h4>
          <a href="https://dvlpujjwal-miclone.netlify.app/">{title}</a>
        </h4>
        <i class="fa fa-arrow-right fa-3x" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default PortfolioCard;

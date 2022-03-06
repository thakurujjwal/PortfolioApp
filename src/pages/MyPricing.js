import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/MyPricing.css"



const right = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>);


function value() {
  alert("ujjwal thkaur")
//   var vhjk = document.getElementsByClassName("valujj").innerText = '$90';
//  vhjk.innerHTML = 90;
  
}


const MyPricing = () => {
    return (
      <div className="price">
        <div className="pricehead">
          <span>PRICING</span>
          <h1>My Pricing</h1>
        </div>
        <div className="priceNav">
          <ul>
            <li>
              <Link to="/about">Static</Link>
            </li>
            <li>
              <Link to="/standard" onClick={value}>Standard</Link>
            </li>
            <li>
              <Link to="/premium">Premium</Link>
            </li>
          </ul>

          <div className="pricecontent">
            <div class="header-left">
              {/* <h2 class="title">Design Make this Page</h2>
                        <span>Elementor</span> */}
              <div class="rn-pricing">
                <div class="pricing-header">
                  <div class="header-left">
                    <h2>Design Make This Page</h2>
                    <span>Elementor</span>
                  </div>
                  <div class="header-right">
                    <span className="valujj">$50.00</span>
                  </div>
                </div>
                <div class="pricing-body">
                  <p class="description">
                    Making this the first true generator on the Internet. It
                    uses a dictionary &amp; plugin Development.
                  </p>
                  <div class="check-wrapper">
                    <div class="left-area">
                      <div class="check">
                        {right} <p>1 Page with Elementor</p>
                      </div>
                      <div class="check">
                        {right} <p>{}Design Customization</p>
                      </div>
                      <div class="check">
                        {right} <p>{}Responsive Design</p>
                      </div>
                      <div class="check">
                        {right} <p>{}Content Upload</p>
                      </div>
                      <div class="check">
                        {right} <p>{}Design Customization</p>
                      </div>
                      <div class="check">
                        {right} <p>{}2 Plugins/Extensions</p>
                      </div>
                    </div>
                    <div class="right-area">
                      <div class="check">
                        {right} <p>{}multipage Elementor</p>
                      </div>
                      <div class="check">
                        {right} <p>{}Design Figma</p>
                      </div>
                      <div class="check">
                        {right} <p>{}MAintaine Design</p>
                      </div>
                      <div class="check">
                        {right} <p>{}Content Upload</p>
                      </div>
                      <div class="check">
                        {right} <p>{}Design With XD</p>
                      </div>
                      <div class="check">
                        {right} <p>{}8 Plugins/Extensions</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pricing-footer">
                  <a href="https://github.com/thakurujjwal" class="rn-btn ">
                    <p>ORDER NOW</p>
                    <i class="fa fa-arrow-right fa-1x" aria-hidden="true"></i>
                  </a>
                  <div class="time-line d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-clock"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>2 Days Delivery</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-activity"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                    <span>Unlimited Revission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyPricing

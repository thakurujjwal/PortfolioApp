import React from 'react'
import "../Styles/Testimonial.css"


const TestimonialCard = () => {
    return (
      <div>
        <div className="maintest">
          <div className="testimonialcard">
            <div>
              <img
                src="\images\myphoto2.jpg"alt="logo"
              />
            </div>
            <div className="testiphotocon">
              <span>default name</span>
              <h4>ujjwal thakur</h4>
              <p>chief officer manager</p>
            </div>
          </div>

          <div className="maintop">
            <div className="maintop1">
              <span>
                <i class="fa fa-quote-right fa-6x"></i>
              </span>
              {/* <button>
                <i class="fa fa-arrow-right fa-2x "></i>
              </button>
              <button>
                <i class="fa fa-arrow-left fa-2x "></i>
              </button> */}
            </div>

            <div className="maintopContent">
              <div className="testiConMain">
                <div>
                  <h4>Ujjwal Thakur</h4>
                  <span>University of DVI (1997 - 2001)</span>
                </div>
                <div className="testiConMain1">
                  <span class="fa fa-star fa-sm"></span>
                  <span class="fa fa-star fa-sm"></span>
                  <span class="fa fa-star fa-sm"></span>
                  <span class="fa fa-star fa-sm"></span>
                  <span class="fa fa-star fa-sm"></span>
                </div>
              </div>
              <div className="resLine"></div>
              <p>
                The education should be very interactual. Ut tincidunt est ac
                dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                sem in, lobortis mauris hendrerit ante.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TestimonialCard

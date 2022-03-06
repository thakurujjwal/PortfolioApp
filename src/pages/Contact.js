import React from "react";
import "../Styles/Contact.css";

const Contact = () => {


    const facebookIcon = (
        <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
        >
            <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
        </svg>
    );

    const twitterIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="-44.7006 -60.54775 387.4052 363.2865"
        >
            <path d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464" />
        </svg>
    );


    const instagramIcon = (
        <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
        >
            <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z" />
        </svg>
    );

    return (
      <div id="MainContact">
        <div className="Portheading">
          <span>Contact</span>
          <h1>contact with me</h1>
        </div>

        <div className="contact_main">
          <div className="contact_left">
            <figure >
              <img src="\images\contact1.png" alt="img" className="contact_img" style={{ content: "fit", borderRadius: "10px" }}
              />
            </figure>
            <h2>ujjwal thakur</h2>
            <p>
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <div htmlFor="number">
              phone.no :-
              <span> +91 9818229319</span>
            </div>
            <div htmlFor="emial">
              email :-
              <span> thakurujjwal9818@gmail.com</span>
            </div>
            <div className="social">
              <div>
                <p className="main-p">Find with me</p>
                <div className="maindiv">
                  <button>{instagramIcon}</button>
                  <button>{facebookIcon}</button>
                  <button>{twitterIcon}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_right">
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "1rem" }}>
                <div htmlFor="input">enter your name</div>
                <input
                  type="text"
                  name="ujj"
                  id=""
                  placeholder="enter your name"
                />
              </div>
              <div>
                <div htmlFor="input">contact number</div>
                <input
                  type="text"
                  name="ujj"
                  id=""
                  placeholder="enter your phone number"
                />
              </div>
            </div>
            <div htmlFor="input">enter your Email</div>
            <input
              type="Email"
              name="ujj"
              id=""
              placeholder="enter your Email"
              style={{
                width: "41rem",
                border: "2px solid black",
                background: "#191b1e",
                boxShadow:
                  "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset; ",
                borderRadius: "6px",
                height: "3rem",
                outlineColor: "#ff014f",
              }}
            />
            <div htmlFor="input">subject</div>
            <input
              type="text"
              name="ujj"
              id=""
              placeholder="subject"
              style={{
                width: "41rem",
                border: "2px solid black",
                background: "#191b1e",
                boxShadow:
                  "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset; ",
                borderRadius: "6px",
                height: "3rem",
                outlineColor: "#ff014f",
              }}
            />

            <div htmlFor="input">Message</div>
            <textarea
              type="text-area"
              name="ujj"
              id=""
              placeholder="Write Your Message Here !"
              cols="30"
              rows="10"
              style={{
                width: "41rem",
                border: "2px solid #070708 ",
                padding: "1rem",
                color: "white",
                background: "#191b1e",
                boxShadow:
                  "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset; ",
                borderRadius: "6px",
                height: "16rem",
                outlineColor: "#ff014f",
              }}
            ></textarea>

            <button type="submit" className="contact_button">
              send message{" "}
            </button>
          </div>
        </div>
      </div>
    );
};

export default Contact;

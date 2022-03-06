import React from 'react'
import TypewriterComponent from "typewriter-effect";

const Autotypewritter = () => {
    return (
      <div>
        <TypewriterComponent   className="typewriter"
          options={{
            strings: [
              " a Developer.",
              "a Professional Coder.",
              "a Full Stack Developer.",
              " a Developer.",
              "a Professional Coder.",
              "a Full Stack Developer.",
            ],
            autoStart: true,
            loop: true,
            delay: 40,
          }}
        />
      
      </div>
    );
}

export default Autotypewritter

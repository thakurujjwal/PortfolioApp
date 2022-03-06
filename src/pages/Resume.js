import React from 'react'
import '../Styles/Resume.css'
// import ResumeCard from '../components/ResumeCard';
import { Link } from "react-router-dom";
const Resume = () => {
    return (
      <div>
        <div className="resumehead ">
          <span>2+ YEARS OF EXPERIENCE</span>
          <h1>My Resume</h1>
        </div>

            <div className="resumediv">
                <Link to="Education" ><div className='resume1'>Education </div></Link>
                <Link to="Skill" ><div className='resume1'>Professional Skills </div></Link>
                <Link to="Education"><div className='resume1'>Experience</div></Link>
                <Link to="Skill" ><div className='resume1'>Interview </div></Link>
            </div>
            {/* <div style={{marginLeft:"100px" , display:"flex", flexWrap:'wrap' } }>
                <ResumeCard />
                <ResumeCard />


            </div> */}
       
      </div>
    );
}

export default Resume

import React from 'react'
import "../Styles/skill.css"

const Skill = () => {
    return (
        <div className="fds">
            {/* <div className='resumeCardhead'>
                <span>Technical Skills</span>
                <h1>Desigen & Evelopment skills</h1>
            </div> */}
            <div class="skill-bars">
                <div class="bar">
                    <div class="info">
                        <span>JavaScript</span>
                    </div>
                    <div class="progress-line html">
                        <span ></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>CSS</span>
                    </div>
                    <div class="progress-line css">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>jQuery</span>
                    </div>
                    <div class="progress-line jquery">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>React </span>
                    </div>
                    <div class="progress-line python">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>MySQL</span>
                    </div>
                    <div class="progress-line mysql">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>PhotoShop</span>
                    </div>
                    <div class="progress-line photo">
                        <span></span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Skill;

import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
   <section className="qua section">
    <h2 className="section_title">Qualification</h2>
    <span className="section_subtitle">My Education</span>
    <div className="qua_conatiner container">
        <div className="qua_tabs">
            <div className="qua_button qua_active button--flex">
                <i className="uil uil-graduation-cap qua_icon"></i>College
            </div>
            <div className="qua_button button--flex">
                <i className="uil uil-building qua_icon"></i> Schooling
            </div>
        </div>
        <div className="qua_section">
            <div className="qua_content">
                <div className="qua_data">
                    <div>
                        <h3 className="qua_title">B.Tech in Electrical & Electronics({"=>"} 7.5 GPA)</h3>
                        <span className="qua_subtitle">
                            Trident Academy of Technology-BBSR
                        </span>
                        <div className="qua_calender">
                            <i className="uil uil-calendar-alt"></i> 2019
                            - Present
                        </div>
                    </div>
                    <div>
                        <span className="qua_rounder"></span>
                        <span className="qua_line"></span>
                    </div>
                </div>
                <div className="qua_data">
                <div>
                    <span className="qua_rounder"></span>
                    <span className="qua_line"></span>
                </div>
                    <div>
                        <h3 className="qua_title">10+2({"=>"} 68%)</h3>
                        <span className="qua_subtitle">
                            V.K Institute - Jamshedpur
                        </span>
                        <div className="qua_calender">
                            <i className="uil uil-calendar-alt"></i> 2017
                            - 2019
                        </div>
                    </div>
                </div>
                <div className="qua_data">
                <div>
                    <span className="qua_rounder"></span>
                    <span className="qua_line"></span>
                </div>
                    <div>
                        <h3 className="qua_title">10th({"=>"} 8.0 CGPA)</h3>
                        <span className="qua_subtitle">
                            S.D.S.M - Jamshedpur
                        </span>
                        <div className="qua_calender">
                            <i className="uil uil-calendar-alt"></i> 2016
                            - 2017
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Qualification

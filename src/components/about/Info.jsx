import React from 'react'

const Info = () => {
  return (
      <div className="about_info grid">
        <div className="about_box">
        <i className="bx bx-award about_icon"></i>
          <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">Newbie</span>
        </div>
        <div className="about_box">
        <i className="bx bx-briefcase about_icon"></i>
          <h3 className="about_title">Completed</h3>
          <span className="about_subtitle">3+ Projects</span>
        </div>
        <div className="about_box">
        <i class='bx bxs-graduation about_icon'></i>
          <h3 className="about_title">Education</h3>
          <span className="about_subtitle">Trident Academy Of Technology, Bhubaneswar</span>
        </div>
      </div>
  )
}

export default Info

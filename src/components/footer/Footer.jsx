import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Sourav</h1>
            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
            </ul>
            <div className="footer_social">
                <a href="https://www.instagram.com/ig.s0urav/" className="home_social-icon"><i className="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/sourav-kumar-3095131b7/" className="home_social-icon"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/sourav0299" className="home_social-icon"><i className="bx bxl-github"></i></a>
            </div>
            <span className="footer_copy">&#169; Sourav. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer

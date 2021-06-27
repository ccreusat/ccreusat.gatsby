import * as React from "react"
// import PropTypes from "prop-types"
// import { StaticImage } from "gatsby-plugin-image"
import gatsby from "../images/gatsby-logo.png"
import vercel from "../images/vercel-logo.png"

const Footer = () => (
  <div className="footer">
    <p>Made with:</p>
    <img src={gatsby} alt="Gatsby" />
    <p>Deployed on:</p>
    <img src={vercel} alt="Vercel" />
  </div>
)

export default Footer

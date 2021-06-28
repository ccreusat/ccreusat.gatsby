import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {
  faHome,
  faFile,
  faCode,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons"
import downloadFile from "../static/clement_creusat_resume.pdf"

const Header = React.memo(({ siteTitle }) => {
  return (
    <header>
      <Link className="site-title" to="/">
        <FontAwesomeIcon icon={faTerminal} color="var(--blue)" /> {""}
        {siteTitle}
      </Link>
      <nav className="header__nav">
        <Link title="Home" to="/">
          <FontAwesomeIcon icon={faHome} size="lg" color="var(--blue)" />
        </Link>
        <Link title="Frontend Mentor Challenges" to="/challenges">
          <FontAwesomeIcon icon={faCode} size="lg" color="var(--blue)" />
        </Link>
        <a
          title="Github"
          href="https://github.com/ccreusat"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" color="var(--blue)" />
        </a>
        <a
          title="Linkedin"
          href="https://linkedin.com/in/ccreusat"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" color="var(--blue)" />
        </a>
        <a
          title="Clement Creusar CV"
          href={downloadFile}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFile} size="lg" color="var(--blue)" />
        </a>
      </nav>
    </header>
  )
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

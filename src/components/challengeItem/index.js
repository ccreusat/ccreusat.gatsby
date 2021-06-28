import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const ChallengeItem = props => {
  return (
    <div className="challenge__box">
      <div className="challenge__image">
        <GatsbyImage image={props.image} alt={props.title} />
      </div>
      <div className="challenge__content">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="badge-container">
          {props.tags.map((tag, index) => (
            <span key={index} className="badge">
              {tag.lang}
            </span>
          ))}
        </div>
        <div className="buttons-container flex">
          <a
            className="button"
            href={props.live_url}
            target="_blank"
            rel="noreferrer"
          >
            Live site
          </a>
          {props.wip && <span className="button disabled">{props.wip}</span>}
          <a
            className="button button--invert button--github"
            href={props.github_url}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default ChallengeItem

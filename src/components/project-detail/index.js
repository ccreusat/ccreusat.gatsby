import * as React from "react"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGooglePlay,
  faApple,
} from "@fortawesome/free-brands-svg-icons"

const ProjectDetail = props => {
  const renderIcons = icon => {
    switch (icon) {
      case "github":
        return faGithub
      case "apple":
        return faApple
      case "android":
        return faGooglePlay
      default:
        return faGithub
    }
  }

  const handleNextProject = () => {
    if (props.nextProject !== "") {
      return (
        <Link className="next-project" to={`#${props.nextProject}`}>
          <span>Next project</span>
        </Link>
      )
    } else {
      return (
        <Link className="next-project go-back" to={`#${props.nextProject}`}>
          <span>Go Back</span>
        </Link>
      )
    }
  }

  const renderImages = () => {
    if (props.imageMobile === null) {
      return <GatsbyImage image={getImage(props.image)} alt={props.title} />
    } else {
      const images = withArtDirection(getImage(props.image), [
        {
          media: "(max-width: 768px)",
          image: props.imageMobile !== null ? getImage(props.imageMobile) : "",
        },
      ])
      return (
        <GatsbyImage
          className="art-directed"
          image={images}
          alt={props.title}
        />
      )
    }
  }

  return (
    <div id={`project-${props.id}`} className="section">
      <div className={props.device === "mobile" ? "project mobile" : "project"}>
        <div className="container">
          <div className="project__content">
            <div className="project__body">
              <strong className="project__headline headline">
                {props.headline} / {props.date}
              </strong>
              <h2 className="project__title">{props.title}</h2>
              <p className="project__text">{props.text}</p>
              <div className="badge-container">
                {props.tags.map((tag, index) => (
                  <span key={index} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="buttons-container flex">
              {props.links.map((link, index) => {
                return (
                  link.url && (
                    <a
                      key={index}
                      className={`button ${link.class}`}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.icon && (
                        <FontAwesomeIcon
                          icon={renderIcons(link.icon)}
                          size="lg"
                        />
                      )}
                      <span className="screen-reader-text">{link.text}</span>
                    </a>
                  )
                )
              })}
            </div>
          </div>
          {props.device === "desktop" ? (
            <div className="browser">
              <div className="browser__bar">
                <div className="browser__oval"></div>
              </div>
              {renderImages()}
            </div>
          ) : props.device === "ipad" ? (
            <div className="project__ipad">
              <GatsbyImage image={getImage(props.image)} alt={props.title} />
            </div>
          ) : (
            <div className="project__browser">
              <GatsbyImage image={getImage(props.image)} alt={props.title} />
            </div>
          )}
          {handleNextProject()}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail

import * as React from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ProjectDetail = props => {
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

  const handleButton = (link, index) => {
    if (link.url !== "") {
      return (
        <a
          key={index}
          className={`button ${link.class}`}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.icon && <i class={link.icon}></i>}
          {link.text}
        </a>
      )
    }
  }

  return (
    <div id={`project-${props.id}`} className="section">
      <div className="project">
        <div className="container">
          <div className="project__content">
            <div className="project__body">
              <strong className="project__headline headline">
                {props.headline}
              </strong>
              <h2 className="project__title">{props.title}</h2>
              <p className="project__text">{props.text}</p>
              <div className="badge-container">
                {props.tags.map(tag => (
                  <>
                    <span className="badge">{tag}</span>
                  </>
                ))}
              </div>
            </div>
            <div className="buttons-container flex">
              {props.links.map((link, index) => {
                handleButton(link, index)
              })}
            </div>
          </div>
          <div className="browser">
            <div className="browser__bar">
              <div className="browser__oval"></div>
            </div>
            <StaticImage
              src={props.imageDesktop}
              //   src="../../images/desktop/lpb-screen.jpg"
              alt={props.title}
            />
          </div>
          {handleNextProject()}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Intro = () => {
  const introQuery = useStaticQuery(graphql`
    {
      introJson {
        fullname
        text
        title
        images {
          alt
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const data = introQuery.introJson

  return (
    <section className="section">
      <div className="hero">
        <div className="container flex">
          <div className="hero__content">
            <strong className="hero__headline headline">{data.fullname}</strong>
            <h1 className="hero__title">{data.title}</h1>
            <p className="hero__text">{data.text}</p>
            <div className="buttons-container flex">
              <Link className="button" to="#about" title="About me">
                About me
              </Link>
              <Link className="button button--invert" to="#project-1">
                Recent Projects
              </Link>
            </div>
          </div>
          <div className="hero__images">
            {data.images.map((image, index) => (
              <div key={index} className="hero__image">
                <GatsbyImage image={getImage(image.src)} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro

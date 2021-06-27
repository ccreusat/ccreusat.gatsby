import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = () => {
  const aboutQuery = useStaticQuery(graphql`
    {
      aboutJson {
        headline
        title
        text
        recent
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const data = aboutQuery.aboutJson

  return (
    <section id="about" className="section">
      <div className="about">
        <div className="container">
          <div className="about__avatar">
            <GatsbyImage
              className="fit-image"
              image={getImage(data.image)}
              alt={data.title}
            />
          </div>
          <div className="about__content">
            <strong className="about__headline headline">
              {data.headline}
            </strong>
            <h2 className="about__title">{data.title}</h2>
            {data?.text?.map((item, index) => (
              <p key={index} className="about__text">
                {item}
              </p>
            ))}
            <div className="buttons-container flex">
              <Link className="button" to="#project-1">
                {data.recent}
              </Link>
              <Link className="button button--invert" to="/challenges">
                <span>Front-End</span> Challenges
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

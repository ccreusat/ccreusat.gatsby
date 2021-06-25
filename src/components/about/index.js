import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = ({ data }) => {
  const [aboutData, setAboutData] = React.useState("")

  React.useEffect(() => {
    const fetchData = () => {
      const aboutNode = data.allAboutJson.nodes[0]
      setAboutData(aboutNode)
    }
    fetchData()
  }, [aboutData])

  const image = getImage(aboutData.image)

  return (
    <section id="about" className="section">
      <div className="about">
        <div className="container">
          <div className="about__avatar">
            <GatsbyImage
              className="fit-image"
              image={image}
              alt={aboutData.title}
            />
          </div>
          <div className="about__content">
            <strong className="about__headline headline">
              {aboutData.headline}
            </strong>
            <h2 className="about__title">{aboutData.title}</h2>
            {aboutData?.text?.map((item, index) => (
              <p key={index} className="about__text">
                {item}
              </p>
            ))}
            <div className="buttons-container flex">
              <Link className="button" to="#project-1">
                {aboutData.recent}
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

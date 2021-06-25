import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
// import JSONData from "../../content/intro.json"
import { useStaticQuery, graphql } from "gatsby"

const Intro = () => {
  const introQuery = useStaticQuery(graphql`
    {
      allIntroJson {
        edges {
          node {
            fullname
            text
            title
            images {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      # allImageSharp {
      #   edges {
      #     node {
      #       gatsbyImageData
      #     }
      #   }
      # }
    }
  `)
  // const images = getImage(data.allImageSharp)
  // console.log(data.allData.edges[5].node.fullname)
  // console.log(data.allImageSharp)
  const data = introQuery.allIntroJson.edges[0].node

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
            <div className="hero__image">
              <StaticImage
                src="../../images/hero_macbook.jpg"
                quality={95}
                formats={["AUTO", "JPG"]}
                alt="Web development"
              />
            </div>
            <div className="hero__image">
              <StaticImage
                src="../../images/hero_mobile.jpg"
                quality={95}
                formats={["AUTO", "JPG"]}
                alt="Mobile development"
              />
            </div>
            <div className="hero__image">
              <StaticImage
                src="../../images/hero_ux.jpg"
                quality={95}
                formats={["AUTO", "JPG"]}
                alt="User Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* const data = {
  fullname: "Clement Creusat",
  title: "Front-End Developer",
  text:
    "10 years experience of developing websites, web & mobile apps. Strong experience with Modern CSS (Grid, Flexbox) & User Experience	Consulting.",
} */

/* const Intro = ({ data }) => {
  console.log(query)
  return (
    <section className="section">
      <div className="hero">
        <div className="container">
          <div className="hero__content">
            <strong className="hero__headline headline">
              {query.fullname}
            </strong>
            <h1 className="hero__title"></h1>
            <p className="hero__text"></p>
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
            <div className="hero__image">
            </div>
            <div className="hero__image">
              <StaticImage
                src="../../images/hero_mobile.jpg"
                quality={95}
                formats={["AUTO", "JPG"]}
                alt="mobile development"
              />
            </div>
            <div className="hero__image">
              <StaticImage
                src="../../images/hero_ux.jpg"
                quality={95}
                formats={["AUTO", "JPG"]}
                alt="user experience"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} */

/* export const query = graphql`
  {
    allData {
      edges {
        node {
          fullname
          title
          text
          image
        }
      }
    }
  }
` */

export default Intro

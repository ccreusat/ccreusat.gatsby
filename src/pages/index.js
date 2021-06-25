import * as React from "react"
/* import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image" */
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import ProjectDetail from "../components/project-detail"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />

    <Intro />
    <About data={data} />

    <section>
      {/* {projects.map((project, index) => (
        <ProjectDetail
          key={index}
          id={index + 1}
          headline={project.headline}
          title={project.title}
          text={project.text}
          tags={project.tags}
          links={project.links}
          imageDesktop={project.imageDesktop}
          imageMobile={project.imageMobile}
          nextProject={project.nextProject}
        />
      ))} */}
    </section>
  </Layout>
)

export const query = graphql`
  {
    allAboutJson {
      nodes {
        text
        title
        headline
        recent
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default IndexPage

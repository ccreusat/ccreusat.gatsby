import * as React from "react"
import ProjectDetail from "../project-detail"
import { useStaticQuery, graphql } from "gatsby"

const ProjectList = () => {
  const projectQuery = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          id
          title
          text
          tags
          nextProject
          headline
          date
          device
          links {
            class
            icon
            text
            url
          }
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          imageMobile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const projectsData = projectQuery.allProjectsJson.nodes

  return (
    <div>
      {projectsData.map((project, index) => {
        return <ProjectDetail key={project.id} {...project} />
      })}
    </div>
  )
}

export default ProjectList

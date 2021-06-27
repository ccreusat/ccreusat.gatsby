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
              gatsbyImageData(layout: FULL_WIDTH)
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
        return (
          <ProjectDetail
            key={project.id}
            id={project.id}
            headline={project.headline}
            date={project.date}
            title={project.title}
            text={project.text}
            tags={project.tags}
            links={project.links}
            device={project.device}
            image={project.image}
            imageMobile={project.imageMobile}
            nextProject={project.nextProject}
          />
        )
      })}
    </div>
  )
}

export default ProjectList

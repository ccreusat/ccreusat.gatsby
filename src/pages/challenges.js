import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  {
    allChallengesJson {
      nodes {
        button
        wip
        github
        github_url
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        live_url
        tags {
          class
          lang
        }
        text
        title
      }
    }
  }
`

const Challenges = ({ data }) => {
  const challengesData = data.allChallengesJson.nodes

  function image(image) {
    return getImage(image)
  }
  return (
    <Layout className="container">
      <Seo title="Front-End Challenges" />

      <section className="challenge">
        {challengesData.map((info, index) => {
          return (
            <div key={index} className="challenge__box">
              <div className="challenge__image">
                <GatsbyImage image={image(info.image)} alt={info.title} />
              </div>
              <div className="challenge__content">
                <h2>{info.title}</h2>
                <p>{info.text}</p>
                <div className="badge-container">
                  {info.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={
                        tag.class ? `badge badge--${tag.class}` : `badge `
                      }
                    >
                      {tag.lang}
                    </span>
                  ))}
                </div>
                <div className="buttons-container flex">
                  <a
                    className="button"
                    href={info.live_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live site
                  </a>
                  {info.wip && (
                    <span className="button disabled">{info.wip}</span>
                  )}
                  <a
                    className="button button--invert button--github"
                    href={info.github_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className=" devicon-github-original"></i>Github
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      <aside className="challenge__more">
        <div className="flex">
          <h2>Would you like to see more ?</h2>
        </div>
        <div className="buttons-container flex">
          <a
            className="button"
            href="https://www.frontendmentor.io/profile/ccreusat/solutions"
            target="_blank"
            rel="noreferrer"
          >
            Yes!
          </a>
          <Link className="button button--invert" to="/">
            No ! Take me home
          </Link>
        </div>
      </aside>
    </Layout>
  )
}
export default Challenges

import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link } from "gatsby"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import ChallengeItem from "../components/challengeItem"

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
            <ChallengeItem key={index} {...info} image={image(info.image)} />
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

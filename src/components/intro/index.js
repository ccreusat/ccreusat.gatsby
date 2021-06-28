import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { createApi } from "unsplash-js"

const GATSBY_APIKEY = process.env.GATSBY_APIKEY
const api = createApi({
  accessKey: GATSBY_APIKEY,
})

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo

  return (
    <>
      <img className="fit-image" src={urls.regular} alt={user.name} />
      <a
        className="credit"
        target="_blank"
        rel="noreferrer"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </>
  )
}

const Intro = () => {
  const [dataPhoto, setPhotosResponse] = React.useState(null)
  React.useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 15)
    api.search
      .getPhotos({
        query: "coding",
        orientation: "portrait",
        per_page: 3,
        page: randomNumber,
      })
      .then(result => {
        setPhotosResponse(result.response.results)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

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
            {dataPhoto?.map(photo => (
              <div key={photo.id} className="hero__image">
                <PhotoComp photo={photo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

Intro.propTypes = {
  fullname: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Intro

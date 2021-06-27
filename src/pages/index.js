import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import ProjectList from "../components/projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Intro />
    <About />

    <section>
      <ProjectList />
    </section>
  </Layout>
)
export default IndexPage

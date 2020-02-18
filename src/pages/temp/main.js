import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import About from "../../components/about/about"

const Main = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
    </Layout>
  )
}

export default Main
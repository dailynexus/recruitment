import React from "react"
import { Link } from "gatsby"

import AboutUs from "../components/about-us"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialMedia from "../components/social-media"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutUs />
      <SocialMedia />
    </Layout>
  </>
)

export default IndexPage

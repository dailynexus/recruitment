import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import AboutUs from "../components/about-us"
import SocialMedia from "../components/social-media"
import OurTeams from "../components/our-teams"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutUs />
      <SocialMedia />
      <OurTeams />
    </Layout>
  </>
)

export default IndexPage

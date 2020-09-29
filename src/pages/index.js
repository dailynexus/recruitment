import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header";
import Hero from "../components/hero"
import AboutUs from "../components/about-us"
import SocialMedia from "../components/social-media"
import OurTeams from "../components/our-teams"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Header />
      <Hero />
      <AboutUs />
      <SocialMedia />
      <OurTeams />
    </Layout>
  </>
)

export default IndexPage

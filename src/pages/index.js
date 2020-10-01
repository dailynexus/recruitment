import React, { useState, useEffect } from "react"
import useScrollPosition from '@react-hook/window-scroll';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header";
import Menu from "../components/menu";
import Hero from "../components/hero"
import AboutUs from "../components/about-us";
import SocialMedia from "../components/social-media";
import OurTeams from "../components/our-teams";
import FAQ from "../components/faq";
import Contact from "../components/contact";

const IndexPage = () => {
  const [sticking, setSticking] = useState(false);
  const scrollY = useScrollPosition(30);
  const [scrollThreshold, setScrollThreshold] = useState(200);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      // Match change in header subtext to 2rem
      setScrollThreshold((0.11 * window.innerWidth) + 91);
    } else if (window.innerWidth <= 768)  {
      setScrollThreshold((0.11 * window.innerWidth) + 112);
    } else {
      setScrollThreshold(200);
    }
  }, [window.innerWidth])

  useEffect(() => {
    setSticking(scrollY > scrollThreshold);
  }, [scrollY]);

  return (
    <>
      <Layout sticking={sticking}>
        <SEO title="Home" />
        <Header />
        <Menu sticking={sticking} />
        <Hero sticking={sticking} />
        <AboutUs />
        <SocialMedia />
        <OurTeams />
        <FAQ />
        <Contact />
      </Layout>
    </>
  );
}

export default IndexPage;
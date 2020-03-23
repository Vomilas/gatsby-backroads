import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

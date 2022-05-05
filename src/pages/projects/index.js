import { graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import * as styles from "../../styles/portfolio.module.css"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Portfolio Web Applications and Websites</h3>
        <div className={styles.projects}>
          {projects.map(project => {
            return (
              <Link
                to={`/projects/${project.frontmatter.slug}`}
                id={project.id}
              >
                <div>
                  <Img
                    fluid={project.frontmatter.thumbnail.childImageSharp.fluid}
                  />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>
          Like these projects? Get in touch at:{" "}
          {data.contact.siteMetadata.contact}
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyProjects {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

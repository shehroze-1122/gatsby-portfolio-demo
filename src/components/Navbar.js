import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  const query = graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  const data = useStaticQuery(query)
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/" activeStyle={{ borderColor: "white" }}>
          Home
        </Link>
        <Link to="/about" activeStyle={{ borderColor: "white" }}>
          About
        </Link>
        <Link to="/projects" activeStyle={{ borderColor: "white" }}>
          Projects
        </Link>
      </div>
    </nav>
  )
}

import * as React from "react"

import { Link } from "gatsby"

const DocNav = ({ pages }) => (
  <div className="docs-navigation">
    <strong>Directory</strong>
    {pages
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => {
        return (
          <Link to={post.fields.slug} key={post.id}>
            <div>
              {post.frontmatter.title}
            </div>
          </Link>
        )
      })}
  </div>
)

export default DocNav

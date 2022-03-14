import * as React from "react"

import { Link } from "gatsby"
import { Accordion } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"

const makeLink = page => (
  <Link to={page.slug} key={page.id}>
    <div>
      {page.title}
    </div>
  </Link>
)

const makeLinkGroup = page => (
  <Accordion key={uuidv4()}>
    <Accordion.Item eventKey={page.id}>
      <Accordion.Header>{page.title}</Accordion.Header>
      <Accordion.Body>
        {makeLink(page)}
        {page.children.map(child => makeLink(child))}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
)

const DocNav = ({ pages }) => (
  <div className="docs-navigation">
    <strong>Directory</strong>
    {pages
      .filter(post => post.title.length > 0)
      .map(post => post.children.length === 0 ? makeLink(post) : makeLinkGroup(post)
      )}
  </div>
)

export default DocNav

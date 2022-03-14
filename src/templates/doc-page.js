import React, { useState } from "react"
import { Container, Row, Col, Offcanvas } from "react-bootstrap"
import { graphql } from "gatsby"

import Spacer from "../components/Spacer"
import Layout from "../components/layout"
import DocNav from "../components/DocNav"
import Seo from "../components/seo"

const sortMenu = pages => {
  const base = '/docs/';
  let pageObjects = pages.map(page => {
    return {
      id: page.node.id,
      title: page.node.frontmatter.title,
      slug: page.node.fields.slug,
      relative: page.node.fields.slug.replace(base, '').replace(/\/$/, ''),
      parent: page.node.parent.relativeDirectory,
      children: []
    }
  });

  let parents = pageObjects.filter(page => { return page.parent.length === 0; });
  let children = pageObjects.filter(page => { return page.parent.length > 0; });

  children.forEach(page => {
    const parentIndex = parents.findIndex(element => element.relative === page.parent);
    if (parentIndex >= 0) {
      parents[parentIndex].children.push(page);
    }
  });

  parents.sort((a, b) => {
    let aRelative = a.relative.toLowerCase();
    let bRelative = b.relative.toLowerCase();

    if (aRelative > bRelative) {
      return 1;
    }

    if (aRelative < bRelative) {
      return -1;
    }

    return 0;
  });

  return parents;
}

const DocPage = ({ data }) => {
  const { markdownRemark: page } = data
  const { edges: pages } = data.allMarkdownRemark
  const [show, setShow] = useState(false)

  const image = page.frontmatter.image ? page.frontmatter.image.childImageSharp.resize : null;
  const menuTree = sortMenu(pages);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const onKeyDown = event => {
    switch (event.keyCode) {
      case 13:
        handleShow()
        break
      default:
        return
    }
  }

  return (
    <Layout>
      <Seo title={`Wayfair Open Source - ${page.frontmatter.title}`} image={image}/>
      <Container>
        <Spacer />
        <Row className="d-lg-none">
          <div
            className="doc-nav-button"
            onKeyDown={onKeyDown}
            tabIndex="0"
            role="button"
            onClick={handleShow}
          >
            📖 Navigation
          </div>
          <Offcanvas show={show} onHide={handleClose} scroll backdrop={false}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>📖 Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <DocNav pages={menuTree} />
            </Offcanvas.Body>
          </Offcanvas>
        </Row>
        <Row>
          <Col lg="3" className="d-none d-lg-block">
            <DocNav pages={menuTree} />
          </Col>
          <Col xs="12" sm="10" lg="7" className="doc-container">
            <h1 className="title">{page.frontmatter.title}</h1>
            <div className="doc-body"
              dangerouslySetInnerHTML={{ __html: page.html }}
            ></div>
          </Col>
        </Row>
      </Container>
      <Spacer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        image: featured {
          childImageSharp {
            resize(width: 600, height: 400) {
              src
              height
              width
            }
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`

export default DocPage

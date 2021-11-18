import React, { useState } from "react"
import { Container, Row, Col, Offcanvas } from "react-bootstrap"
import { graphql } from "gatsby"

import Spacer from "../components/Spacer"
import Layout from "../components/layout"
import DocNav from "../components/DocNav"
import Seo from "../components/seo"

const DocPage = ({ data }) => {
  const { markdownRemark: page } = data
  const { edges: pages } = data.allMarkdownRemark
  const [show, setShow] = useState(false)

  const image = page.frontmatter.image ? page.frontmatter.image.childImageSharp.resize : null;

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
              <DocNav pages={pages} />
            </Offcanvas.Body>
          </Offcanvas>
        </Row>
        <Row>
          <Col lg="3" className="d-none d-lg-block">
            <DocNav pages={pages} />
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
        }
      }
    }
  }
`

export default DocPage

import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Container, Col } from "react-bootstrap"

import Checklist from "../components/Checklist"
import Spacer from "../components/Spacer"
import Resources from "../components/Resources"

import { OutboundLink } from "gatsby-plugin-google-gtag"

const GetStartedPage = () => (
  <Layout>
    <Seo title="Get Started With Open Source - Wayfair" />
    <Spacer />
    <Container>
      <Row>
        <Col md="12" lg="5">
          <h1>Get Started</h1>
          <p>
            Engage with an Open Source community built across several languages,
            a decade of experience, and thousands of users.
          </p>
          <OutboundLink href="https://github.com/wayfair">View Our Projects</OutboundLink>
        </Col>
        <Col md="1" sm="0" />
        <Col md="12" lg="6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/MFuE2UFWOH8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            display="block"
          />
        </Col>
      </Row>
    </Container>
    <Row className="justify-content-center">
      <Checklist />
    </Row>
    <Spacer />
    <Resources />
    <Spacer />
  </Layout>
)

export default GetStartedPage

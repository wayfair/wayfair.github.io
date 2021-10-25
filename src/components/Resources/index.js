import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Supported = () => (
  <Container style={{
    textAlign: "center"
  }}>
    <h1>
      Additional Resources
    </h1>
    <h3 style={{
      marginBottom: "60px"
    }}
    >Helping you along your own OSS journey</h3>
    <Row
      className="justify-content-center supported-projects"
    >
      <Col lg="4" md="8">
        <OutboundLink href="https://www.aboutwayfair.com/careers/tech-blog">
          <StaticImage
            className="d-none d-md-inline-flex"
            src="../../images/get-started/resource-lilac.png"
            alt="Resources Image"
            height={130}
            width={130}
            formats={["AUTO"]}
          />
          <h3 className="support-desc-header">Tech Blog</h3>
          <p className="support-desc">
            Ranging from Open Source software like Tremor and Buildkite 
            to some of the secret sauce that keeps us running. <br />
            Click/tap to read about Wayfair's tech stories!
          </p>
        </OutboundLink>
      </Col>
      <Col lg="4" md="8">
        <OutboundLink href="https://opensource.guide">
          <StaticImage
            className="d-none d-md-inline-flex"
            src="../../images/get-started/resource-lilac.png"
            alt="Resources Image"
            height={130}
            width={130}
            formats={["AUTO"]}
          />
          <h3 className="support-desc-header">opensource.guide</h3>
          <p className="support-desc">
            A site created by GitHub, this fully open source guide is compiled from
            years of experience across many individual contributors. <br/>
            Drop in to learn more!
          </p>
        </OutboundLink>
      </Col>
      <Col lg="4" md="8">
        <OutboundLink href="https://www.wayfair.com/careers/jobs?teamIds=1&gh_src=wayfair.github.io">
          <StaticImage
            className="d-none d-md-inline-flex"
            src="../../images/get-started/resource-lilac.png"
            alt="Resources Image"
            height={130}
            width={130}
            formats={["AUTO"]}
          />
          <h3 className="support-desc-header">Careers</h3>
          <p className="support-desc">
            Interested in Open Source? Want to join us in building big solutions
            with innovative software? Start here to see if there's a fit for you at Wayfair!
          </p>
        </OutboundLink>
      </Col>
    </Row>
  </Container>
)

export default Supported

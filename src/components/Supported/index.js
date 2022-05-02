import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Supported = () => (
  <Container>
    <h1
      style={{
        textAlign: "center",
        marginBottom: "40px",
      }}
    >
      Projects We Support
    </h1>
    <Row
      className="justify-content-center supported-projects"
      style={{
        textAlign: "center",
      }}
    >
      <Col lg="3" sm="6">
        <a href="https://www.python.org/">
          <StaticImage
            className="d-none d-md-inline-flex"
            src="../../images/supported/python.png"
            alt="Python logo"
            height={130}
            width={130}
            formats={["AUTO"]}
          />
          <h3 className="support-desc-header">Python</h3>
          <p className="support-desc">
            Developed under an OSI-approved open source license, evangelised at
            Wayfair
          </p>
        </a>
      </Col>
      <Col lg="3" sm="6">
        <a href="https://backstage.spotify.com/">
          <StaticImage
            className="d-none d-md-inline-flex"
            src="../../images/supported/backstage.png"
            alt="Backstage logo"
            height={130}
            width={130}
            formats={["AUTO"]}
          />
          <h3 className="support-desc-header">Backstage</h3>
          <p className="support-desc">
            An open platform for building developer portals, powered by spotify
          </p>
        </a>
      </Col>
      <Col lg="3" sm="6">
        <a href="https://github.com/buildkite">
          <StaticImage
            className="d-none d-md-inline-flex"
            src="../../images/supported/buildkite.png"
            alt="Buildkite Logo"
            height={130}
            width={130}
            formats={["AUTO"]}
          />
          <h3 className="support-desc-header">Buildkite</h3>
          <p className="support-desc">
            Fast, secure, and scalable continuous integration and deployment
            pipelines
          </p>
        </a>
      </Col>
      <Col lg="3" sm="6">
        <a href="https://tremor.rs">
          <StaticImage
            className="d-none d-md-inline-flex"
            src="../../images/supported/tremor.png"
            alt="Tremor Logo"
            height={130}
            width={130}
            formats={["AUTO"]}
          />
          <h3 className="support-desc-header">Tremor</h3>
          <p className="support-desc">
            Wayfair's early stage event processing system for unstructured data
          </p>
        </a>
      </Col>
    </Row>
  </Container>
)

export default Supported

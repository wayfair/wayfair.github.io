import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <Container
      fluid
      style={{
        background: `#e1dcf2`,
        paddingTop: `2px`,
      }}
    >
      {/* icons and links to external stuff */}
      <Row
        className="justify-content-end"
        style={{
          textAlign: "right",
        }}
      >
        <Col xs="8"
          className="d-inline d-lg-none"
          style={{
            textAlign: "left",
          }}
        >
          <a
            target="_"
            href="https://www.aboutwayfair.com/"
            className="plain-link"
          >
            About Us
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            target="_"
            href="https://www.wayfair.com/careers/jobs"
            className="plain-link"
          >
            Careers
          </a>
        </Col>
        <Col>
          <span className="d-none d-lg-inline">
            <a
              target="_"
              href="https://www.aboutwayfair.com/"
              className="plain-link"
            >
              About Us
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              target="_"
              href="https://www.wayfair.com/careers/jobs"
              className="plain-link"
            >
              Careers
            </a>
            &nbsp;&nbsp;&nbsp;
          </span>
          <a target="_" href="https://github.com/wayfair">
            <StaticImage
              src="../images/IconGitHub.png"
              width={16}
              quality={16}
              formats={["AUTO"]}
              alt="Wayfair GitHub Icon"
              style={{
                margin: `8px`,
              }}
            />
          </a>
          <a target="_" href="https://twitter.com/wayfairtech">
            <StaticImage
              src="../images/IconTwitter.png"
              width={16}
              quality={16}
              formats={["AUTO"]}
              alt="Wayfair GitHub Icon"
              style={{
                margin: `8px`,
              }}
            />
          </a>
          <a target="_" href="https://www.youtube.com/channel/UCEvOJSbEEBkXw40FqHGPVRA">
            <StaticImage
              src="../images/IconYT.png"
              width={16}
              quality={16}
              formats={["AUTO"]}
              alt="Wayfair GitHub Icon"
              style={{
                margin: `8px`,
              }}
            />
          </a>
        </Col>
      </Row>
    </Container>
    <Container
      fluid
    >
      <Row className="d-flex d-lg-none">
        <Col style={{
          textAlign: "center",
          marginTop: "5px"
        }}>
          <Link to="/">
          <StaticImage
            src="../images/wayfairosslogo.png"
            height={60}
            formats={["AUTO"]}
            alt="Wayfair GitHub Icon"
          />
          </Link>
        </Col>
      </Row>
      <Row className="d-none d-lg-flex">
        <Col sm lg="3">
          <Link to="/">
            <StaticImage
              src="../images/wayfairosslogo.png"
              height={40}
              formats={["AUTO"]}
              alt="Wayfair GitHub Icon"
            />
          </Link>
        </Col>
        <Col >
          <Row
            style={{
              height: "40px",
            }}
          >
            <Col
              style={{
                textAlign: "right",
                paddingTop: "6px",
              }}
            >
              {/*TODO: Make links go to real places*/}
              <Link to="/projects" className="plain-link">
                Projects
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/" className="plain-link">
                Community
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/docs" className="plain-link">
                Docs
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/get-started" className="plain-link">
                Get Involved
              </Link>
            </Col>
            {/*TODO: Search with gatsby plugin*/}
          </Row>
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header

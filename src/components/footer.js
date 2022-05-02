import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <Container fluid className="footer">
      <Row >
        <Col>
          {/* Icons, Date Stamp, T/C */}
          <div>
            <a target="_" href="https://github.com/wayfair">
              <StaticImage
                src="../images/IconGitHubFooter.png"
                width={30}
                formats={["AUTO"]}
                alt="Wayfair GitHub Icon"
                style={{
                  margin: `8px`,
                }}
              />
            </a>
            <a target="_" href="https://twitter.com/wayfairtech">
              <StaticImage
                src="../images/IconTwitterFooter.png"
                width={30}
                formats={["AUTO"]}
                alt="Wayfair GitHub Idiv"
                style={{
                  margin: `8px`,
                }}
              />
            </a>
            <a target="_" href="https://www.youtube.com/channel/UCEvOJSbEEBkXw40FqHGPVRA">
              <StaticImage
                src="../images/IconYTFooter.png"
                width={30}
                formats={["AUTO"]}
                alt="Wayfair GitHub Icon"
                style={{
                  margin: `8px`,
                }}
              />
            </a>
          </div>
          © {new Date().getFullYear()} by Wayfair LLC
          <br />
          <a href="https://terms.wayfair.io/en-US?csnid=&csnutid=23e17d3a-60a2-a32f-7a77-40e928a4ff02&txid=I%2BF9OmCi2Z1anyLpyIwTAg%3D%3D#terms">
            Terms and Conditions
          </a>
          &nbsp;|&nbsp;
          <a href="https://www.aboutwayfair.com/about-wayfair-cookies">
            Privacy Policy
          </a>
        </Col>
        <Col className="d-none justify-content-end d-lg-flex">
            <div className="d-inline-block">
              <div className="footer-heading">Site Map</div>
              <div className="footer-list">
                <Link to="/projects">
                  Projects
                </Link>
                <br />
                <Link to="/">
                  Community
                </Link>
                <br />
                <Link to="/docs">
                  Docs
                </Link>
                <br />
                <Link to="/" className="plain-link">
                  Get Involved
                </Link>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="d-inline-block">
              <div className="footer-heading">GitHub</div>
              <div className="footer-list">
                <a href="https://github.com/wayfair">
                  Wayfair
                </a>
                <br />
                <a href="https://github.com/wayfair-contribs">
                  Contribs
                </a>
                <br />
                <a href="https://github.com/wayfair-incubator">
                  Incubator
                </a>
                <br />
                <a href="https://github.com/wayfair-archive">
                  Archive
                </a>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="d-inline-block">
              <div className="footer-heading">Information</div>
              <div className="footer-list">
                <a href="https://www.aboutwayfair.com/who-we-are">
                  Who We Are
                </a>
                <br />
                <a href="https://www.aboutwayfair.com/leadership">
                  Leadership
                </a>
                <br />
                <a href="https://www.aboutwayfair.com/how-we-work">
                  How We Work
                </a>
                <br />
                <a href="https://www.aboutwayfair.com/category/company-news">
                  News &amp; Stories
                </a>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer

import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"

import ImageCard from "./ImageCard"
// image imports for cards
import PlatformImage from "../../images/cards/Plat.png"
import DevAdvocateImage from "../../images/cards/DevRel.png"
import AuxEngImage from "../../images/cards/AuxEng.png"

const cards = [
  {
    title: "Open Source Platform",
    description:
      "The heart and foundation of our open source offerings. For Wayfair and beyond.",
    href: "/",
    linkText: "Take a look",
    imageSrc: PlatformImage,
    alt: "Open Source Platform Background Image",
  },
  {
    title: "Developer Advocacy",
    description:
      "Serving the community through our catalogue of open source projects.",
    href: "/",
    linkText: "Watch and Learn",
    imageSrc: DevAdvocateImage,
    alt: "Developer Advocacy Background Image",
  },
  {
    title: "Auxiliary Engineering",
    description:
      "Driving continuous learning and cultural change through open source.",
    href: "/",
    linkText: "Find out more",
    imageSrc: AuxEngImage,
    alt: "Open Source Platform Background Image",
  },
]

const ImageCards = () => (
  <Container fluid>
    <Row className="justify-content-center d-none d-lg-flex">
      {cards.map((props, index) => (
        <div
          style={{
            height: "257px",
            width: "292px",
            marginRight: index < 2 ? "17px" : "",
          }}
          key={index}
        >
          <ImageCard {...props} />
        </div>
      ))}
    </Row>
    {/* As the screen shrinks, columns assemble to fit content on the page*/}
    <Row className="d-flex d-lg-none d-xl-none">
      {cards.map((props, index) => (
        <Col
          style={{
            textAlign: "center",
            marginBottom: "17px"
          }}
          key={index}
        >
          <ImageCard {...props} />
          <div className="d-block d-sm-none" />
        </Col>
      ))}
    </Row>
  </Container>
)

export default ImageCards

import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

import projects from "./projects.js"

const Featured = () => {
  let [slide, setSlide] = useState(0)

  const onKeyDown = ({keyCode}) => {
    switch(keyCode) {
      // numbers 1 2 and 3
      case 97:
      case 98:
      case 99:
        setSlide(keyCode-97);
        break;
      default:
        return;
    }
  }

  return (
    <Container
      style={{
        backgroundColor: "#E1DCF2",
        padding: "60px",
      }}
    >
      <Row className="justify-content-center">
        <Col xs="12" sm="6" md="8" lg="5" xl="4">
          <h2>Featured Projects</h2>
          {projects.map(({ description }, index) => (
            <div
              key={index}
              style={{
                display: index === slide ? "" : "none",
              }}
            >
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              <br />
            </div>
          ))}
          <strong>View Our Projects</strong>
          <br />
          {projects.map((_, index) => (
            <span
              tabIndex={index}
              key={index}
              style={{
                height: "10px",
                width: "10px",
                marginRight: "5px",
                backgroundColor: index === slide ? "#612578" : "#fff",
                borderRadius: "50%",
                display: "inline-block",
              }}
              onClick={() => setSlide(index)}
              role="button"
              aria-label={"Show Slide "+(index+1)}
              onKeyDown={onKeyDown}
            />
          ))}
        </Col>
        {/* Column/image that disappears when screen too smol */}
        <Col lg="6" xl="4"className="d-none d-lg-flex justify-content-center">
          {projects.map(({ imageSrc, alt }, index) => (
            <img
              src={imageSrc}
              alt={alt}
              key={index}
              style={{
                display: index === slide ? "" : "none",
                width: "455px",
                height: "300px",
                minWidth: "455px"
              }}
            />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Featured

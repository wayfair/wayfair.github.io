import React, { useState } from "react"
import { Container, Row, Col, Accordion } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { projects, languages } from "./projects.js"

const ProjectList = () => {
  let [filter, setFilter] = useState("")

  const onKeyDown = (event, newFilter) => {
    switch (event.keyCode) {
      case 13:
        setFilter(newFilter)
        event.stopPropagation()
        break
      default:
        return
    }
  }

  return (
    <Container>
      {/* will need to show/hide the sidebar on left as size becomes small */}
      <Row>
        <Col lg="3" className="d-none d-lg-inline">
          <h5>
            <strong>Filter</strong>
          </h5>
          {languages.map((language, index) => (
            <div
              key={index}
              tabIndex={index + 50}
              style={{
                marginBottom: "5px",
              }}
              role="button"
              aria-label={"Filter language " + language}
              onClick={() => setFilter(language)}
              onKeyDown={event => onKeyDown(event, language)}
            >
              {language}
            </div>
          ))}
        </Col>
        <Col xs lg="9">
          <Accordion className="d-block d-lg-none">
            <Accordion.Header
              eventkey="0"
              style={{
                marginLeft: "-1.25rem",
              }}
            >
              Filter
            </Accordion.Header>
            <Accordion.Body eventkey="0">
              <div>
                {languages.map((language, index) => (
                  <div
                    key={index}
                    tabIndex={index + 50}
                    style={{
                      marginBottom: "5px",
                    }}
                    role="button"
                    aria-label={"Filter language " + language}
                    onClick={() => setFilter(language)}
                    onKeyDown={event => onKeyDown(event, language)}
                  >
                    {language}
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion>
          {filter === "" ? (
            ""
          ) : (
            <p
              tabIndex={languages.length + 50}
              role="button" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
              aria-label={"Unset language filter"}
              onClick={() => setFilter("")}
              onKeyDown={event => onKeyDown(event, "")}
            >
              Showing <strong>{filter}</strong> projects (click to unset)
            </p>
          )}
          {projects.map(({ name, language, description, href }, index) => (
            <Row
              style={{
                marginBottom: "40px",
                borderBottom: "1px solid #332C36",
                paddingBottom: "20px",
                display: filter === "" || language === filter ? "flex" : "none",
              }}
              key={index}
            >
              <h4
                style={{
                  margin: "0px",
                }}
              >
                <strong>{name}</strong>
              </h4>
              <h5
                style={{
                  marginBottom: "20px",
                }}
              >
                {language}
              </h5>
              <p>{description}</p>
              <OutboundLink
                href={href}
                target="_new"
                style={{
                  color: "#332C36",
                  textDecoration: "none",
                }}
              >
                Learn More
                <StaticImage
                  src="../../images/arrows/arrowdark.png"
                  height={11}
                  formats={["AUTO"]}
                  alt="Link Arrow"
                  style={{
                    margin: `8px`,
                  }}
                />
              </OutboundLink>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectList

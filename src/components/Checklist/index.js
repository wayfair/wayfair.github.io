import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// image imports for carousel
import background from "../../images/get-started/bg.png"
import ChecklistItem from "./ChecklistItem"

const checklist = [
  {
    title: "Create a GitHub Account",
    description: `Here is the first thing you need to do. Start contributing with an account on our preferred code platform.`,
    href: "https://github.com/signup",
    btntext: "Sign Up",
  },
  {
    title: "Read Our Docs",
    description: `Thing number two you should do. Learn the ins and outs of the Wayfair open source world in our docs.`,
    href: "/docs",
    btntext: "Read Docs",
  },
  {
    title: "Find a Project",
    description:
      "Use GitHub Collections to explore and choose a project you care about.",
    href: "https://github.com/collections/choosing-projects",
    btntext: "Choose Project",
  },
  {
    title: "Get Involved",
    description:
      'Check out Wayfair\'s OSS repositories, and our "contribs" organization. Post issues and PR\'s.',
    href: "https://github.com/wayfair",
    btntext: "Go To Wayfair",
  },
]

const Checklist = () => (
  <Container
    fluid
    style={{
      backgroundColor: "#E1DCF2",
      padding: "60px",
      backgroundImage: `url(${background})`,
      textAlign: "center",
    }}
  >
    <h2
      style={{
        color: "white",
      }}
    >
      Wayfair Open Source Program<br />Getting Started Checklist
    </h2>
    <Row className="justify-content-center">
      {checklist.map((item, index) => (
        <Col xs="12" md="8" lg="6" key={index}>
          <ChecklistItem {...item} />
        </Col>
      ))}
    </Row>
  </Container>
)

export default Checklist

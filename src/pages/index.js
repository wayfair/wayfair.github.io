import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row } from "react-bootstrap"

import ImageCards from "../components/ImageCards"
import Spacer from "../components/Spacer"
import Featured from "../components/Featured"
import Supported from "../components/Supported"

const IndexPage = () => (
  <Layout>
    <Seo title="Wayfair Open Source Home" />
    <Spacer />
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Wayfair Open Source</h1>
      <span style={{
        fontSize: "20pt",
      }}>Your home for collaboration and community</span>
    </div>
    <Spacer />
    <ImageCards />
    <Spacer />
    <Row className="justify-content-end">
      <Featured />
    </Row>
    <Spacer />
      <Supported />
  </Layout>
)

export default IndexPage

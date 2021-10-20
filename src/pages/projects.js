import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row } from "react-bootstrap"

import Spacer from "../components/Spacer"
import Featured from "../components/Featured"
import ProjectList from "../components/ProjectList"

const ProjectsPage = () => (
  <Layout>
    <Seo title="Featured Projects at Wayfair Open Source" />
    <Row className="justify-content-end">
      <Featured />
    </Row>
    <Spacer />
    <ProjectList />
    
    <Spacer />
  </Layout>
)

export default ProjectsPage
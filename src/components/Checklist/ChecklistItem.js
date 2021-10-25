import * as React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Link } from "gatsby"

const linkStyle = {
  paddingRight: "20px",
  paddingLeft: "20px",
  paddingTop: "7px",
  paddingBottom: "5px",
  backgroundColor: "#fff",
  borderRadius: "20px",
  display: "inline-block",
  color: "#612579",
  textDecoration: "none"
};

const ChecklistItem = ({ title, description, href, btntext }) => (
  <div
    style={{
      color: "white",
      textAlign: "center",
      display: "inline-block",
      marginBottom: "40px"
    }}
  >
    <h3>{title}</h3>
    <div className="d-block d-lg-none">{description}</div>
    {/* when large enough limit the size. */}
    <div className="d-none d-lg-block"
      style={{
        maxWidth: "400px"
      }}
    >{description}</div>
    <div>
      {href.startsWith("http") ?
        <OutboundLink href={href} style={linkStyle}>
          {btntext}
        </OutboundLink>
        : <Link to={href} style={linkStyle}>
          {btntext}
        </Link>
      }
    </div>
  </div >
)

export default ChecklistItem
import * as React from "react"

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
      <a href={href} style={{
        paddingRight: "20px",
        paddingLeft: "20px",
        paddingTop: "7px",
        paddingBottom: "5px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        display: "inline-block",
        color: "#612579",
        textDecoration: "none"
      }}>
        {btntext}
      </a>
    </div>
  </div>
)

export default ChecklistItem
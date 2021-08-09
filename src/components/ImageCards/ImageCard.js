import * as React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ImageCard = ({title, description, href, linkText, imageSrc, alt}) => (
  <Card style={{
    height: "280px",
    width: "292px",
    backgroundColor: "#612578",
    display: "inline-block"
  }}>
    <Card.Img src={imageSrc} alt={alt}/>
    <Card.ImgOverlay
      style={{
        color: "white",
        paddingTop: "116px",
        textAlign: "center"
      }}>
      <h3>
        {title}
      </h3>
      <span style={{
        fontSize: "12pt"
      }}>
        {description}
        <br />
        <Link to={href} style={{
          color: "white",
        }}>
          {linkText}
          <StaticImage
            src="../../images/arrows/arrowlight.png"
            height={11}
            formats={["AUTO"]}
            alt="Link Arrow"
            style={{
              margin: `8px`,
            }}
          />
        </Link>
      </span>
    </Card.ImgOverlay>
  </Card>
)

export default ImageCard;
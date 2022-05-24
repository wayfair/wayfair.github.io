import * as React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { withCookies } from 'react-cookie'

const CookieBanner = ({ cookies }) => {    
    const setCookies = (cookiesBool) => {
        cookies.set('gatsby-gdpr-google-analytics', cookiesBool) // so named to allow
    }

    const onKeyDown = (event, cookies) => {
        switch (event.keyCode) {
            case 13:
                setCookies(cookies);
                event.stopPropagation();
                break
            default:
                return
        }
    }

    return (typeof cookies.get('gatsby-gdpr-google-analytics') == 'undefined') ? (
        <Container
            fluid
            style={{
                background: `#612578`,
                position: `fixed`,
                bottom: 0,
                paddingTop: `15px`,
                paddingBottom:`10px`
            }}
        >
            <Row
                className="justify-content-end"
                style={{
                    textAlign: "right",
                }}
            >
                <Col xs="8"
                    className="d-inline"
                    style={{
                        textAlign: "left",
                        fontWeight: "bold",
                        color: "white"
                    }}
                >
                    We use cookies and analytics to track your usage of our site. You may opt-out by clicking "reject", or opt-in by clicking "accept".
                </Col>
                <Col xs="4"
                    className="d-inline justify-content-end"
                    style={{
                        textAlign: "right",
                    }}
                >
                    <Button
                        tabIndex={-1}
                        style={{
                            marginBottom: "5px",
                        }}
                        variant="light"
                        role="button"
                        aria-label={"Accept Cookies"}
                        onClick={() => setCookies(true)}
                        onKeyDown={event => onKeyDown(event, true)}
                    >
                        Accept
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                        tabIndex={-1}
                        style={{
                            marginBottom: "5px",
                        }}
                        variant="dark"
                        role="button"
                        aria-label={"Reject Cookies"}
                        onClick={() => setCookies(false)}
                        onKeyDown={event => onKeyDown(event, false)}
                    >
                        Reject
                    </Button>
                </Col>
            </Row>
        </Container>
    ):<></>
}

export default withCookies(CookieBanner)
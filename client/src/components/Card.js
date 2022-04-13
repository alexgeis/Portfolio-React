import React from "react";
import { Card, CardGroup, Row, Col, Button } from "react-bootstrap";
import GitHubLogo from "../Assets/images/GitHub-Mark-32px.png";

export default function WorkCard(props) {
  //props
  // img src
  // github URL
  //

  const cardStyle = {
    position: "absolute",
    top: "300px",
    maxWidth: "50%",
    maxHeight: "40%",
    background: "rgba(0,0,0,.6)",
    padding: "5px",
  };
  const buttonStyle = {
    background: "#ff1b6b",
    marginRight: "25px",
    // transition: "0.3s",
    // "&:hover": {
    //   background: "#45caff",
    //   color: "black",
    // },
  };

  return (
    <>
      {/* <CardGroup style={{ width: "40%", margin: "0 auto" }}>
        <Card>
          <Card.Img
            variant="top"
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
            style={{ backgroundSize: "cover", maxHeight: "200px" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
            style={{ backgroundSize: "cover", maxHeight: "200px" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/16:9/w_2992,h_1683,c_limit/dog-unsolicited.jpg"
            style={{ backgroundSize: "cover", maxHeight: "200px" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup> */}
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col style={{ width: "400px", margin: "30px auto" }}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text style={{ color: "black" }}>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <div style={{ margin: "0 auto" }}>
                  <a href="https://www.google.com" target="_blank">
                    <Button variant="primary" style={buttonStyle}>
                      Visit Deployed Demo
                    </Button>
                  </a>
                  <a href="https://www.github.com" target="_blank">
                    <Card.Img
                      src={GitHubLogo}
                      style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

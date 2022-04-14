import React from "react";
import { Card, CardGroup, Row, Col, Button } from "react-bootstrap";
import GitHubLogo from "../Assets/images/GitHub-Mark-32px.png";
import AllPainImg from "../Assets/images/all-pain-no-grain.png";
import QuizImg from "../Assets/images/quiz-screenshot.png";
import VibeLoungeImg from "../Assets/images/Vibe-Lounge-graph.png";
import DayPlannerImg from "../Assets/images/Work-Day-Scheduler.png";
import TextEditorImg from "../Assets/images/JATE-PWA-screenshot.png";

export default function WorkCard(props) {
  const cardStyle = {
    // position: "absolute",
    // top: "300px",
    // maxWidth: "50%",
    // maxHeight: "40%",
    // background: "rgba(0,0,0,.6)",
    // padding: "5px",
    width: "300px",
    margin: "30px 50px 280px 50px",
    maxHeight: "100px",
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
      {/* <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col style={{ width: "400px", margin: "30px auto" }}>
            <Card>
              <Card.Img variant="top" src={VibeLoungeImg} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ color: "black" }}>{props.text}</Card.Text>

                <div style={{ margin: "0 auto" }}>
                  {props.demoLink && (
                    <a href="https://www.google.com" target="_blank">
                      <Button variant="primary" style={buttonStyle}>
                        Visit Deployed Demo
                      </Button>
                    </a>
                  )}
                  <a href={props.gitLink} target="_blank">
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
      </Row> */}
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col style={cardStyle}>
          <Card>
            <Card.Img variant="top" src={VibeLoungeImg} />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>Vibe Lounge</Card.Title>
              <Card.Text style={{ color: "black" }}>
                Match your mood to your web experience - Vibe Lounge serves up
                tailored content to match your mood and tracks your emotional
                state over repeated uses.
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
        <Col style={cardStyle}>
          <Card>
            <Card.Img
              variant="top"
              src={AllPainImg}
              style={{ height: "145px" }}
            />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>
                All Pain No Grain
              </Card.Title>
              <Card.Text style={{ color: "black" }}>
                Track your fitness goals using Calendar.js. Users are able to
                log in and future development plans will include more CRUD
                operations and storage.
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
        <Col style={cardStyle}>
          <Card>
            <Card.Img
              variant="top"
              src={TextEditorImg}
              style={{ height: "165px" }}
            />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>
                Text Editor PWA
              </Card.Title>
              <Card.Text style={{ color: "black" }}>
                J.A.T.E. is a simple text editor in the browser used to saved
                code snippets to a datase. App is available as a PWA download.
              </Card.Text>
              <div style={{ margin: "0 auto" }}>
                <a
                  href="https://pwa-text-editor-ang.herokuapp.com/"
                  target="_blank"
                >
                  <Button variant="primary" style={buttonStyle}>
                    Visit Deployed Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/alexgeis/PWA-Text-Editor"
                  target="_blank"
                >
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
        <Col style={cardStyle}>
          <Card>
            <Card.Img
              variant="top"
              src={DayPlannerImg}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "400px",
                maxHeight: "140px",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>Day Planner</Card.Title>
              <Card.Text style={{ color: "black" }}>
                Schedule events for your work day with visual indicators to show
                where you are within your day. Results saved via Local Storage.
              </Card.Text>
              <div style={{ margin: "0 auto" }}>
                <a
                  href="https://alexgeis.github.io/Day-Planner/"
                  target="_blank"
                >
                  <Button variant="primary" style={buttonStyle}>
                    Visit Deployed Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/alexgeis/Day-Planner/"
                  target="_blank"
                >
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
      </Row>
    </>
  );
}

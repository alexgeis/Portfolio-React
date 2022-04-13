// import { Carousel:{Item,Caption} } from "react-bootstrap/";
import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { Card, Button } from "react-bootstrap";

// Import our list of users from users.js
// import users from "./users";

// Pass users array to the List component as a prop
export default function Home() {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "yellow";

  //   return () => {
  //     document.body.style.backgroundColor = "white";
  //   };
  // }, []);
  return (
    <>
      {/* <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </>
  );
}

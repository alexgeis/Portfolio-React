import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function WorkCarousel(props) {
  //// props
  //image src
  //title
  //subtitle
  //alt text

  // const workCardStyle = {
  //   position: "absolute",
  //   top: "150px",
  //   top: props.topPosTitle,
  //   left: "0",
  //   right: "0",
  //   paddingLeft: "20px",
  //   paddingRight: "20px",
  //   textAlign: "center",
  //   border: props.borderTitle,
  //   borderRadius: props.borderRadiusTitle,
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   width: props.widthTitle,
  //   background: props.backgroundTitle,
  // };

  // const workCardBgStyle = {
  //   display: "inline-block",
  //   position: "relative",
  //   verticalAlign: "middle",
  //   padding: "10px",
  //   marginLeft: "7px",
  //   marginRight: "7px",
  // };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

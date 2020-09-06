import React, { useRef, useEffect } from "react"

import Slider from "react-slick";
import useCurrentWidth from "./use-width";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = ({ children }) => (
  <div className="container">
    {children}
  </div>
)

const SingleColumn = (props: {
  title: string,
  styles?: object,
  children: React.ReactNode
}) => (
  <>
    <h2 className="section-heading">{props.title}</h2>
    <hr/>
    <section style={ props.styles } className="single-column">
      {props.children}
    </section>
  </>
)

const TwoColumn = (props: {
  title: string,
  styles?: object,
  children: React.ReactNode
}) => {
  const width = useCurrentWidth();
  const trackRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    mobileFirst: true,
    slidesToScroll: 1,
  };

  if (width <= 960) {
    return (
      <>
        <h2 className="section-heading">{props.title}</h2>
        <hr/>
        <Slider {...settings}>
          {props.children}
        </Slider>
      </>
    )
  } else {
    return (
      <>
        <h2 className="section-heading">{props.title}</h2>
        <hr/>
        <section style={ props.styles } className="two-column">
          {props.children}
        </section>
      </>
    );
  }

}

export { Layout, SingleColumn, TwoColumn }
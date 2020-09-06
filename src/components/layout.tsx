import React, { useState, useEffect } from "react"

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
  const [numSlides, setNumSlides] = useState(width);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    mobileFirst: true,
    slidesToScroll: 1,
  };

  return (
    <>
      <h2 className="section-heading">{props.title}</h2>
      <hr/>
      <Slider {...settings} slidesToShow={width >= 960 ? 2 : 1}>
        {props.children}
      </Slider>
    </>
  )
}

export { Layout, SingleColumn, TwoColumn }
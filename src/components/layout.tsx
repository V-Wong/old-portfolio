import React, { useRef, useEffect } from 'react';

import Slider from 'react-slick';
import useCurrentWidth from './use-width';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Layout = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

const SingleColumn = (props: {
  title: string,
  styles?: object,
  children: React.ReactNode
}) => {
  const { title, styles, children } = props;
  const width = useCurrentWidth();

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    mobileFirst: true,
    slidesToScroll: 1,
  };

  if (width <= 960) {
    return (
      <>
        <h2 className="section-heading">{title}</h2>
        <hr />
        <Slider {...settings}>
          {children}
        </Slider>
      </>

    );
  }

  return (
    <>
      <h2 className="section-heading">{title}</h2>
      <hr />
      <section style={styles} className="single-column">
        {children}
      </section>
    </>
  );

};

const TwoColumn = (props: {
  title?: string,
  styles?: object,
  children: React.ReactNode
}) => {
  const { title, styles, children } = props;
  const width = useCurrentWidth();

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    mobileFirst: true,
    slidesToScroll: 1,
  };

  if (width <= 960) {
    return (
      <>
        {title ? <h2 className="section-heading">{props.title}</h2> : null}
        {title ? <hr /> : null}
        <Slider {...settings}>
          {props.children}
        </Slider>
      </>
    );
  }
  return (
    <>
      {title ? <h2 className="section-heading">{title}</h2> : null}
      {title ? <hr /> : null}
      <section style={styles} className="two-column">
        {children}
      </section>
    </>
  );
};

export { Layout, SingleColumn, TwoColumn };

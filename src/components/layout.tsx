import React from "react"

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
}) => (
  <>
    <h2 className="section-heading">{props.title}</h2>
    <hr/>
    <section style={ props.styles } className="two-column">
      {props.children}
    </section>
  </>
)

export { Layout, SingleColumn, TwoColumn }
import React from "react"

const Layout = ({ children }) => (
  <div className="container">
    {children}
  </div>
)

const SingleColumn = (props: {
  title: string,
  children: React.ReactNode
}) => (
  <>
    <h2 className="section-heading">{props.title}</h2>
    <hr/>
    <section className="single-column">
      {props.children}
    </section>
  </>
)

const TwoColumn = (props: {
  title: string,
  children: React.ReactNode
}) => (
  <>
    <h2 className="section-heading">{props.title}</h2>
    <hr/>
    <section className="two-column">
      {props.children}
    </section>
  </>
)

export { Layout, SingleColumn, TwoColumn }
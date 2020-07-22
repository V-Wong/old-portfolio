import React from "react"

export default function Layout({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  )
}

const SingleColumn = (props: {
  title: string,
  children: React.ReactNode
}) => {
  return (
    <>
      <h2 className="section-heading">{props.title}</h2>
      <hr/>
      <section className="single-column">
        {props.children}
      </section>
    </>
  )
}

const TwoColumn = (props: {
  title: string,
  children: React.ReactNode
}) => {
  return (
    <>
      <h2 className="section-heading">{props.title}</h2>
      <hr/>
      <section className="two-column">
        {props.children}
      </section>
    </>
  )
}

export { SingleColumn, TwoColumn }
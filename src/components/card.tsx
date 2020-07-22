import React from "react"

const LongCard = (props: {
  title: string,
  subheading: string,
  link1?: {url: string, title: string},
  link2?: {url: string, title: string},
  image?: string,
  dotpoints: Array<string>,
  tags: Array<{link: string, title: string}>
}) => (
  <div className="card">
    <div className="description">
      <h3>{props.title}</h3>
      <h4 className="project-subheading">{props.subheading}</h4>
      {props.link1 ? <a className="demo-link underline" href={props.link1.url} target="_blank" rel="noopener noreferrer">{props.link1.title}</a> : null}
      {props.link2 ? <a className="repo-link underline" href={props.link2.url} target="_blank" rel="noopener noreferrer">{props.link2.title}</a> : null}
    </div>
    <div className="image-container">
      <img className="image" src={props.image}/>
    </div>
    <div className="dotpoints">
      <ul>
        {props.dotpoints.map(point => (
          <li>
            {point}
          </li>
        ))}
      </ul>
    </div>
    <div className="tags">
      {props.tags.map(tag => (   
        <span className="tag">
          <a href={tag.link} target="_blank" rel="noopener noreferrer">{tag.title}</a>
        </span>
      ))}
    </div>
  </div>
)

const ShortCard = (props: {
  title: string,
  subheading: string,
  link1?: {url: string, title: string},
  link2?: {url: string, title: string},
  image?: string,
  dotpoints: Array<string>,
  tags: Array<{link: string, title: string}>
}) => (
  <div className="card">
    <h3>{props.title}</h3>
    <h4 className="project-subheading">{props.subheading}</h4>
    {props.link1 ? <a className="demo-link underline" href={props.link1.url} target="_blank" rel="noopener noreferrer">{props.link1.title}</a> : null}
    {props.link2 ? <a className="repo-link underline" href={props.link2.url} target="_blank" rel="noopener noreferrer">{props.link2.title}</a> : null}
    {props.image ? <img className="image" src={props.image}/> : null}
    <ul>
      {props.dotpoints.map(point => (
        <li>
          {point}
        </li>
      ))}
    </ul>
    <div className="tags">
      {props.tags.map(tag => (   
        <span className="tag">
          <a href={tag.link} target="_blank" rel="noopener noreferrer">{tag.title}</a>
        </span>
      ))}
    </div>
  </div>
)

export { LongCard, ShortCard }
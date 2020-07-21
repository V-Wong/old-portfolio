import React from "react"

const LongCard = props => {
  return (
    <div class="card">
      <div class="description">
        <h3>{props.title}</h3>
        <h4 class="project-subheading">{props.subheading}</h4>
        {props.link1 ? <a class="demo-link underline" href={props.link1.url} target="_blank">{props.link1.title}</a> : null}
			  {props.link2 ? <a class="repo-link underline" href={props.link2.url} target="_blank">{props.link2.title}</a> : null}
      </div>
      <div class="image-container">
        <img class="image" src={props.image}/>
      </div>
      <div class="dotpoints">
        <ul>
          {props.dotpoints.map(point => (
            <li>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div class="tags">
        {props.tags.map(tag => (   
          <span class="tag">
            <a href={tag.link} target="_blank">{tag.title}</a>
          </span>
        ))}
      </div>
    </div>
  )
}

const ShortCard = props => {
  return (
    <div class="card">
      <h3>{props.title}</h3>
      <h4 class="project-subheading">{props.subheading}</h4>
      {props.link1 ? <a class="demo-link underline" href={props.link1.url} target="_blank">{props.link1.title}</a> : null}
			{props.link2 ? <a class="repo-link underline" href={props.link2.url} target="_blank">{props.link2.title}</a> : null}
      {props.image ? <img class="image" src={props.image}/> : null}
      <ul>
        {props.dotpoints.map(point => (
            <li>
              {point}
            </li>
        ))}
      </ul>
      <div class="tags">
        {props.tags.map(tag => (   
          <span class="tag">
            <a href={tag.link} target="_blank">{tag.title}</a>
          </span>
        ))}
      </div>
    </div>
  )
}

export { LongCard, ShortCard }
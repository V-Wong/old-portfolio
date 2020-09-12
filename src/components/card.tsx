import React from 'react';
import Image from './image';

const LongCard = (props: {
  title: string,
  subheading: string,
  link1?: {url: string, title: string},
  link2?: {url: string, title: string},
  image?: string,
  dotpoints: Array<string>,
  tags: Array<{link: string, title: string}>
}) => {
  const {
    title, subheading, link1, link2, image, dotpoints, tags,
  } = props;

  return (
    <div className={`basic-card card ${typeof window !== 'undefined' && localStorage.getItem('v-wong') === 'true' ? '' : 'dark'}`}>
      <div className="description">
        <h3>{title}</h3>
        <h4 className="project-subheading">{subheading}</h4>
        {link1
          ? <a className="project-link demo-link" href={link1.url} target="_blank" rel="noopener noreferrer">{link1.title}</a>
          : null}
        {link2
          ? <a className="project-link repo-link" href={link2.url} target="_blank" rel="noopener noreferrer">{link2.title}</a>
          : null}
      </div>
      <div className="image-container">
        <Image image={image} />
      </div>
      <hr />
      <div className="dotpoints">
        <ul>
          {dotpoints.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag">
            <a href={tag.link} target="_blank" rel="noopener noreferrer">{tag.title}</a>
          </span>
        ))}
      </div>
    </div>
  );
};

const ShortCard = (props: {
  title: string,
  subheading: string,
  link1?: {url: string, title: string},
  link2?: {url: string, title: string},
  image?: string,
  dotpoints: Array<string>,
  tags: Array<{link: string, title: string}>
}) => {
  const {
    title, subheading, link1, link2, image, dotpoints, tags,
  } = props;

  return (
    <div className={`basic-card card ${typeof window !== 'undefined' && localStorage.getItem('v-wong') === 'true' ? '' : 'dark'}`}>
      <h3>{title}</h3>
      <h4 className="project-subheading">{subheading}</h4>
      {link1 ? <a className="project-link demo-link" href={link1.url} target="_blank" rel="noopener noreferrer">{link1.title}</a> : null}
      {link2 ? <a className="project-link repo-link" href={link2.url} target="_blank" rel="noopener noreferrer">{link2.title}</a> : null}
      {image ? <Image image={image} /> : null}
      <hr />
      <ul>
        {dotpoints.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag">
            <a href={tag.link} target="_blank" rel="noopener noreferrer">{tag.title}</a>
          </span>
        ))}
      </div>
    </div>
  );
};

export { LongCard, ShortCard };

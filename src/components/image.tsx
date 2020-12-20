import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ image, className }) => {
  const data = useStaticQuery(graphql`
    query {
      cubesim: file(relativePath: { eq: "cube.webp" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      huffman: file(relativePath: { eq: "huffman.webp" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      linkup: file(relativePath: { eq: "linkup.svg" }) {
        extension
        publicURL
      },
      compcube: file(relativePath: { eq: "comp-cube.svg" }) {
        extension
        publicURL
      },
      rubiksoc: file(relativePath: { eq: "rubiksoc.webp" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `);

  if (data[image].extension === "svg") {
    return <img className={`vec ${className}`} src={data[image].publicURL}/>
  } else {
    return <Img className={`${className}`} imgStyle={{objectFit: "scale-down"}} fluid={data[image].childImageSharp.fluid}/>
  }
}

export default Image

import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './propic.jpg'

class Bio extends React.Component {
  render () {
    return (
      <div>
        <p
          style={{
            marginBottom: rhythm(1),
          }}
        >
          <img
            src={prefixLink(profilePic)}
            alt={`author ${config.authorName}`}
            style={{
              float: 'left',
              marginRight: rhythm(1/2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
          Written by <strong>{config.authorName}</strong>, a passionate software engineer interested in NLP, Big Data, and Docker. <a href="https://github.com/Yermouth">You should follow him on Github</a>
        </p>
        <p>
          This Blog in Google Blogger: <a>https://sunnylearnbackend.blogspot.hk/</a>
        </p>
      </div>
    )
  }
}

export default Bio

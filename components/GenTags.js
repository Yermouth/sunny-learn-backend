import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './propic.jpg'

class GenTags extends React.Component {
  render () {
    const { tags } = this.props
    return (
      <div>
        <p> Tags: {tags} </p>
      </div>
    )
  }
}

export default GenTags

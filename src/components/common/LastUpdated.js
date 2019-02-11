import PropTypes from 'prop-types'
import TimeAgo from 'metronome-wallet-ui-logic/src/components/TimeAgo'
import styled from 'styled-components'
import React from 'react'

export const Label = styled.div`
  transition: color 0.5s;
  font-size: 1.3rem;
  color: ${p =>
    p.diff > 60
      ? p.theme.colors.danger
      : p.diff > 15
      ? p.theme.colors.warning
      : p.theme.colors.weak};
`

function defaultRender({ diff, timeAgo }) {
  return <Label diff={diff}>Last updated {timeAgo}</Label>
}

defaultRender.propTypes = {
  timeAgo: PropTypes.string,
  diff: PropTypes.number
}

export default function LastUpdated({ timestamp, render }) {
  return (
    <TimeAgo
      updateInterval={1000}
      timestamp={timestamp}
      render={typeof render === 'function' ? render : defaultRender}
    />
  )
}

LastUpdated.propTypes = {
  timestamp: PropTypes.number,
  render: PropTypes.func
}

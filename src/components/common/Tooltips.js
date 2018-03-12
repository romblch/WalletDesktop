import { default as styled, injectGlobal } from 'styled-components'
import ReactHintFactory from 'react-hint'
import React from 'react'
import 'react-hint/css/index.css'

const ReactHint = ReactHintFactory(React)

injectGlobal`
  .react-hint {
    margin-top: -3px;
    &:after {
      border-top-color: #323232 !important;
    }
  }
`

const Container = styled.div`
  background: ${p => p.theme.colors.dark};
  font-size: 1.3rem;
  padding: 8px 12px;
  border-radius: 4px;
`

const onRenderContent = (target, content) => {
  return <Container>{content}</Container>
}

const Tooltips = () => (
  <ReactHint events delay={100} onRenderContent={onRenderContent} />
)

export default Tooltips

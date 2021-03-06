import React from 'react'
import MarkdownRender, { compiler } from 'markdown-to-jsx'
import LowlightRenderer from './LowlightRenderer'
import Wrapper from './Wrapper'

const Markdown = ({
  source,
  languages = ['javascript', 'shell', 'json', 'css'],
  theme = 'light'
}) => {
  const content = (
    <MarkdownRender
      options={{
        overrides: {
          code: {
            component: LowlightRenderer(languages)
          }
        }
      }}
    >
      {source}
    </MarkdownRender>
  )

  return (
    <Wrapper className="smackdown markdown" theme={theme}>
      {content}
    </Wrapper>
  )
}

export default Markdown

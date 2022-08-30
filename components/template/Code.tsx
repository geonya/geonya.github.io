import { Container } from '@mantine/core'
import { Prism } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
interface CodeProps {
  children: string
  className: string
}
const Code = ({ children, className }: CodeProps) => {
  const language = className.split('-')[1] || 'plain'
  const parsedChildren = children.slice(0, children.length - 1)

  return (
    <Container>
      <Prism language={language} style={dark}>
        {parsedChildren}
      </Prism>
    </Container>
  )
}

export default Code

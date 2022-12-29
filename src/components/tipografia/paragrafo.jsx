import styled from 'styled-components'

const StyledParagrafo = styled.p`
  display: flex;
  color: ${(props) => props.theme.primary};
`

export default function Paragrafo(props) {
  return <StyledParagrafo>{props.children}</StyledParagrafo>
}

import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.primary};
`

export default function TextH1(props) {
  return <StyledTitle>{props.children}</StyledTitle>
}

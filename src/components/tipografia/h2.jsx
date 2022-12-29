import styled from 'styled-components'

const StyledSubTitle = styled.h2`
  display: flex;
  margin-left: 20px;
  color: ${(props) => props.theme.primary};
`
export default function TextH2(props) {
  return <StyledSubTitle>{props.children}</StyledSubTitle>
}

import styled from 'styled-components'

const StyledSubTitle = styled.h3`
  display: flex;
  margin-left: 20px;
  color: ${(props) => props.theme.primary};
`
export default function SubTitle(props) {
  return <StyledSubTitle>{props.children}</StyledSubTitle>
}

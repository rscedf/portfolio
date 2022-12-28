import styled from 'styled-components'

const StyledFlex = styled.div`
  background-color: #b3ff00;
  display: flex;
  padding: 20px;
  gap: 20px 20px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`
export default function Container({ children }) {
  return <StyledFlex>{children}</StyledFlex>
}

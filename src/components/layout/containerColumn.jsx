import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 20px;
  width: 100%;
  margin-left: 20px;
`
export default function ContainerColumn({ children }) {
  return <StyledFlex>{children}</StyledFlex>
}

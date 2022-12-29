import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 20px;
  width: 100%;
`
export default function ContainerColumn({ children }) {
  return <StyledFlex>{children}</StyledFlex>
}

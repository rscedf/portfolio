import styled from 'styled-components'

const WIDTH_BREAK = '750px'

const StyledFlex = styled.div`
  //background-color: #b3ff00;
  display: flex;
  padding: 20px;
  gap: 20px 20px;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${WIDTH_BREAK}) {
    flex-direction: column;
    gap: 5px;
    padding: 5px;
  }
`
export default function Container({ children }) {
  return <StyledFlex>{children}</StyledFlex>
}

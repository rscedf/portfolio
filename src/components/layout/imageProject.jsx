import styled from 'styled-components'

const WIDTH_BREAK = '750px'

const StyledFlex = styled.div`
  //background-color: orange;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px 20px;
  align-items: center;
  width: auto;
`
const StyledImageProject = styled.div`
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 50px 20px;
  margin-bottom: 120px;

  @media (max-width: ${WIDTH_BREAK}) {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 5px;
  }
`

export default function ImageProject({ children }) {
  return (
    <StyledFlex>
      <StyledImageProject>{children}</StyledImageProject>
    </StyledFlex>
  )
}

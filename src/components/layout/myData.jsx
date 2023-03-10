import styled from 'styled-components'

const StyledFlex = styled.div`
  //background-color: pink;
  display: flex;
  padding: 20px;
  gap: 20px 20px;
  align-items: center;
  width: auto;
`
const StyledImageProject = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px 10px 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`
export default function MyData({ children }) {
  return (
    <StyledFlex>
      <StyledImageProject>{children}</StyledImageProject>
    </StyledFlex>
  )
}

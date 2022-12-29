import styled from 'styled-components'

const StyledFlex = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px 20px;
  align-items: center;
  width: 50%;
`
const StyledImageProject = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px 10px 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`

export default function ImageProject({ children }) {
  return (
    <StyledFlex>
      <StyledImageProject>{children}</StyledImageProject>
    </StyledFlex>
  )
}

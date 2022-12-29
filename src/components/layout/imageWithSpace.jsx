import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px 10px;
  align-items: center;
`

const StyledImage = styled.div`
  background-image: url('/rafael.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 10%;
  height: 20vh;
  padding: 10px;
  border-radius: 80px;
`

const StyledContainer = styled.div`
  padding: 5px;
  gap: 5px 5px;
`

export default function ImageWithSpace({ children }) {
  return (
    <StyledFlex>
      <StyledImage />
      <StyledContainer>{children}</StyledContainer>
    </StyledFlex>
  )
}

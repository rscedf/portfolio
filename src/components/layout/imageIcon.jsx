import styled from 'styled-components'

const WIDTH_BREAK = '1000px'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px 20px;
  align-items: center;
`
const StyledImageIcon = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 30%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px 10px 20px;
  justify-self: end;

  @media (max-width: ${WIDTH_BREAK}) {
    gap: 15px;
  }
`

export default function ImageIcon({ children }) {
  return (
    <StyledFlex>
      <StyledImageIcon>{children}</StyledImageIcon>
    </StyledFlex>
  )
}

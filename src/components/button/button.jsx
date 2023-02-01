import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  label {
    font-weight: bold;
  }
  button {
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
    font-weight: bold;
    border: 0;
    padding: 15px;
    border-radius: 5px;
    ${(props) => !props.disabled && 'cursor: pointer;'}

    :hover {
      background-color: ${(props) => props.theme.primaryHover};
    }

    :disabled {
      background-color: ${(props) => props.theme.disabled};
    }
  }
`
export default function Button() {
  return (
    <ButtonContainer>
      <label>Enviar Mensagem</label>,<button>Enviar</button>
    </ButtonContainer>
  )
}

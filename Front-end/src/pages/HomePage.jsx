import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const Button = styled.button`
  padding: 15px 20px;
  background-color: black;
  color: white;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  &:hover {
    background-color: red;
    cursor: pointer;
    transition: 0.3s;
  }
`

function HomePage() {
  const navigate = useNavigate()
  const showProfil12 = () => {
    navigate('/profil/12')
  }

  const showProfil18 = () => {
    navigate('/profil/18')
  }
  return (
    <>
      <h1>Accueil</h1>
      <ButtonContainer>
        <Button onClick={showProfil12}>Profil 12</Button>
        <Button onClick={showProfil18}>Profil 18</Button>
      </ButtonContainer>
    </>
  )
}

export { HomePage }

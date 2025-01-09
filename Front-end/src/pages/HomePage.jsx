import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`;





function HomePage() {
  const navigate = useNavigate();
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
        <button onClick={showProfil12}>Profil 12</button>
        <button onClick={showProfil18}>Profil 18</button>
      </ButtonContainer>
    </>
  );
}

export { HomePage };

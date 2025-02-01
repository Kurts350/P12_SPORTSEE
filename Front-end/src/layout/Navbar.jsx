import styled from "styled-components"
import logo from "../assets/logo.png"
import { NavLink, useParams} from "react-router-dom"
import PropTypes from "prop-types";


const NavBarContainer = styled.nav`
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  ;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`

const Logo = styled.img`
  width: 180px;
`
const LogoContainer = styled.div`
    margin: 20px;`

const NavLinkWhite = styled(NavLink)`
  color: white;
  font-size: 1.5em;
  text-decoration: none;
`
const NavLinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;`

function Navbar() {
  const { userId } = useParams()
  const activeUserId = userId || '12'
  return (
    <div>
      <NavBarContainer>
        <LogoContainer>
          <Logo src={logo} alt="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLinkWhite to="/">Accueil</NavLinkWhite>
          <NavLinkWhite to={`/profil/${activeUserId}`}>Profil</NavLinkWhite>
          <NavLinkWhite to="/reglage">Réglage</NavLinkWhite>
          <NavLinkWhite to="/communaute">Communauté</NavLinkWhite>
        </NavLinkContainer>
      </NavBarContainer>
    </div>
  )
}

Navbar.propTypes = {
  userId: PropTypes.string,
};

export { Navbar }

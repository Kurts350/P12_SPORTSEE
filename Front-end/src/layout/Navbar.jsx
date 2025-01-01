import styled from "styled-components"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"

const NavBarContainer = styled.nav`
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  ;
  padding: 0;
  margin: 0;
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
  return (
    <div>
      <NavBarContainer>
        <LogoContainer>
          <Logo src={logo} alt="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLinkWhite to="/">Accueil</NavLinkWhite>
          <NavLinkWhite to="/profil">Profil</NavLinkWhite>
          <NavLinkWhite to="/reglage">Réglage</NavLinkWhite>
          <NavLinkWhite to="/communaute">Communauté</NavLinkWhite>
        </NavLinkContainer>
      </NavBarContainer>
    </div>
  )
}

export { Navbar }

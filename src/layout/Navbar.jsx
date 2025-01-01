import styled from 'styled-components'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const NavBarContainer = styled.nav`
background-color:rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;`


const Logo = styled.img`
width: 150px;`

const NavLinkWhite = styled(NavLink)`
color: white;`

function Navbar() {
  return (
      <NavBarContainer>
        <Logo src={logo} alt="logo" />
        <NavLinkWhite to='/'>Accueil</NavLinkWhite>
        <NavLinkWhite to='/profil'>Profil</NavLinkWhite>
        <NavLinkWhite to='/reglage'>Réglage</NavLinkWhite>
        <NavLinkWhite to='/communaute'>Communauté</NavLinkWhite>
      </NavBarContainer>
  )
}

export  {Navbar}

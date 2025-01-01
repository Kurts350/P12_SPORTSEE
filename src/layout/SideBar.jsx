import iconGym from '../assets/icon-gym.png'
import iconBike from '../assets/icon-bike.png'
import iconYoga from '../assets/icon-yoga.png'
import iconSwim from '../assets/icon-swim.png'
import styled from 'styled-components'

const SideBarContainer = styled.aside`
display: flex;
flex-direction: column;
background-color: rgb(0, 0, 0);
width: 100px;
height: 100vh;
align-items: center;
justify-content: center;
gap: 50px;
`
const SideBarIcon = styled.img`
width: 50px;`

const SideBarText = styled.p`
color: white;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`
const IconContainer = styled.div`
display: flex;
flex-direction: column;
gap : 20px;

`

function SideBar() {
  return (
    <>
      <SideBarContainer>
              <IconContainer>
                <SideBarIcon src={iconYoga} alt="icon-yoga" />
                <SideBarIcon src={iconSwim} alt="icon-swim" />
                <SideBarIcon src={iconBike} alt="icon-bike" />
                <SideBarIcon src={iconGym} alt="icon-gym" />
              </IconContainer>
              <SideBarText>Copyright, SportSee 2020</SideBarText>
      </SideBarContainer>
    </>
  )

}

export { SideBar }

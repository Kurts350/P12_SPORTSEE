import styled from "styled-components"

const FirstName = styled.span`
color: red;`


function Profil() {
  return (
    <div>
      <h1>Bonjour <FirstName>Alex</FirstName></h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏 </p>
    </div>
  )
}

export  {Profil}

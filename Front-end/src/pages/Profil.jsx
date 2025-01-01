import styled from "styled-components"
import fatIcon from "../assets/icon/fat-icon.png"
import proteinIcon from "../assets/icon/protein-icon.png"
import carbsIcon from "../assets/icon/carbs-icon.png"
import caloriesIcon from "../assets/icon/calories-icon.png"

const FirstName = styled.span`
  color: red;
`
const ProfilContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 70%;
  border: 3px solid black;
`
const DietDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 30%;
  border: 3px solid black;
`
const DailyActivity = styled.div`
  border: 3px solid blue;
  height: 200px;
  width: 100%;
`
const ActivityData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 3px solid black;
  padding: 20px;
  height: 200px;
  box-sizing: border-box;
  width: 100%;
`
const ActivityItem = styled.div`
  border: 3px solid red;
  width: 30%;
`

const DataItem = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  border: 3px solid grey;
  align-items: center;
`
const DataIcon = styled.img`
  width: 60px;
  height: 60px;
`
const DescriptionItem = styled.div``

const DescritionTitle = styled.h3`
margin: 0;`

const DescritionContent = styled.p`
margin: 0;`

function Profil() {
  return (
    <div>
      <h1>
        Bonjour <FirstName>Alex</FirstName>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏 </p>

      <ProfilContainer>
        <TrainingContainer>
          <DailyActivity></DailyActivity>
          <ActivityData>
            <ActivityItem></ActivityItem>
            <ActivityItem></ActivityItem>
            <ActivityItem></ActivityItem>
          </ActivityData>
        </TrainingContainer>
        <DietDataContainer>
          <DataItem>
            <DataIcon src={caloriesIcon} alt="calories-icon" />
            <DescriptionItem>
              <DescritionTitle>1 500 kcal</DescritionTitle>
              <DescritionContent>Calories</DescritionContent>
            </DescriptionItem>
          </DataItem>
          <DataItem>
            <DataIcon src={proteinIcon} alt="protein-icon" />
            <DescriptionItem>
              <DescritionTitle>200g</DescritionTitle>
              <DescritionContent>Proteines</DescritionContent>
            </DescriptionItem>
          </DataItem>
          <DataItem>
            <DataIcon src={carbsIcon} alt="carbs-icon" />
            <DescriptionItem>
              <DescritionTitle>300g</DescritionTitle>
              <DescritionContent>Glucides</DescritionContent>
            </DescriptionItem>
          </DataItem>
          <DataItem>
            <DataIcon src={fatIcon} alt="fat-icon" />
            <DescriptionItem>
              <DescritionTitle>80g</DescritionTitle>
              <DescritionContent>Lipides</DescritionContent>
            </DescriptionItem>
          </DataItem>
        </DietDataContainer>
      </ProfilContainer>
    </div>
  )
}

export { Profil }

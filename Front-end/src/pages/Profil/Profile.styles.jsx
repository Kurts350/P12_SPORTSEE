import styled from "styled-components"

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
`
const DietDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 30%;
`
const DailyActivity = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`
const ActivityData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  height: 200px;
  box-sizing: border-box;
  width: 100%;
`
const ActivityItem = styled.div`
  position: relative;
  width: 260px;
`

const DataItem = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  background: #fbfbfb;
  padding: 20px;
`
const DataIcon = styled.img`
  width: 60px;
  height: 60px;
`
const DescriptionItem = styled.div``

const DescritionTitle = styled.h3`
  margin: 0;
`

const DescritionContent = styled.p`
  margin: 0;
`

export {
  FirstName,
  ProfilContainer,
  TrainingContainer,
  DietDataContainer,
  DailyActivity,
  ActivityData,
  ActivityItem,
  DataItem,
  DataIcon,
  DescriptionItem,
  DescritionTitle,
  DescritionContent,
}

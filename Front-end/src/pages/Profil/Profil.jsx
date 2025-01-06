import { useState, useEffect, useCallback } from "react"
import { getUserData } from "../../services/userService"
import {
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
} from "./Profile.styles"
import RadarChartData from "../../components/RadarChartData"

import caloriesIcon from "../../assets/icon/calories-icon.png"
import proteinIcon from "../../assets/icon/protein-icon.png"
import carbsIcon from "../../assets/icon/carbs-icon.png"
import fatIcon from "../../assets/icon/fat-icon.png"
import AverageSessionChart from "../../components/AverageSessionCharts/AverageSessionChart"

function Profil() {
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchUserData = useCallback(async () => {
    try {
      const data = await getUserData()
      setUserData(data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  if (isLoading) return <div>Chargement...</div>
  if (!userData) return <div>Erreur de chargement</div>

  return (
    <div>
      <h1>
        Bonjour <FirstName>{userData.userInfos.firstName}</FirstName>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏 </p>

      <ProfilContainer>
        <TrainingContainer>
          <DailyActivity></DailyActivity>
          <ActivityData>
            <ActivityItem>
              <AverageSessionChart />
            </ActivityItem>
            <ActivityItem>
              <RadarChartData />
            </ActivityItem>
            <ActivityItem></ActivityItem>
          </ActivityData>
        </TrainingContainer>
        <DietDataContainer>
          <DataItem>
            <DataIcon src={caloriesIcon} alt="calories-icon" />
            <DescriptionItem>
              <DescritionTitle>{userData.keyData.calorieCount}kCal</DescritionTitle>
              <DescritionContent>Calories</DescritionContent>
            </DescriptionItem>
          </DataItem>
          <DataItem>
            <DataIcon src={proteinIcon} alt="protein-icon" />
            <DescriptionItem>
              <DescritionTitle>{userData.keyData.proteinCount}g</DescritionTitle>
              <DescritionContent>Proteines</DescritionContent>
            </DescriptionItem>
          </DataItem>
          <DataItem>
            <DataIcon src={carbsIcon} alt="carbs-icon" />
            <DescriptionItem>
              <DescritionTitle>{userData.keyData.carbohydrateCount}g</DescritionTitle>
              <DescritionContent>Glucides</DescritionContent>
            </DescriptionItem>
          </DataItem>
          <DataItem>
            <DataIcon src={fatIcon} alt="fat-icon" />
            <DescriptionItem>
              <DescritionTitle>{userData.keyData.lipidCount}g</DescritionTitle>
              <DescritionContent>Lipides</DescritionContent>
            </DescriptionItem>
          </DataItem>
        </DietDataContainer>
      </ProfilContainer>
    </div>
  )
}

export { Profil }

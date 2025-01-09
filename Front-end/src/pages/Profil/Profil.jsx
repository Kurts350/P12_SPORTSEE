import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom";
import { getUserData, getActivityData, getAverageSessionData, getPerformanceData } from "../../services/userService"
import {
  FirstName,
  ProfilContainer,
  MainContainer,
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
import PerformancesChart from "../../components/PerformancesChart/PerformancesChart"
import caloriesIcon from "../../assets/icon/calories-icon.png"
import proteinIcon from "../../assets/icon/protein-icon.png"
import carbsIcon from "../../assets/icon/carbs-icon.png"
import fatIcon from "../../assets/icon/fat-icon.png"
import AverageSessionChart from "../../components/AverageSessionCharts/AverageSessionChart"
import ScoreChart from "../../components/ScoreChart/ScoreChart"
import ActivityChart from "../../components/ActivityChart/ActivityChart"

function Profil() {
  const { userId } = useParams()
  const [userData, setUserData] = useState(null)
  const [activityData, setActivityData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [averageSessionData, setAverageSessionData] = useState(null)
  const [performanceData, setPerformanceData] = useState(null)
  const [scoreData, setScoreData] = useState(null)
  

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const [user, activity, performance, averageSession] = await Promise.all([
        getUserData(userId),
        getActivityData(userId),
        getPerformanceData(userId),
        getAverageSessionData(userId),

      ])
      setUserData(user)
      setActivityData(activity)
      setPerformanceData(performance)
      setAverageSessionData(averageSession)
      setScoreData(user.score || user.todayScore)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading) return <div>Chargement...</div>
  if (error) return <div>Erreur : {error}</div>
  if (!userData) return <div>Aucune donnée disponible</div>

  return (
    <ProfilContainer>
      <h1>
        Bonjour <FirstName>{userData.userInfos.firstName}</FirstName>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏 </p>
      <MainContainer>
        <TrainingContainer>
          <DailyActivity>
            <ActivityChart data={activityData} />
          </DailyActivity>
          <ActivityData>
            <ActivityItem>
              <AverageSessionChart data={averageSessionData} />
            </ActivityItem>
            <ActivityItem>
              <PerformancesChart data={performanceData}/>
            </ActivityItem>
            <ActivityItem>
              <ScoreChart data={scoreData}/>
            </ActivityItem>
          </ActivityData>
        </TrainingContainer>
        <DietDataContainer>
          <DataItem>
            <DataIcon src={caloriesIcon} alt="calories-icon" />
            <DescriptionItem>
              <DescritionTitle>{userData.keyData.calorieCount.toLocaleString('en-US')}kCal</DescritionTitle>
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
      </MainContainer>
    </ProfilContainer>
  )
}

export { Profil }

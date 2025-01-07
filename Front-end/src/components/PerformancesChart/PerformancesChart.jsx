import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"
import data from "../../mocked-data/user-performances-data.json"

const kindTranslations = {
  1: "Cardio",
  2: "Énergie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
}

const transformedData = data.data.data.map((item) => ({
  ...item,
  kind: kindTranslations[item.kind],
}))

const PerformancesChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart 
        style={{ backgroundColor: "#282D30" }} 
        outerRadius="50%" 
        data={transformedData.reverse()}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis 
          tick={{ fill: "#fff", fontSize: 12 }} 
          dataKey="kind" 
          fontSize={10} 
          fontWeight={10} 
        />
        <Radar 
          backGround="black" 
          dataKey="value" 
          stroke="red" 
          fill="red" 
          fillOpacity={0.6} 
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default PerformancesChart

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { CustomTooltip } from "./CustomToolTip"
import activityData from "../../mocked-data/user-activity-data.json"
import { ActivityTitle } from "./ActivityChart.styles"

const data = [activityData]

const transformedData = data[0].data.sessions.map((item) => ({
  day: item.day.slice(9),
  kilogram: item.kilogram,
  calories: item.calories,
}))

const ActivityChart = () => {
  const minKg = Math.min(...transformedData.map((data) => data.kilogram))
  const maxKg = Math.max(...transformedData.map((data) => data.kilogram))

  return (
    <>
      <ActivityTitle>Activités quotidienne</ActivityTitle>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={transformedData}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" dy={10} tickLine={false} />
          <YAxis yAxisId="right" orientation="right" domain={[minKg - 1, maxKg + 1]} tickCount={4} />
          <YAxis yAxisId="left" orientation="left" hide={true} domain={[0, 500]} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(196, 196, 196, 0.5)" }} />
          <Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
          <Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
          <Legend verticalAlign="top" align="right" height={50} iconType="circle" iconSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default ActivityChart

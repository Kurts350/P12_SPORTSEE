import { LineChart, Line, XAxis, Tooltip, YAxis, ResponsiveContainer } from "recharts"
import { ChartTitle } from "./AverageSessionCharts.styles"
import { CustomTooltip, CustomCursor } from "./ChartInteractions"
import userAverageSessionData from "../../mocked-data/user-average-session-data.json"

const data = [ userAverageSessionData ]

const weekDay = ["L", "M", "M", "J", "V", "S", "D"]

const transformedData = data[0].data.sessions.map((item, index) => ({
  name: weekDay[index],
  day: item.sessionLength,
}))

const AverageSessionChart = () => {
  return (
    <>
      <ChartTitle>
        Durée moyenne des <br /> sessions
      </ChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={transformedData} style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            tick={{ fill: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }} 
            axisLine={false} 
            tickLine={false} 
          />
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={<CustomCursor />}
          />
          <Line 
            type="natural" 
            dataKey="day" 
            stroke="url(#lineGradient)" 
            strokeWidth={2}  
            dot={false}
            activeDot={{ r: 4, fill: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default AverageSessionChart

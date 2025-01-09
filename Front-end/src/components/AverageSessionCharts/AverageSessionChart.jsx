import { LineChart, Line, XAxis, Tooltip, YAxis, ResponsiveContainer } from "recharts"
import PropTypes from 'prop-types'
import { ChartTitle } from "./AverageSessionCharts.styles"
import { CustomTooltip, CustomCursor } from "./ChartInteractions"

function AverageSessionChart({ data }) {
  if (!data) return <div>Chargement...</div>

  const dayMap = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
  }

  const transformedData = data.sessions.map(session => ({
    day: dayMap[session.day],
    sessionLength: session.sessionLength
  }))

  return (
    <>
      <ChartTitle>
        Durée moyenne des <br /> sessions
      </ChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={transformedData} style={{ backgroundColor: "#FF0000", borderRadius: "10px" }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="day" 
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
            dataKey="sessionLength" 
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
AverageSessionChart.propTypes = {
  data: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired
}

export default AverageSessionChart

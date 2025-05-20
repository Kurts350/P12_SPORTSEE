import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { ScoreTitle } from './ScoreChart.styles'
import PropTypes from 'prop-types'

function ScoreChart({ data }) {
  if (!data) return <div>Chargement...</div>

  const score = data * 100
  const dataArray = [
    { name: 'circle', value: 100, fill: '#FBFBFB' },
    { name: 'score', value: score, fill: '#FF0000' },
  ]
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScoreTitle>Score</ScoreTitle>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="80%"
        startAngle={90}
        barSize={10}
        data={dataArray}
        style={{ backgroundColor: '##FFFFFF', borderRadius: '10px' }}
      >
        <RadialBar
          clockWise={false}
          dataKey="value"
          cornerRadius={10}
          label={{
            content: () => (
              <text x="50%" y="50%" textAnchor="middle">
                <tspan x="50%" dy="-10" fontSize="26" fontWeight="700">
                  {score}%
                </tspan>
                <tspan x="50%" dy="25" fontSize="16" fill="#74798C">
                  de votre
                </tspan>
                <tspan x="50%" dy="25" fontSize="16" fill="#74798C">
                  objectif
                </tspan>
              </text>
            ),
            position: 'center',
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}
ScoreChart.propTypes = {
  data: PropTypes.number.isRequired,
}

export default ScoreChart

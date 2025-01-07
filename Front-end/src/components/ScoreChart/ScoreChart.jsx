import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import userMainData from '../../mocked-data/user-main-data.json';

const data = [userMainData]

const score = data[0].data.todayScore * 100
const dataArray = [
  { name: 'circle', value: 100, fill: '#FBFBFB' },
  { name: 'score', value: score, fill: '#FF0000' }
]

const ScoreChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart 
        cx="50%" 
        cy="50%" 
        innerRadius="70%" 
        outerRadius="80%" 
        startAngle={90}
        barSize={10} 
        data={dataArray}
      >
        <RadialBar
          clockWise={false}
          dataKey="value"
          cornerRadius={10}
          label={{
            content: () => (
              <text x="50%" y="50%" textAnchor="middle">
                <tspan x="50%" dy="-10" fontSize="26" fontWeight="700">{score}%</tspan>
                <tspan x="50%" dy="25" fontSize="16" fill="#74798C">de votre</tspan>
                <tspan x="50%" dy="25" fontSize="16" fill="#74798C">objectif</tspan>
              </text>
            ),
            position: 'center'
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default ScoreChart;

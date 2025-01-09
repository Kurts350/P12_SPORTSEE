import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { CustomTooltip } from "./CustomToolTip";
import { ActivityTitle } from "./ActivityChart.styles";

function ActivityChart({ data }) {
  if (!data) return <div>Chargement...</div>;
  const transformedData = data.sessions.map((item) => ({
    day: new Date(item.day).getDate(),
    kilogram: item.kilogram,
    calories: item.calories,
  }));
  
  const minKg = Math.min(...transformedData.map((item) => item.kilogram));
  const maxKg = Math.max(...transformedData.map((item) => item.kilogram));
  
  const renderLegendText = (value, entry) => {
    const { color } = entry;
    return <span style={{ color: value === 'Calories brûlées (kCal)' ? '#000' : color }}>{value}</span>;
  };
  return (
    <>
      <ActivityTitle>Activités quotidienne</ActivityTitle>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={transformedData}
          style={{ backgroundColor: "#FBFBFB", borderRadius: "10px" }}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 30
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            dy={10}
            tickLine={false}
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[minKg - 1, maxKg + 1]}
            tickCount={4}
            tickLine={false}
            axisLine=""
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            hide={true}
            domain={[0, 500]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Legend
            verticalAlign="top"
            align="right"
            height={50}
            iconType="circle"
            iconSize={8}
            formatter={renderLegendText}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

ActivityChart.propTypes = {
  data: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default ActivityChart;

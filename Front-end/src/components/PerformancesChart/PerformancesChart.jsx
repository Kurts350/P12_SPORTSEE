import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

function PerformancesChart({ data }) {
  const kindTranslations = {
    1: "Cardio",
    2: "Énergie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const transformedData = data.data.map((item) => ({
    ...item,
    kind: kindTranslations[item.kind],
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        style={{ backgroundColor: "#282D30", borderRadius: "10px" }}
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
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
PerformancesChart.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default PerformancesChart;

import PropTypes from "prop-types";



const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#E60000',
        padding: '15px',
        color: 'white',
        fontSize: '12px'
      }}>
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
};

export  {CustomTooltip};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
import PropTypes from 'prop-types'

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          padding: '5px 10px',
          fontSize: '0.8rem',
        }}
      >
        <p>{payload[0].value} min</p>
      </div>
    )
  }
  return null
}
export const CustomCursor = ({ points }) => {
  if (points.length > 0) {
    const { x } = points[0]
    return <rect x={x} y={0} width="100%" height="100%" fill="black" fillOpacity={0.1} />
  }
  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
CustomCursor.propTypes = {
  points: PropTypes.array,
}

import PropTypes from 'prop-types'


export function Main({ children }) {
  return <div> {children} </div>;
}

Main.propTypes = {
  children: PropTypes.node,
};
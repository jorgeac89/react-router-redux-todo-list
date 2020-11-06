import React from 'react';
import PropTypes from 'prop-types';

class IfNot extends React.Component {
  render() {
    const { check, children } = this.props;
    return !check ? children : null;
  }
}

IfNot.propTypes = {
  check: PropTypes.bool,
  children: PropTypes.node,
};

IfNot.defaultProps = {
  check: true,
  children: null,
};

export default IfNot;

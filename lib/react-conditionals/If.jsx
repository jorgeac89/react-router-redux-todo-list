import React from 'react';
import PropTypes from 'prop-types';

class If extends React.Component {
  render() {
    const { check, children } = this.props;
    return check ? children : null;
  }
}

If.propTypes = {
  check: PropTypes.bool,
  children: PropTypes.node,
};

If.defaultProps = {
  check: false,
  children: null,
};

export default If;

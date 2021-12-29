import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const Topnav = ({
  title
}) => {
  return (
    <div className="Topnav-wrapper">
      <div className="Topnav-title">
        {title}
      </div>
    </div>
  );
};

Topnav.propTypes = {
  title: PropTypes.string.isRequired
};

export default Topnav;

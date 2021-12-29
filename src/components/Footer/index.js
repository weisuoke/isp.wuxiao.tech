import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const Footer = ({isp}) => {
  return (
    <div className="footer">
      <a href="https://beian.miit.gov.cn/">
        {isp}
      </a>
    </div>
  );
};

Footer.propTypes = {
  isp: PropTypes.string.isRequired
};

export default Footer;
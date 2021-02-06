import React from 'react';
import { Typography } from '@material-ui/core';

const Logo = props => {
  // return <img alt="Logo" src="/static/logo.svg" {...props} />;
  return (
    <Typography variant="h2" style={{ color: '#fff' }} {...props}>
      J Admin
    </Typography>
  );
};

export default Logo;

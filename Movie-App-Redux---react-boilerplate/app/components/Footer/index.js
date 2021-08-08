import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Logo from '../Logo';

function Footer() {
  return (
    <Box p={6}>
      <Box display="flex" justifyContent="center" mb={2}>
        <Logo />
      </Box>
      <Box color="#fff" textAlign="center">
        <Typography color="inherit" variant="h5">
          Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.
        </Typography>
      </Box>
    </Box>
  );
}

Footer.propTypes = {};

export default Footer;

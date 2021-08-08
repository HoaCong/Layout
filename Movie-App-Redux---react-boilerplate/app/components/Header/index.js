import { AppBar, Box, Button, Toolbar } from '@material-ui/core';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Header() {
  return (
    <Box bgcolor="#000">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Box flexGrow={1}>
            <Link to="/" variant="h6">
              <Logo />
            </Link>
          </Box>
          <Button color="secondary" variant="outlined" to="/login">
            Đăng nhập
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes = {};

export default memo(Header);

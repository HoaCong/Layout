import { Box, Typography } from '@material-ui/core';
import React, { memo } from 'react';

function Introduce() {
  return (
    <Box py={5} maxWidth="700px" color="#fff" m="auto" textAlign="justify">
      <Typography variant="h3" color="inherit" gutterBottom align="center">
        <b>Phim truyền hình chính kịch</b>
      </Typography>
      <Typography variant="h6" color="inherit">
        Có những câu chuyện hấp dẫn đến nỗi cần nhiều hơn một bộ phim mới có thể
        kể trọn. Loạt phim tội phạm, phim y khoa, khoa học viễn tưởng và rất
        nhiều thể loại khác – các bộ phim truyền hình này sẽ khiến bạn dán chặt
        mắt vào màn hình.
      </Typography>
    </Box>
  );
}

Introduce.propTypes = {};

export default memo(Introduce);

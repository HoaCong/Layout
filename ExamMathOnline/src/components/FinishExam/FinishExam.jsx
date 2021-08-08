import { Box, Typography } from "@material-ui/core";
import React from "react";
function FinishExam(props) {
  return (
    <Box>
      <Box mt={2} mb={5}>
        <Typography variant="h5" align="center">
          <strong>Kết quả bạn đạt được</strong>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="150px"
          height="150px"
          bgcolor="#3a4bcd"
          borderRadius={15}
          color="#fff"
        >
          <Typography variant="body2">Số câu đúng</Typography>
          <Box fontSize={35}>
            {props.answer}/{props.listQuestion.length}
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="150px"
          height="150px"
          bgcolor="#3a4bcd"
          borderRadius={15}
          color="#fff"
        >
          <Typography variant="body2">Điểm số</Typography>
          <Box fontSize={35}>
            {props.answer}/{props.listQuestion.length}
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="150px"
          height="150px"
          bgcolor="#3a4bcd"
          borderRadius={15}
          color="#fff"
        >
          <Typography variant="body2">Thời gian làm</Typography>
          <Box fontSize={35}> {props.time}</Box>
        </Box>
      </Box>
      <Box mt={3} textAlign="center">
        {props.answer === props.listQuestion.length ? (
          <Typography variant="h5" color="primary">
            Chúc mừng bạn đã hoàn thành tốt bài thi!
          </Typography>
        ) : (
          <Typography variant="h5" color="secondary">
            Bạn cần cố gắng hơn nữa!
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default FinishExam;

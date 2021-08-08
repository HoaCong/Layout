import React from "react";
import radio_icon from "../../img/radio-icon.png";
import checkbox_icon from "../../img/checkbox-icon.png";
import next from "../../img/next-question-icon.png";
import back from "../../img/back-question-icon.png";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "../CustomButton/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    background: "#ffebc9",
  },
}));
function Tutorial(props) {
  const classes = useStyles();
  return (
    <>
      <Box
        padding="40px"
        border="1px solid #ff913c"
        borderRadius="8px"
        className={classes.root}
      >
        <Box
          fontWeight="fontWeightBold"
          fontSize={28}
          color="#ff913c"
          textAlign="center"
        >
          Hướng dẫn làm bài trắc nghiệm
        </Box>

        <Box
          display="flex"
          alignItems="center"
          borderBottom="1px solid #ff913c"
          pb={3.5}
          mt={3.5}
          mb={3.5}
        >
          <img src={radio_icon} alt="icon" />
          <Box ml={2}>Chọn câu trả lời đúng</Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          borderBottom="1px solid #ff913c"
          pb={3.5}
          mt={3.5}
          mb={3.5}
        >
          <img src={checkbox_icon} alt="icon" />
          <Box ml={2}>
            Đánh dấu <b>"Xem lại"</b> nếu câu trả lời <b>chưa chắc chắn</b>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          borderBottom="1px solid #ff913c"
          pb={3.5}
          mt={3.5}
          mb={3.5}
        >
          <img src={next} alt="icon" />
          <Box ml={2}>
            Chuyển qua <b>câu kế tiếp</b>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          borderBottom="1px solid #ff913c"
          pb={3.5}
          mt={3.5}
          mb={3.5}
        >
          <img src={back} alt="icon" />
          <Box ml={2}>
              Quay lại <b>câu trước</b>
            </Box>
        </Box>
        <Box>
           <Box fontWeight="fontWeightBold" color="#ff913c">
              Lưu ý:
            </Box>
          <Typography>
            Những câu <b>chưa chọn đáp án</b> sẽ được tính là
            <b> câu trả lời sai</b>
          </Typography>
          <Typography>
            Nếu bạn <b>thoát ra</b> trong lúc chưa hết thời gian làm bài thì kết
            quả <b>sẽ không được tính </b>
          </Typography>
        </Box>
      </Box>
      <Box width={330} margin={"auto"} mt={4}>
        <Button
          onClick={props.onClick}
          width={"100%"}
          background="#ffb83c"
          borderradius="8px"
        >
          Bắt đầu làm bài
        </Button>
      </Box>
    </>
  );
}

export default Tutorial;

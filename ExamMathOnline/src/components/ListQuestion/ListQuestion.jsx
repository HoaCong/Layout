import Button from "../CustomButton/Button";
import Box from "@material-ui/core/Box";
import React from "react";
import Question from "../Question/Question";

function ListQuestion(props) {
  const data = props.data;
  return (
    <>
      <Box>
        {data.map((item, index) => (
          <Question key={index} detail={item} />
        ))}
      </Box>
      <Box width={330} margin={"auto"}>
        <Button
          onClick={props.onClick}
          fullWidth
          background="#ffb83c"
          borderradius="8px"
        >
          Bắt đầu
        </Button>
      </Box>
    </>
  );
}

export default ListQuestion;

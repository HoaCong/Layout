import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
function Question(props) {
  const detail = props.detail;
  return (
    <Box borderBottom="1px solid #d9d9d9" pb={2.5} mt={2.5} mb={2.5}>
      <Typography component="div">
        <Box fontWeight="fontWeightBold">{detail.name}:</Box>
      </Typography>
      <Typography>{detail.question}</Typography>
    </Box>
  );
}

export default Question;

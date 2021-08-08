import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import three_dot from "../../img/3-dotted.png";
import back from "../../img/back-question-icon.png";
import next from "../../img/next-question-icon.png";
import Clock from "../Clock/Clock";
import Button from "../CustomButton/Button";

const styles = makeStyles({
  radio_btn: {
    margin: "8px 0",
    padding: 8,
    border: "1px solid #d9d9d9",
    borderRadius: 6,
    transition: "all .5s",
    "&:hover": {
      background: "#bbe2ff",
    },
  },
  checkbox_btn: {
    height: "30px",
    margin: 0,
  },
  controls: {
    background: "#065592",
  },
  controlsLeft: {
    background: "#efefef",
    "&.done": {
      background: "#9dd5fb",
    },
    "&.review": {
      background: "#ffdeb7",
    },
  },
  controlsMore: {
    background: "#00335a",
  },
  seeback: {
    background: "#fff",
    width: "18px",
    height: "18px",
    borderRadius: "2px",
    marginLeft: "8px",
  },
});

function ItemQuestion(props) {
  const classes = styles();
  const history = useHistory();
  let { quest } = useParams();
  if (quest === undefined || quest === "0") quest = 1;
  const item = props.data[quest - 1];
  //toogle
  const [dropdown, setDropdown] = useState(false);
  const [popup, setPopup] = useState(false);
  //result
  const [listAnswer, setListAnswer] = useState([]);
  const [timer, setTimer] = useState(0);
  const [listReview, setListReview] = useState([]);

  const getTimeDown = (data) => {
    setTimer(data);
  };
  function handleQuestion(number) {
    number < 1
      ? history.push("/itemquestion/")
      : number <= props.data.length
      ? history.push(`${"/itemquestion/" + number}`)
      : history.push(props.data.length);
  }
  function addAnwer(id, answer) {
    const obj = {
      id: id,
      answer: answer,
    };
    const tmpList = listAnswer.filter((item) => item.id !== id);
    tmpList
      ? setListAnswer([...tmpList, obj])
      : setListAnswer([...listAnswer, obj]);
    answer &&
      setTimeout(() => {
        handleQuestion(Number.parseInt(quest) + 1);
      }, 300);
  }
  function addReview(id, checked) {
    const obj = {
      id: id,
      checked: checked,
    };
    const tmpList = listReview.filter((item) => item.id !== id);
    tmpList
      ? setListReview([...tmpList, obj])
      : setListReview([...listReview, obj]);
  }
  function toogleTable() {
    setDropdown(!dropdown);
  }
  function finishExercise() {
    props.result(listAnswer);
    props.getTime(seconds_to(2700 - props.time));
    history.push("/finish");
  }
  function finishSoon() {
    setPopup(!popup);
    props.getTime(timer);
  }
  function resultClass(arr1, arr2, item) {
    return (
      (arr1.filter((e) => e.id === item.id).length > 0 ? "done " : "") +
      (arr2.filter((e) => e.id === item.id && e.checked === true).length > 0
        ? "review"
        : "")
    );
  }
  function checked(arr, ele) {
    if (ele !== null)
      return (
        arr.filter((e) => e.id === item.id && e.answer === ele.result_answer)
          .length > 0
      );
    return arr.filter((e) => e.id === item.id && e.checked === true).length > 0;
  }
  const seconds_to = (sec) => {
    var hours = Math.floor(sec / 3600);
    hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
    var min = Math.floor(sec / 60);
    min >= 1 ? (sec = sec - min * 60) : (min = "00");
    sec < 1 ? (sec = "00") : void 0;
    min.toString().length === 1 ? (min = "0" + min) : void 0;
    sec.toString().length === 1 ? (sec = "0" + sec) : void 0;
    return hours + ":" + min + ":" + sec;
  };
  return (
    <div className="item-question">
      <Box component="h4">{item.name}:</Box>
      <Typography>{item.question}</Typography>
      <RadioGroup>
        {item.results.map((ele, index) => (
          <FormControlLabel
            className={classes.radio_btn}
            onChange={() => addAnwer(item.id, ele.result_answer)}
            checked={checked(listAnswer, ele)}
            key={index}
            value={ele.result_answer}
            control={<Radio color="primary" />}
            label={
              <>
                {ele.name_answer}.{ele.result_answer}
              </>
            }
          />
        ))}
      </RadioGroup>
      <Box className={classes.controls} p={2}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={classes.controlsLeft}
              borderRadius="4px"
              mr={2}
              p="0 8px"
            >
              <AccessTimeIcon fontSize="small" />
              &nbsp;
              <Clock
                getTimeDown={getTimeDown}
                finish={finishExercise}
                clock={seconds_to}
              />
            </Box>
            <FormControlLabel
              onChange={(e) => addReview(item.id, e.target.checked)}
              checked={checked(listReview, null)}
              control={
                <Checkbox color="secondary" className={classes.seeback} />
              }
              label={
                <Box color="#fff" ml={1}>
                  Xem lại
                </Box>
              }
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            {Number.parseInt(quest) === 1 ? null : (
              <Box
                display="flex"
                alignItems="center"
                onClick={() => handleQuestion(Number.parseInt(quest) - 1)}
              >
                <img src={back} alt="btn quay lại" />
              </Box>
            )}
            {Number.parseInt(quest) === props.data.length ? null : (
              <Box
                display="flex"
                alignItems="center"
                ml={2}
                onClick={() => handleQuestion(Number.parseInt(quest) + 1)}
              >
                <img src={next} alt="btn tiếp theo" />
              </Box>
            )}
            <Box
              display="flex"
              alignItems="center"
              ml={2}
              onClick={toogleTable}
            >
              <img src={three_dot} alt="show list question" />
            </Box>
          </Box>
        </Box>
        {dropdown ? (
          <Box className={classes.controlsMore} mt={2} p={2}>
            <Box display="flex" justifyContent="space-between">
              <Box color="#fff">Bấm vào câu muốn trả lời</Box>
              <Button
                onClick={finishSoon}
                margin="0"
                width="max-content"
                height="max-content"
                padding="8px"
                texttransform="unset"
                background="#ffb83c"
                backgroundhover="#e39000"
              >
                {listAnswer.length === props.data.length
                  ? "Nộp bài"
                  : "Nộp bài sớm"}
              </Button>
            </Box>
            <Box display="flex" flexWrap="wrap" margin="0 -1.25%">
              {props.data.map((item, index) => (
                <Box
                  textAlign="center"
                  margin="1.25%"
                  width="10%"
                  borderRadius="4px"
                  className={`${classes.controlsLeft} ${resultClass(
                    listAnswer,
                    listReview,
                    item
                  )}`}
                  key={item.id}
                  onClick={() =>
                    history.push(`${"/itemquestion/" + (index + 1)}`)
                  }
                >
                  {item.name}
                </Box>
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>

      <Dialog
        open={popup}
        keepMounted
        onClose={() => setPopup(!popup)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-title">
          Bạn còn nhiều câu chưa trả lời!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thời gian làm bài còn {seconds_to(props.time)}
          </DialogContentText>
          <DialogContentText>Bạn có đồng ý nộp bài</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={finishExercise}
            texttransform="unset"
            background="#ffb83c"
            backgroundhover="#e39000"
          >
            Nộp bài
          </Button>
          <Button
            onClick={() => setPopup(!popup)}
            texttransform="unset"
            background="#375aab"
            backgroundhover="#032f96"
          >
            Làm tiếp
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ItemQuestion;

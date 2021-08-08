import { Container, Grid, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import Button from "../../components/CustomButton/Button";
import FinishExam from "../../components/FinishExam/FinishExam";
import ItemQuestion from "../../components/ItemQuestion/ItemQuestion";
import ListQuestion from "../../components/ListQuestion/ListQuestion";
import TopRank from "../../components/TopRank/TopRank";
import Tutorial from "../../components/Tutorial/Tutorial";
import { getListQuestion } from "../../redux/actions/questions";
import {
  makeSelectQuestions,
  makeSelectStatusFlags,
} from "../../redux/selectors/questions";
const useStyles = makeStyles(() => ({
  detail_question: {
    background: "#ececec",
  },
}));
function Body({ triggerGetListQuestion, listQuestion }) {
  const classes = useStyles();
  const history = useHistory();
  // result
  const [answersTrue, setAnswersTrue] = useState(0);
  // const [listAnswer, setListAnswer] = useState(0);
  const [time, setTime] = useState(0);

  function getTime(data) {
    setTime(data);
  }

  function toogleStart1() {
    if (
      localStorage.getItem("isSignIn") === null ||
      localStorage.getItem("isSignIn") === undefined
    ) {
      history.push("/login");
    } else {
      history.push("/tutorial");
    }
  }
  function toogleStart2() {
    history.push("/itemquestion");
  }

  function resultAnswer(data) {
    let answer = 0;
    data.map((item) =>
      listQuestion.filter((e) =>
        e.id === item.id && e.result_true === item.answer ? (answer += 1) : null
      )
    );
    setAnswersTrue(answer);
    // setListAnswer(data);

    let user = JSON.parse(localStorage.getItem("isSignIn"));
    const score = (answer / listQuestion.length) * 10;
    user.score < score
      ? updateScore(user.id, Number.parseFloat(score), 2700 - time)
      : user.score === score &&
        user.time > 2700 - time &&
        updateScore(user.id, Number.parseFloat(score), 2700 - time);
  }
  async function updateScore(id, score, time) {
    let demo = await fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        score: score,
        time: time,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    demo = await demo.json();
    localStorage.setItem("isSignIn", JSON.stringify(demo));
  }
  useEffect(() => {
    triggerGetListQuestion();
  }, []);
  const path = window.location.pathname;
  const str = "/tutorial";
  function check(str1, str2) {
    if (str1.includes(str2) || str1 === "/") return true;
    else return false;
  }
  let match = useRouteMatch();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Box border="1px solid #d9d9d9" p={3} borderRadius={12} m="32px 0">
            <Switch>
              <Route
                path={`/itemquestion/:quest`}
                render={() =>
                  listQuestion.length > 0 ? (
                    <ItemQuestion
                      data={listQuestion}
                      result={resultAnswer}
                      getTime={getTime}
                      time={time}
                    />
                  ) : (
                    <ListQuestion data={listQuestion} onClick={toogleStart1} />
                  )
                }
              ></Route>
              <Route
                path={`/itemquestion`}
                render={() =>
                  listQuestion.length > 0 ? (
                    <ItemQuestion
                      data={listQuestion}
                      result={resultAnswer}
                      getTime={getTime}
                      time={time}
                    />
                  ) : (
                    <h3 className="error align_center">Không có câu hỏi </h3>
                  )
                }
              ></Route>
            </Switch>
            {check(path, str) && (
              // Khung số câu , số phút
              <Box>
                <Box
                  fontWeight="fontWeightBold"
                  mb={3}
                  component="h5"
                  fontSize="24px"
                  color="#065592"
                >
                  Đề kiểm tra 1 tiết môn Toán Lớp 6
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding="20px"
                  mb={3}
                  borderRadius="8px"
                  className={classes.detail_question}
                >
                  <Box display="flex" justifyContent="space-between">
                    <CheckBoxOutlinedIcon fontSize="small" />
                    <Box>{listQuestion.length} câu</Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <PersonSharpIcon fontSize="small" />
                    <Box>45 phút</Box>
                  </Box>
                </Box>
              </Box>
            )}

            <Route path="/tutorial">
              <Tutorial onClick={toogleStart2} />
            </Route>
            <Route path="/finish">
              <FinishExam
                answer={answersTrue}
                listQuestion={listQuestion}
                time={time}
              />
            </Route>
            <Route
              path={
                match.path === "/" ||
                match.path === "/login" ||
                match.path === "/signup"
                  ? match.path
                  : "/"
              }
              exact
              render={() => (
                <ListQuestion data={listQuestion} onClick={toogleStart1} />
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign="center" m="32px 0">
            {path.includes("/finish") && <TopRank />}
            {(path === "/" || path === "/login" || path === "/signup") && (
              <Box>
                <Box color="red" component="p" fontSize={14} m="16px 0">
                  Bạn có muốn chinh phục đề thi này
                </Box>
                <Button
                  background="#ffb83c"
                  backgroundhover="#ffa201"
                  fullWidth
                  texttransform="unset"
                  onClick={toogleStart1}
                  margin="0 0 24px 0"
                >
                  Có, tôi muốn!
                </Button>
                <Button
                  background="#375aab"
                  backgroundhover="#0b3cae"
                  fullWidth
                  texttransform="unset"
                >
                  Chia sẻ Facebook
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

Body.propTypes = {
  triggerGetListQuestion: PropTypes.func,
  listQuestion: PropTypes.array,
  statusFlags: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  listQuestion: makeSelectQuestions(),
  statusFlags: makeSelectStatusFlags(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerGetListQuestion: () => dispatch(getListQuestion()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Body);

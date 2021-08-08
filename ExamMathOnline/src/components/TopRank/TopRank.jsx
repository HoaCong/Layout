import React, { useState } from "react";
import Button from "../CustomButton/Button";
import "./TopRank.scss";
function TopRank(props) {
  console.log(props.users);
  const [seeMore, setSeeMore] = useState(3);
  let arrUser = props.users
    .slice()
    .sort((a, b) =>
      b.point - a.point === 0 ? a.time - b.time : b.score - a.score
    );
  return (
    <div className="top-rank">
      <div className="top-rank_head">Top lượt thi</div>
      <div className="top-rank_body">
        <table>
          <tbody>
            <tr>
              <th className="left">Tên</th>
              <th>Điểm</th>
              <th>Thời gian</th>
            </tr>
            {arrUser.map(
              (item, index) =>
                item.score > 5 &&
                index < seeMore && (
                  <tr key={index} className="top-rank_item">
                    <td className="left">
                      <span>
                        {item.firstname} {item.lastname}
                      </span>
                    </td>
                    <td>{item.score}</td>
                    <td>{item.time}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        {arrUser.length > 3 && seeMore === 3 ? (
          <Button background="#ffb83c" onClick={() => setSeeMore(10)}>
            Xem thêm
          </Button>
        ) : (
          <Button background="#ffb83c" onClick={() => setSeeMore(3)}>
            Ẩn bớt
          </Button>
        )}
      </div>
    </div>
  );
}
// TopRank.propTypes = {
//   users: PropTypes.array,
// };

// const mapStateToProps = createStructuredSelector({
//   users: makeSelectUsers(),
// });
// function mapDispatchToProps(dispatch) {
//   return {
//     triggerGetListUser: () => dispatch(getListUser()),
//   };
// }

export default TopRank;

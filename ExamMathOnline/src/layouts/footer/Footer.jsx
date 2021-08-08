import React from "react";
import "./Footer.scss";
import logo_footer from "../../img/logo_footer.png";
function Footer() {
  return (
    <div className="footer">
      <div className="grid wide">
        <div className="logo-footer">
          <img src={logo_footer} alt="logo footer" />
        </div>
        <div className="row no-gutters footer-nav">
          <div className="c-2">
            <h4>
              <a href="/#">THI THPT QG</a>
            </h4>
            <a href="/#">Môn Toán-Văn-Anh</a>
            <a href="/#">Môn Lý-Hoá-Sinh</a>
            <a href="/#">Môn Sử-Địa-GDCD</a>
          </div>
          <div className="c-2">
            <h4>
              <a href="/#">Đề kiểm tra</a>
            </h4>
            <a href="/#">Đề thi HK1, HK2</a>
            <a href="/#">Kiểm tra 1 tiết</a>
            <a href="/#">Kiểm tra 15 phút</a>
          </div>
          <div className="c-2">
            <h4>
              <a href="/#">English Test</a>
            </h4>
            <a href="/#">Ngữ pháp tiếng Anh</a>
            <a href="/#">Từ vựng Tiếng Anh</a>
            <a href="/#">Tiếng Anh THPT QG</a>
          </div>
          <div className="c-2">
            <h4>
              <a href="/#">IT Test</a>
            </h4>
            <a href="/#">Tin học văn phòng</a>
            <a href="/#">Lập trình Web/App</a>
            <a href="/#">Quản trị hệ thống</a>
          </div>
          <div className="c-2">
            <h4>
              <a href="/#">Đại học</a>
            </h4>
            <a href="/#">Môn đại cương</a>
            <a href="/#">Chuyên ngành Kinh tế</a>
            <a href="/#">Chuyên ngành Kỹ thuật</a>
          </div>
          <div className="c-2">
            <h4>
              <a href="/#">Hướng nghiệp</a>
            </h4>
            <a href="/#">Bằng lái xe máy/môtô</a>
            <a href="/#">Thi Công/Viên chức</a>
            <a href="/#">Bằng lái xe Ô tô</a>
          </div>
        </div>
        <div className="copy-right">Copyright © 2020 by Hoa</div>
      </div>
    </div>
  );
}

export default Footer;

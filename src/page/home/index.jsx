import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import "../../assets/scss/index.scss";
import * as basejs from "../../assets/js/base";
import Title from "./title";
import { Link } from "react-router-dom";
import banner_center1 from "../../assets/image/banner_center1.png";
import float_icon from "../../assets/image/float_icon.png";
import banner_center1_tel from "../../assets/image/banner_center1_tel.png";
import banner_center2_tel from "../../assets/image/banner_center2_tel.png";
import banner_center2 from "../../assets/image/banner_center2.png";
import bottom_solgan_tel from "../../assets/image/bottom_solgan_tel.png";
import bottom_solgan from "../../assets/image/bottom_solgan.png";
import qrcode from "../../assets/image/qrcode.png";
import bottom_banner from "../../assets/image/bottom_banner.png";
import bottom_banner_tel from "../../assets/image/bottom_banner_tel.png";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: 0,
      positionY: 0,
      floatStyle: {
        top: "20px",
        left: "5%"
      },
      detailshow: false,
      demoChange: 1
    };
    this.demoswiper = null;
    this.detailSwiper = null;
  }
  render() {
    const isTel = basejs.isTel();
    const { topbanner, topbanner_tel, charobj, demo, demo_detail } = this.props;
    if (isTel) {
      var toplist = topbanner_tel;
    } else {
      var toplist = topbanner;
    }

    return (
      <Fragment>
        <div className="swiper-container" id="topbanner">
          <div className="swiper-wrapper">
            {toplist.map(i => {
              return <img src={i} key={i} alt="" className="swiper-slide" />;
            })}
          </div>
          <div className="swiper-pagination" />
        </div>
        <Title
          main={"品牌网站建设"}
          center={"全网覆盖，五网合一"}
          desc={
            "完美兼容PC，手机，微信、IPAD、小程序，让客户无论在哪里都能覆盖到"
          }
        />
        <div className="chratictics">
          {charobj.map((i, index) => {
            return (
              <div className="item" key={index}>
                <div className="imgbox">
                  <img className="iconpic" src={i.img} alt="" />
                </div>
                <span className="title">{i.title}</span>
                <span className="desc">{i.desc}</span>
              </div>
            );
          })}
        </div>
        <Link to={"/price"} className="checkPrice">
          点击查看报价>>
        </Link>
        <Title
          main={"微信服务开发"}
          center={"微信月活10亿人，一定有你的客户在"}
          desc={"开发微信网站，针对性服务用户，成交率更高"}
        />
        {isTel ? (
          <div className="banner_center_tel">
            <img src={banner_center1_tel} className="main" alt="" />
          </div>
        ) : (
          <div className="banner_center" onMouseMove={this.picmove}>
            <img src={banner_center1} className="main" alt="" />
            <img
              src={float_icon}
              alt=""
              className="floatpic"
              ref="floatpic"
              style={this.state.floatStyle}
            />
          </div>
        )}

        <Title
          main={"互联网推广，不能没有"}
          center={"流量低洼地，你的用户聚集地"}
          desc={"开发微信网站，针对性服务用户，成交率更高"}
        />

        {isTel ? (
          <div className="banner_center2_tel">
            <img src={banner_center2_tel} alt="" />
          </div>
        ) : (
          <div className="banner_center2">
            <img src={banner_center2} alt="" />
            <div className="tips">数据来源：Trustdata移动大数据监测平台</div>
          </div>
        )}
        <Title
          main={"客户案例"}
          center={"客户回头率98%，值得你信赖"}
          desc={"3000家品牌客户认可、20000家企业用户、50000个竞品网站案例"}
        />

        <div className="demo_swiper">
          <div className="swiper-container" id="demo" onClick={this.showDetail}>
            <div className="swiper-wrapper">
              {demo.map((i, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <img src={i} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <span className="demo-button-next" />
          <span className="demo-button-prev" />
        </div>

        <div
          id="demo_detail"
          style={{ display: this.state.detailshow ? "block" : "none" }}
          ref="demo_detail"
        >
          <div className="container">
            <span className="close_popover" onClick={this.hideDetai}>
              ×
            </span>
            <div className="swiper-container" id="detail_swiper">
              <div className="swiper-wrapper">
                {demo_detail.map((i, index) => {
                  return (
                    <img src={i} className="swiper-slide" key={index} alt="" />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {isTel ? (
          <img src={bottom_solgan_tel} className="slogan_tel" alt="" />
        ) : (
          <img src={bottom_solgan} className="slogan" alt="" />
        )}

        <div className="bottom_info">
          <img src={bottom_banner} className="bottom_banner" alt="" />
          <img src={bottom_banner_tel} className="bottom_banner_tel" alt="" />
          <div className="info">
            <ul className="text">
              <li>
                <i className="iconfont">&#xe747;</i>{" "}
                <span>官网: www.zs10.net</span>
              </li>
              <li>
                <i className="iconfont">&#xe631;</i>{" "}
                <span>电话: 18100611024</span>
              </li>
              <li>
                <i className="iconfont">&#xe61e;</i>{" "}
                <span>微信: 18100611024</span>
              </li>
              <li>
                <i className="iconfont">&#xe654;</i> <span>QQ: 951948466</span>
              </li>
              <li>
                <i className="iconfont">&#xe631;</i>{" "}
                <span>地址:无锡市梁溪区塘南路时代上河星汇天地</span>
              </li>
            </ul>
            <div className="qrcode">
              <img src={qrcode} alt="" />
              <span>扫码添加客服微信</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  componentDidMount() {

    var _t = this;
    new Swiper("#topbanner", {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      autoHeight: true,
      grabCursor: true,
      loop: true,
      pagination: {
        el: "#topbanner .swiper-pagination",
        clickable: true
      }
    });
    this.demoswiper = new Swiper("#demo", {
      navigation: {
        nextEl: ".demo-button-next",
        prevEl: ".demo-button-prev"
      },
      touchEventsTarget: "container",
      touchStartPreventDefault: false,
      loop: true,
      on: {
        slideChangeTransitionEnd: function() {
          if (this.activeIndex === 9) {
            var nowIndex = 1;
          } else if (this.activeIndex === 0) {
            var nowIndex = 8;
          } else {
            var nowIndex = this.activeIndex;
          }
          _t.setState({
            demoChange: nowIndex
          });
        }
      }
    });
  }
  picmove = event => {
    var e = event || window.event;
    var x = e.clientX,
      y = e.clientY;
    let { positionX, positionY } = this.state;
    if (positionX === 0 && positionY === 0) {
      positionX = x;
      positionY = y;
      this.setState({
        positionX: x,
        positionY: y
      });
    }
    if (x > positionX && positionY == y) {
      this.setState({
        floatStyle: {
          top: "20px",
          left: "4%"
        }
      });
    } else if (x < positionX && positionY == y) {
      this.setState({
        floatStyle: {
          top: "20px",
          left: "6%"
        }
      });
    } else if (y > positionY) {
      this.setState({
        floatStyle: {
          top: "20px",
          left: "5%"
        }
      });
    } else {
      this.setState({
        floatStyle: {
          top: "40px",
          left: "5%"
        }
      });
    }
    this.setState({
      positionX: x,
      positionY: y
    });
  };
  showDetail = () => {
    let demoChange = this.state.demoChange;
    this.setState(
      prestate => {
        return {
          detailshow: true
        };
      },
      () => {
        var _t = this;
        this.bodyStyle("hidden");
        this.detailSwiper = new Swiper("#detail_swiper", {
          loop: true,
          initialSlide: demoChange - 1,
          grabCursor: true,
          autoHeight: true,
          on: {
            slideChangeTransitionEnd: function() {
              if (this.activeIndex === 9) {
                var nowIndex = 1;
              } else if (this.activeIndex === 0) {
                var nowIndex = 8;
              } else {
                var nowIndex = this.activeIndex;
              }
              _t.demoswiper.slideTo(nowIndex, 200, true);
              _t.refs.demo_detail.scrollTop = 0;
            }
          }
        });
      }
    );
  };
  hideDetai = () => {
    this.setState(
      prestate => {
        return {
          detailshow: false
        };
      },
      () => {
        this.bodyStyle("unset");
        this.detailSwiper.destroy(false);
      }
    );
  };
  bodyStyle(style) {
    document.querySelector("body").style.overflow = style;
  }
}

const mapState = store => {
  return {
    topbanner: store.getIn(["home", "topbanner"]).toJS(),
    topbanner_tel: store.getIn(["home", "topbanner_tel"]).toJS(),
    charobj: store.getIn(["home", "charObj"]).toJS(),
    demo: store.getIn(["home", "demo"]).toJS(),
    demo_detail: store.getIn(["home", "demo_detail"]).toJS()
  };
};
const mapDispatch = dispatch => {
  return {};
};
export default connect(
  mapState,
  mapDispatch
)(Home);

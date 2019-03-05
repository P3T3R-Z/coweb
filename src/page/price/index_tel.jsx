import React, { Component } from "react";
import { connect } from "react-redux";

import * as basejs from "../../assets/js/base";
import "../../assets/scss/price_tel.scss";
import { Redirect } from "react-router-dom";

import banner_tel from "../../assets/image/price/banner_tel.jpg";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";

import price1 from "../../assets/image/price/price1.png";
import price3 from "../../assets/image/price/price3.png";
import price5 from "../../assets/image/price/price5.png";

import price_tel1 from "../../assets/image/price/price_tel1.jpg";
import price_tel2 from "../../assets/image/price/price_tel2.jpg";
import price_tel3 from "../../assets/image/price/price_tel3.jpg";
import price_tel4 from "../../assets/image/price/price_tel4.jpg";
class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: "5rem",
      navs: ["PC+移动+微信", "PC+移动", "PC", "移动", "小程序"],
      historyMove: [],
      navIndex: 0
    };
    this.priceSwiper = null;
  }

  componentWillMount() {
    const isTel = basejs.isTel();
    this.setState({
      isTel
    });
  }
  render() {
    if (!this.state.isTel) {
      return <Redirect to={{ pathname: "/price" }} />;
    }

    return (
      <div className="telContainer">
        <img src={banner_tel} alt="" className="banner" />
        <div className="nav" ref="nav">
          {this.state.navs.map((i, index) => {
            return (
              <span
                key={index}
                onClick={this.navChange.bind(this, index)}
                className={this.state.navIndex === index ? "on" : ""}
              >
                {i}
              </span>
            );
          })}
          <div className="arrow" style={{ left: this.state.left }} />
        </div>
        <div className="swiper-container" id="price_swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={price1} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={price1} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={price3} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={price3} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={price5} alt="" />
            </div>
          </div>
        </div>

        <img
          src={price_tel1}
          alt=""
          className="banner"
          style={{ marginTop: "-6rem" }}
        />
        <img src={price_tel2} alt="" className="banner" />
        <img src={price_tel3} alt="" className="banner" />
        <img src={price_tel4} alt="" className="banner" />
      </div>
    );
  }

  componentDidMount() {

    var _t = this;
    this.priceSwiper = new Swiper("#price_swiper", {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      autoHeight: true,
      grabCursor: true,
      loop: false,
      on: {
        slideChangeTransitionEnd: function() {
          if (this.activeIndex === 5) {
            var nowIndex = 0;
          } else {
            var nowIndex = this.activeIndex;
          }
          _t.navChange(nowIndex);
        }
      }
    });
  }
  navChange = index => {
    if (window.innerWidth) {
      var winWidth = window.innerWidth;
    } else if (document.body && document.body.clientWidth) {
      var winWidth = document.body.clientWidth / 2;
    }
    var halfWinWidth = winWidth / 2 / 18;
    var touchLeft =
      (this.refs.nav.childNodes[index].offsetLeft +
        this.refs.nav.childNodes[index].offsetWidth / 2) /
        18 -
      0.8 +
      "rem";
    if (parseFloat(touchLeft) >= halfWinWidth) {
      this.refs.nav.scrollLeft = 46;
    } else {
      this.refs.nav.scrollLeft = 0;
    }

    this.setState(
      preState => {
        return {
          left: touchLeft,
          navIndex: index
        };
      },
      () => {
        this.priceSwiper.slideTo(index, 50, true);
      }
    );
  };
}

const mapState = store => {
  return {};
};
const mapDispatch = dispatch => {
  return {};
};
export default connect(
  mapState,
  mapDispatch
)(Price);

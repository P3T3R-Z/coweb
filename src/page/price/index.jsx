import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actionCreator";
import * as basejs from "../../assets/js/base";
import "../../assets/scss/price.scss";
import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import banner from "../../assets/image/price/banner.png";
import details from "../../assets/image/price/details.jpg";
class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: 0,
      isTel: false
    };
  }
  renderOther(i) {
    if (i === "√") {
      return <i className="iconfont green">&#xe601;</i>;
    } else if (i === "不限") {
      return <span className="orange">不限</span>;
    } else {
      return i;
    }
  }
  renderlist(nowtab, index) {
    const { rightTitle } = this.props;
    nowtab = this.props[nowtab];
    switch (index) {
      case 1:
        return nowtab.v1.map((i, index) => {
          return <dd key={i + index}>{this.renderOther(i)}</dd>;
        });
      case 2:
        return nowtab.v2.map((i, index) => {
          return <dd key={i + index}>{this.renderOther(i)}</dd>;
        });
      case 3:
        return nowtab.v3.map((i, index) => {
          return <dd key={i + index}>{this.renderOther(i)}</dd>;
        });
      default:
        return nowtab.v1.map((i, index) => {
          return <dd key={i + index}>{rightTitle[index]}</dd>;
        });
    }
  }
  componentWillMount() {
    const isTel = basejs.isTel();
    this.setState({
      isTel
    });
  }
  render() {
    if (this.state.isTel) {
      return <Redirect to={{ pathname: "/price_tel" }} />;
    }
    const { tabIndex, nav, tableTitle, getTab } = this.props;

    return (
      <Fragment>
        <img src={banner} alt="" className="topbanner" />

        <div className="priceTable">
          <div className="tabNav">
            {nav.map((i, index) => {
              return (
                <span
                  key={index}
                  className={tabIndex === index ? "on" : ""}
                  onClick={() => {
                    getTab(index);
                  }}
                >
                  {i}
                </span>
              );
            })}
          </div>
          <div className="table">
            {tableTitle.map((i, index) => {
              return (
                <CSSTransition
                  in={this.state.focus === index && this.state.focus !== 0}
                  timeout={200}
                  classNames="float"
                  key={index}
                >
                  <Fragment>
                    <dl
                      className="eachList"
                      onMouseEnter={this.mouseenter.bind(this, index)}
                      onMouseLeave={this.mouseleave}
                    >
                      <dt>{i}</dt>
                      {this.renderlist("tab" + (tabIndex + 1), index)}
                    </dl>
                  </Fragment>
                </CSSTransition>
              );
            })}
          </div>

          <div className="table2">
            <p>竞价托管</p>
            <div>
              <span>收费</span>
              <span>
                消费的10%收取费用，低于1500的，按1500/月收取代理费
              </span>{" "}
            </div>
            <div>
              <span>效果</span>
              <span>提供的效果：不低于目前公司自护维护的效果</span>{" "}
            </div>
          </div>
        </div>
        <div className="details">
          <img
            src={details}
            alt=""
            onDragStart={e => {
              e.preventDefault();
            }}
          />
        </div>
      </Fragment>
    );
  }
  componentDidMount() {

  }
  shouldComponentUpdate(nextProps, nextstate) {
    return true;
  }
  mouseenter = index => {
    this.setState({
      focus: index
    });
  };
  mouseleave = () => {
    this.setState({
      focus: 0
    });
  };
}

const mapState = store => {
  return {
    tabIndex: store.getIn(["price", "tabIndex"]),
    nav: store.getIn(["price", "nav"]).toJS(),
    tableTitle: store.getIn(["price", "tableTitle"]).toJS(),
    rightTitle: store.getIn(["price", "rightTitle"]).toJS(),
    tab1: store.getIn(["price", "tab1"]).toJS(),
    tab2: store.getIn(["price", "tab2"]).toJS(),
    tab3: store.getIn(["price", "tab3"]).toJS(),
    tab4: store.getIn(["price", "tab4"]).toJS(),
    tab5: store.getIn(["price", "tab5"]).toJS()
  };
};
const mapDispatch = dispatch => {
  return {
    getTab(index) {
      const action = actionCreator.getTab(index);
      dispatch(action);
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(Price);

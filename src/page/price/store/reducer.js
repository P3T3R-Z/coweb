import * as actionTypes from "./actionTypes";

import { fromJS } from "immutable";
const defaultState = fromJS({
  nav: ["PC+移动+微信", "PC+移动", "PC", "移动", "小程序"],
  tableTitle: ["版本", "标准版", "营销版", "至尊版"],
  rightTitle: [
    "空间大小",
    "月流量",
    "上传文件个数",
    "去除底部版权",
    "域名绑定",
    "页面个数",
    "1年",
    "2年",
    "3年",
    "5年",
    "微信小程序",
    "是否推广竞价",
    "人员培训"
  ],
  tab1: {
    v1: [
      "15G",
      "120G",
      "15000",
      "√",
      "√",
      "不限",
      "1980",
      "3960",
      "5940",
      "9900",
      "1000",
      "500",
      "500"
    ],
    v2: [
      "30G",
      "250G",
      "60000",
      "√",
      "√",
      "不限",
      "2880",
      "5760",
      "8640",
      "16800",
      "1500",
      "500",
      "500"
    ],
    v3: [
      "30G",
      "250G",
      "60000",
      "√",
      "√",
      "不限",
      "3880",
      "7760",
      "12640",
      "19400",
      "1500",
      "√",
      "√"
    ]
  },
  tab2: {
    v1: [
      "15G",
      "120G",
      "15000",
      "√",
      "√",
      "不限",
      "1980",
      "3960",
      "5940",
      "9900",
      "1000",
      "500",
      "500"
    ],
    v2: [
      "30G",
      "250G",
      "60000",
      "√",
      "√",
      "不限",
      "2880",
      "5760",
      "8640",
      "16800",
      "1500",
      "500",
      "500"
    ],
    v3: [
      "30G",
      "250G",
      "60000",
      "√",
      "√",
      "不限",
      "3880",
      "7760",
      "12640",
      "19400",
      "1500",
      "√",
      "√"
    ]
  },
  tab3: {
    v1: [
      "15G",
      "120G",
      "15000",
      "√",
      "√",
      "不限",
      "999",
      "1980",
      "2980",
      "4980",
      "1000",
      "500",
      "500"
    ],
    v2: [
      "30G",
      "250G",
      "60000",
      "√",
      "√",
      "不限",
      "1990",
      "3780",
      "5680",
      "7400",
      "1500",
      "500",
      "500"
    ],
    v3: [
      "30G",
      "250G",
      "60000",
      "√",
      "√",
      "不限",
      "2680",
      "4980",
      "6190",
      "9400",
      "1500",
      "√",
      "√"
    ]
  },
  tab4: {
    v1: [
      "15G",
      "120G",
      "15000",
      "√",
      "√",
      "不限",
      "999",
      "1980",
      "2980",
      "4980",
      "1000",
      "500",
      "500"
    ],
    v2: [
      "30G",
      "250G",
      "60000",
      "√",
      "√",
      "不限",
      "1990",
      "3780",
      "5680",
      "7400",
      "1500",
      "500",
      "500"
    ],
    v3: [
      "30G",
      "250G",
      "60000",
      "√",
      "√",
      "不限",
      "2680",
      "4980",
      "6190",
      "9400",
      "1500",
      "√",
      "√"
    ]
  },
  tab5: {
    v1: [
      "5G",
      "20G",
      "5000",
      "√",
      "",
      "500",
      "999",
      "1780",
      "不限",
      "2680",
      "4400"
    ],
    v2: [
      "10G",
      "50G",
      "10000",
      "√",
      "",
      "500",
      "1990",
      "3780",
      "不限",
      "5680",
      "9400"
    ]
  },
  tabIndex: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.showTab:
      if (action.value === 4) {
        let newTabletitle = fromJS(["版本", "标准版", "营销版"]);
        return state.merge({
          tabIndex: action.value,
          tableTitle: fromJS(newTabletitle)
        });
      } else {
        let newTabletitle = fromJS(["版本", "标准版", "营销版", "至尊版"]);
        return state.merge({
          tabIndex: action.value,
          tableTitle: fromJS(newTabletitle)
        });
      }

    default:
      return state;
  }
};

// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";


import topbanner0 from "../../../assets/image/banner0.jpg";
import topbanner1 from "../../../assets/image/banner1.jpg";
import topbanner2 from "../../../assets/image/banner2.jpg";

import topbanner0_tel from "../../../assets/image/banner0_tel.jpg";
import topbanner1_tel from "../../../assets/image/banner1_tel.jpg";
import topbanner2_tel from "../../../assets/image/banner2_tel.jpg";


import charpic1 from '../../../assets/image/icon1.png';
import charpic2 from '../../../assets/image/icon2.png';
import charpic3 from '../../../assets/image/icon3.png';
import charpic4 from '../../../assets/image/icon4.png';

import demo1 from '../../../assets/image/demo1.png';
import demo2 from '../../../assets/image/demo2.png';
import demo3 from '../../../assets/image/demo3.png';
import demo4 from '../../../assets/image/demo4.png';
import demo5 from '../../../assets/image/demo5.png';
import demo6 from '../../../assets/image/demo6.png';
import demo7 from '../../../assets/image/demo7.png';
import demo8 from '../../../assets/image/demo8.png';

import demo1_d from '../../../assets/image/demo1_detail.png';
import demo2_d from '../../../assets/image/demo2_detail.png';
import demo3_d from '../../../assets/image/demo3_detail.png';
import demo4_d from '../../../assets/image/demo4_detail.png';
import demo5_d from '../../../assets/image/demo5_detail.png';
import demo6_d from '../../../assets/image/demo6_detail.png';
import demo7_d from '../../../assets/image/demo7_detail.png';
import demo8_d from '../../../assets/image/demo8_detail.png';

const defaultState = fromJS({
    topbanner:[topbanner0, topbanner1, topbanner2],
    topbanner_tel:[topbanner0_tel, topbanner1_tel, topbanner2_tel],
    charObj:[
        {
            img:charpic1,
            title:'企业网站建设',
            desc:'完美呈现品牌价值，刻入客户心智中，赢得品牌忠实者。'
        },
        {
            img:charpic2,
            title:'营销型网站',
            desc:'回归营销本质，关键词排名更靠前，获取更多客户流量。'
        },
        {
            img:charpic3,
            title:'功能性网站',
            desc:'产品呈现主次分明，客户一眼即可锁定需求，专业高效。'
        },
        {
            img:charpic4,
            title:'移动网站建设',
            desc:'满足PC，手机，微信等不同终端呈现方式，产品清晰，品牌优势突出。'
        }
    ],
    demo:[
        demo1, demo2, demo3, demo4, demo5, demo6, demo7, demo8
    ],
    demo_detail:[
        demo1_d, demo2_d, demo3_d, demo4_d, demo5_d, demo6_d, demo7_d, demo8_d
    ]
})

export default (state = defaultState, action)=>{
    switch(action.type){
        default:
            return state
    }
}
webpackJsonp([19],{"0alx":function(t,o){},UgL7:function(t,o){},gHYN:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("bOdI"),i=s.n(e),n=s("uaSg"),r=s("yclV"),a={data:function(){return{isCookie:Object(r.a)("token").length>0,isshowbounds:!1,bonusPointsHistories:[],quantity:0,ordernum:{PURCHASED:0,SHIPPED:0,CONFIRMED:0,RECEIVED:0,COMMENTED:0,FINISHED:0,REFUNDING:0},shearView:!1,shearData:{},userInfo:{},bg:{backgroundImage:"url("+s("ypf7")+")"}}},activated:function(){1==this.isCookie?(this.getOrderStatus(),this.getuserInfo()):(this.userInfo={},this.quantity=0,this.ordernum={PURCHASED:0,SHIPPED:0,CONFIRMED:0,RECEIVED:0,COMMENTED:0,FINISHED:0,REFUNDING:0})},methods:i()({getuserInfo:function(){var t=this;Object(n.a)(this,"/api/personal/info",{},"get","",function(o){o&&(t.userInfo=o.info)})},gotouser:function(){1==this.isCookie?this.$router.push({name:"userInfo"}):this.$router.push({name:"loginWithCode"})},gotoallorder:function(t){1==this.isCookie&&this.$router.push({path:"/personalCenter/myOderList",query:{type:t}})},gotoReturnOrder:function(){1==this.isCookie&&this.$router.push({name:"salesRetrunList",query:{type:1}})},gotoshopcar:function(){1==this.isCookie&&this.$router.push({path:"/shoppingCart"})},gotostore:function(){},coupons:function(){1==this.isCookie&&this.$router.push({name:"myCoupons"})},mypolicy:function(){1==this.isCookie?this.$router.push({name:"policyList"}):this.$router.push({name:"loginWithCode"})},exchange:function(){},introduct:function(){},gotoGitfs:function(){1==this.isCookie?this.$router.push({name:"giftList"}):this.$router.push({name:"loginWithCode"})},gotobonushistroy:function(){if(1==this.isCookie){var t=this;Object(n.a)(this,"/api/customer/bonusPointsHistories",{},"get","获取中...",function(o){o.histories.length>0&&(t.bonusPointsHistories=o.histories,t.isshowbounds=!0)})}},getOrderStatus:function(){var t=this;Object(n.a)(this,"/api/order/status",{},"get","",function(o){if(o.status)for(var s in o.status)t.ordernum[s]=o.status[s]})}},"introduct",function(){this.$router.push({name:"aboutUs"})}),mounted:function(){1==this.isCookie&&(this.getOrderStatus(),this.getuserInfo())}},l={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"personal"},[s("yd-navbar",{attrs:{slot:"navbar",title:"个人中心",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"}),t._v(" "),s("div",{staticClass:"mine_hearder",style:t.bg},[t._m(0),t._v(" "),s("div",{staticClass:"user_detal"},[s("p",{staticClass:"user_name"},[t._v("xiongjj")]),t._v(" "),s("p",{staticClass:"user_des"},[s("yd-badge",{attrs:{type:"warning"}},[t._v("会员")])],1)]),t._v(" "),t._m(1)]),t._v(" "),s("yd-cell-group",{staticStyle:{"margin-top":"0.2rem","margin-bottom":"0px"}},[s("yd-cell-item",{attrs:{arrow:""}},[s("yd-icon",{attrs:{slot:"icon",name:"icon2-copy",size:".42rem",color:"#d41d0f",custom:""},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"left"},slot:"left"},[s("span",[t._v("我的订单")])]),t._v(" "),s("span",{attrs:{slot:"right"},on:{click:function(o){t.gotoallorder(1)}},slot:"right"},[t._v("全部订单")])],1)],1),t._v(" "),s("yd-grids-group",{staticStyle:{"margin-top":"0.2rem"},attrs:{rows:5,id:"orderlist"}},[s("yd-grids-item",{nativeOn:{click:function(o){t.gotoallorder(2)}}},[s("yd-icon",{attrs:{slot:"icon",name:"daifukuan",color:"#68696b",custom:""},slot:"icon"}),t._v(" "),t.ordernum.PURCHASED>0?s("div",{attrs:{slot:"else"},slot:"else"},[s("yd-badge",{staticStyle:{position:"absolute",right:"0.1rem",top:"0.2rem","background-color":"#d41d0f"},attrs:{slot:"badge",type:"danger"},slot:"badge"},[t._v(t._s(t.ordernum.PURCHASED))])],1):t._e(),t._v(" "),s("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("待付款")])],1),t._v(" "),s("yd-grids-item",{nativeOn:{click:function(o){t.gotoallorder(3)}}},[s("yd-icon",{attrs:{slot:"icon",name:"daishouhuo",color:"#68696b",custom:""},slot:"icon"}),t._v(" "),t.ordernum.SHIPPED+t.ordernum.CONFIRMED>0?s("div",{attrs:{slot:"else"},slot:"else"},[s("yd-badge",{staticStyle:{position:"absolute",right:"0.1rem",top:"0.2rem","background-color":"#d41d0f"},attrs:{slot:"badge",type:"danger"},slot:"badge"},[t._v(t._s(t.ordernum.SHIPPED+t.ordernum.CONFIRMED))])],1):t._e(),t._v(" "),s("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("待收货")])],1),t._v(" "),s("yd-grids-item",{nativeOn:{click:function(o){t.gotoallorder(4)}}},[s("yd-icon",{attrs:{slot:"icon",name:"daipingjia-copy",color:"#68696b",custom:""},slot:"icon"}),t._v(" "),t.ordernum.RECEIVED?s("div",{attrs:{slot:"else"},slot:"else"},[s("yd-badge",{staticStyle:{position:"absolute",right:"0.1rem",top:"0.2rem","background-color":"#d41d0f"},attrs:{slot:"badge",type:"danger"},slot:"badge"},[t._v(t._s(t.ordernum.RECEIVED))])],1):t._e(),t._v(" "),s("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("待评价")])],1),t._v(" "),s("yd-grids-item",{nativeOn:{click:function(o){t.gotoallorder(5)}}},[s("yd-icon",{attrs:{slot:"icon",name:"yiwancheng",color:"#68696b",custom:""},slot:"icon"}),t._v(" "),s("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("已完成")])],1),t._v(" "),s("yd-grids-item",{nativeOn:{click:function(o){t.gotoReturnOrder()}}},[s("yd-icon",{attrs:{slot:"icon",name:"tuihuoguanli",color:"#68696b",custom:""},slot:"icon"}),t._v(" "),s("div",{attrs:{slot:"else"},slot:"else"},[t._e()],1),t._v(" "),s("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("退货")])],1)],1),t._v(" "),s("yd-cell-group",{staticStyle:{"margin-top":"0.2rem"}},[s("yd-cell-item",{attrs:{arrow:"",type:"a"},nativeOn:{click:function(o){t.gotoshopcar(o)}}},[s("yd-icon",{attrs:{slot:"icon",name:"gouwuche",size:".35rem",color:"#999999",custom:""},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"left"},slot:"left"},[t._v("我的购物车")]),t._v(" "),s("span",{staticStyle:{"font-size":".3rem"},attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.quantity)+"件商品")])],1),t._v(" "),s("yd-cell-item",{attrs:{arrow:"",type:"a"},nativeOn:{click:function(o){t.coupons(o)}}},[s("yd-icon",{attrs:{slot:"icon",name:"youhuiquan",size:".35rem",color:"#999999",custom:""},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"left"},slot:"left"},[t._v(" 我的优惠券")]),t._v(" "),s("span",{staticStyle:{"font-size":".3rem"},attrs:{slot:"right"},slot:"right"})],1),t._v(" "),s("yd-cell-item",{attrs:{type:"a"},nativeOn:{click:function(o){t.gotobonushistroy()}}},[s("yd-icon",{attrs:{slot:"icon",name:"jfxx",size:".35rem",color:"#999999",custom:""},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"left"},slot:"left"},[t._v("积分商城")]),t._v(" "),s("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.userInfo.bonus?t.userInfo.bonus:"0")+"积分")])],1),t._v(" "),s("yd-cell-item",{attrs:{arrow:"",type:"a"},nativeOn:{click:function(o){t.gotoGitfs()}}},[s("yd-icon",{attrs:{slot:"icon",name:"mylp",size:".35rem",color:"#999999",custom:""},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"left"},slot:"left"},[t._v("我的礼品")])],1),t._v(" "),t._e(),t._v(" "),s("yd-cell-item",{attrs:{arrow:"",type:"a",href:"#"},nativeOn:{click:function(o){t.exchange(o)}}},[s("yd-icon",{attrs:{slot:"icon",name:"duihuan",size:".35rem",color:"#999999",custom:""},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"left"},slot:"left"},[t._v("兑换专区")])],1),t._v(" "),s("yd-cell-item",{attrs:{arrow:"",type:"a"},nativeOn:{click:function(o){t.introduct(o)}}},[s("yd-icon",{attrs:{slot:"icon",name:"guanyu",size:".35rem",color:"#999999",custom:""},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"left"},slot:"left"},[t._v("关于重庆百货")])],1),t._v(" "),s("yd-cell-item",{attrs:{arrow:"",type:"a",href:"tel:966888"}},[s("yd-icon",{attrs:{slot:"icon",name:"kefu",size:".35rem",color:"#999999",custom:""},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"left"},slot:"left"},[t._v("客服帮助")]),t._v(" "),s("span",{staticStyle:{"font-size":".3rem"},attrs:{slot:"right"},slot:"right"},[t._v("966888")])],1),t._v(" "),s("yd-popup",{attrs:{position:"bottom",height:"60%"},model:{value:t.isshowbounds,callback:function(o){t.isshowbounds=o},expression:"isshowbounds"}},[s("div",{staticStyle:{height:"1rem","line-height":"1rem","border-bottom":"1px solid #edeeef"},attrs:{slot:"top"},slot:"top"},[s("span",{staticStyle:{"font-size":"0.3rem",color:"#666","padding-left":"0.2rem"}},[t._v("积分历史")]),t._v(" "),s("div",{staticClass:"close",on:{click:function(o){t.isshowwl=!1}}})]),t._v(" "),s("yd-timeline",t._l(t.bonusPointsHistories,function(o,e){return s("yd-timeline-item",{key:e},[s("p",[t._v(t._s(o.updatedReason))]),t._v(" "),s("p",{class:{grstyle:"DECREMENT"==o.updatedType,redstyle:"INCREMENT"==o.updatedType},staticStyle:{"margin-top":"10px"}},[t._v(t._s("DECREMENT"==o.updatedType?"-":"INCREMENT"==o.updatedType?"+":"")+t._s(o.updatedValue)+" "),s("span",[t._v("   "+t._s(t._f("formatDate1")(o.updatedTimestamp)))])])])}))],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"user_icon"},[o("img",{attrs:{src:"http://www.qqxoo.com/uploads/allimg/180301/16122362J-6.jpg"}})])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"manage_account"},[o("span",[this._v("用户管理>")])])}]};var c=s("VU/8")(a,l,!1,function(t){s("0alx"),s("UgL7")},"data-v-0584417e",null);o.default=c.exports},ypf7:function(t,o,s){t.exports=s.p+"static/img/personbg.f29886f.png"}});
webpackJsonp([18],{"/k3S":function(t,e){},MnaB:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=s("mvHQ"),o=s.n(i),r=s("bOdI"),n=s.n(r),l=(s("QP/A"),s("pyxX")),d=s.n(l),c=(s("cnGM"),s("S6j6")),p=s.n(c),u=(s("dKGA"),s("kSul")),v=s.n(u),h=(s("jgNZ"),s("syWm")),f=s.n(h),m=s("Dd8w"),_=s.n(m),y=s("yclV"),b=s("uaSg"),g=(s("8NGk"),s("NYxO")),D=s("uMyE"),C={computed:_()({},Object(g.b)(["invoice"]),{joinaddress:function(){return this.address.addressStateName?this.address.addressStateName+this.address.addressCityName+this.address.addressDistrictName+this.address.addressStreet:""}}),components:(a={goods:D.a},n()(a,f.a.name,f.a),n()(a,v.a.name,v.a),n()(a,p.a.name,p.a),n()(a,d.a.name,d.a),a),data:function(){var t;return t={shippingType:"",distribut:"",distribution:[{type:"DELIVERY",name:"快递"},{type:"SELF_DELIVERY",name:"门店自提"}],checkbox1:!0,getorderInfo:{},spinner1:1,startDate:"2018-1-1",endDate:"2018-1-1",orderDate:"",orderData:{total:0},oderdefault:{},address:{lastName:"",phonePrimary:""},chooseCoupon:!1},n()(t,"oderdefault",{}),n()(t,"availableCount",0),n()(t,"available",[]),n()(t,"unavailable",[]),n()(t,"defuletCoupons",{}),n()(t,"selectCoupons",[]),n()(t,"couponsMoney",0),n()(t,"personCheckbox",!0),n()(t,"unitCheckbox",!1),n()(t,"msg",""),n()(t,"storeName",""),n()(t,"isBonusPointsUsed",!1),n()(t,"bonusPointsUsed",0),n()(t,"bonusPoints",0),n()(t,"payInfo",{}),n()(t,"tabkey","1"),n()(t,"paytotalFee",0),n()(t,"carInfo",!1),t},filters:{formatDate:function(t){if(!t)return"";var e=new Date(t);return Object(b.c)(e,"yyyy-MM-dd")}},watch:{personCheckbox:{handler:function(t,e){1==t&&(this.unitCheckbox=!1)}},distribut:{handler:function(t,e){this.orderData.shippingType=t,this.confirmOder()}},unitCheckbox:{handler:function(t,e){1==t&&(this.personCheckbox=!1)}},selectCoupons:{deep:!0,handler:function(t,e){var s=0;for(var a in t)s+=t[a].discount;this.couponsMoney=s}}},mounted:function(){if(Object(y.a)("oderInfo").length>0){var t=Object(y.a)("oderInfo");this.getorderInfo=JSON.parse(t)}if(Object(b.d)(this.getorderInfo)){var e=this;this.$dialog.confirm({title:"温馨提示",mes:"订单已经提交",opts:function(){e.$router.go(-1)}})}else this.oderInfo()},methods:{oderInfo:function(){var t=this;Object(b.a)(this,"/api/order/defaultInfo",{},"get","获取中...",function(e){t.oderdefault=e,e.address&&(t.address=e.address),e.bonusPoints&&(t.bonusPoints=e.bonusPoints,t.bonusPointsUsed=e.bonusPoints),e.carInfo?t.carInfo=!0:t.carInfo=!1,t.confirmOder()})},confirmOder:function(){var t=this.getorderInfo;t.shippingType=this.orderData.shippingType,this.address.lastName.length>0&&(t.lastName=this.address.lastName,t.primaryPhone=this.address.phonePrimary,t.city=this.address.addressCity,t.district=this.address.addressDistrict,t.state=this.address.addressState,t.street=this.address.addressStreet);var e=this;Object(b.a)(this,"/api/order/confirm",{data:o()(t)},"post","",function(t){if(e.orderData=t.orderData,e.bonusPointsUsed=e.bonusPointsUsed>e.orderData.subTotal+e.orderData.serviceFee?e.orderData.subTotal+e.orderData.serviceFee:e.bonusPointsUsed,t.orderData.preorderTime){var s=new Date(t.orderData.preorderTime);e.startDate=Object(b.c)(s,"yyyy-MM-dd"),e.endDate=e.getEndDate(t.orderData.preorderTime)}e.distribut=e.orderData.shippingType,e.shippingType=t.shippingOptions,e.oderdefault.payments.length>0&&(e.orderData.payment=e.oderdefault.payments[0].id)}),this.couponsOder()},couponsOder:function(){var t=this.getorderInfo,e=this;Object(b.a)(this,"/api/order/coupons",{data:o()(t)},"post","",function(t){t.availableCount&&(e.availableCount=t.availableCount),t.available&&(e.available=t.available),t.unavailable&&(e.unavailable=t.unavailable);var s=[];e.available.length>0&&(e.defuletCoupons=t.available[0],s.push(t.available[0])),e.selectCoupons=s;var a=0;for(var i in s)a+=s[i].discount;e.couponsMoney=a})},getEndDate:function(t){var e=new Date(t);return e.setTime(e.getTime()+27648e5),e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},getCoupon:function(){this.chooseCoupon=!this.chooseCoupon},gotoAddress:function(){this.$router.push({name:"addressList"})},selectCoupon:function(t){if(-1!==this.selectCoupons.indexOf(t))this.selectCoupons=[];else{var e=[];e.push(t),this.selectCoupons=e}},mshowfp:function(){this.$router.push({name:"invoiceInfo"})},changes:function(t){1==t?unitCheckbox=!1:personCheckbox=!1},switchlist:function(t,e){this.tabkey=e},coupons:function(){this.$router.push({path:"/home/getcoupons"})},gotopro:function(){this.$router.push({name:"protocol"})},gotoback:function(){this.$router.go(-1)},gotoplay:function(){if(0!=this.checkbox1)if(0!=this.address.lastName.length)if(0!=this.orderData.payment.length){this.orderData.shippingType=this.distribut,this.orderData.invoiceTitle=this.invoice.invoiceTitle,this.orderData.taxNumber=this.invoice.taxNumber,this.orderData.invoiceType=this.invoice.invoiceType,this.orderData.isBonusPointsUsed=this.isBonusPointsUsed,0==this.isBonusPointsUsed?this.orderData.bonusPointsUsed=0:this.orderData.bonusPointsUsed=this.bonusPointsUsed,this.orderData.msg=this.msg,this.orderData.preorderTime=this.orderDate,this.orderData.coupons=[];var t=this;this.selectCoupons.forEach(function(e){t.orderData.coupons.push(e.code)}),this.orderData.lastname=this.address.lastName,this.orderData.primaryPhone=this.address.phonePrimary,this.orderData.city=this.address.addressCity,this.orderData.district=this.address.addressDistrict,this.orderData.state=this.address.addressState,this.orderData.street=this.address.addressStreet,Object(b.a)(this,"/api/order/checkout",{data:o()(this.orderData)},"post","提交中...",function(e){t.paytotalFee=e.total_fee,e.total_fee?0==e.total_fee?this.$router.replace({name:"myOderList",query:{type:1}}):t.perPay(e):this.$router.replace({name:"myOderList",query:{type:1}})})}else this.$dialog.toast({mes:"请选择支付方式",timeout:1e3});else this.$dialog.toast({mes:"请选择地址",timeout:1e3});else this.$dialog.toast({mes:"请确认用户须知",timeout:1e3})},perPay:function(t){var e=this;Object(b.a)(this,"/api/order/prePay",t,"post","提交中...",function(t){e.payInfo=t.payInfo,window.location.href="https://pay.swiftpass.cn/pay/jspay?token_id="+e.payInfo.token_id+"&showwxtitle=1"})}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("yd-layout",{attrs:{id:"orderSub"}},[a("yd-navbar",{attrs:{slot:"navbar",title:"订单提交",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[a("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(e){t.gotoback()}},slot:"left"},[a("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),a("div",{staticClass:"userinfo",on:{click:function(e){t.gotoAddress()}}},[t.address.lastName.length>0?a("div",{staticClass:"defalutaddress"},[a("div",{staticClass:"infomation",staticStyle:{"font-size":".3rem"}},[a("span",{staticStyle:{"line-height":"0.5rem"}},[t._v(t._s(t.address.lastName))]),t._v(" "),a("span",{staticStyle:{"line-height":"0.5rem"}},[t._v(t._s(t.address.phonePrimary))]),t._v(" "),a("span",{staticStyle:{border:"1px solid #d41d0f","border-radius":"2px",padding:"2px 5px",color:"#d41d0f","font-size":"0.2rem"}},[t._v("默认")]),t._v(" "),a("p",{staticClass:"areaInfo"},[t._v(t._s(t.joinaddress))])]),t._v(" "),a("span",{staticClass:"choose"})]):a("div",{staticClass:"defalutaddress"},[a("p",{staticClass:"noaddressInfo"},[t._v("请设置地址")]),t._v(" "),a("span",{staticClass:"choose"})])]),t._v(" "),a("yd-cell-group",{staticStyle:{"margin-top":"10px","z-index":"-1"}},[a("yd-cell-item",{attrs:{arrow:"",type:"label"}},[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("支付方式")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.orderData.payment,expression:"orderData.payment"}],staticClass:"main_3",attrs:{slot:"right"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.orderData,"payment",e.target.multiple?s:s[0])}},slot:"right"},t._l(t.oderdefault.payments,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.description))])}))]),t._v(" "),a("yd-cell-item",{attrs:{arrow:"",type:"label"}},[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("配送方式")]),t._v(" "),"BOTH"==t.shippingType?a("select",{directives:[{name:"model",rawName:"v-model",value:t.distribut,expression:"distribut"}],staticClass:"main_3",attrs:{slot:"right"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.distribut=e.target.multiple?s:s[0]}},slot:"right"},t._l(t.distribution,function(e){return a("option",{domProps:{value:e.type}},[t._v(t._s(e.name))])})):a("span",{staticStyle:{"font-size":"0.3rem"},attrs:{slot:"right"},slot:"right"},[t._v("\n          "+t._s("DELIVERY"==t.orderData.shippingType?"快递":"门店自提")+"\n      ")])]),t._v(" "),a("yd-cell-item",{attrs:{arrow:""},nativeOn:{click:function(e){t.mshowfp(e)}}},[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("发票")]),t._v(" "),a("span",{staticStyle:{"font-size":"0.3rem"},attrs:{slot:"right"},slot:"right"},[t._v(t._s("NO"==t.invoice.invoiceType?"无需发票":"PERSONAL"==t.invoice.invoiceType?"个人-商品明细":"公司-商品明细"))])]),t._v(" "),a("yd-cell-item",{attrs:{arrow:""},nativeOn:{click:function(e){t.getCoupon()}}},[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("优惠券"),t.selectCoupons.length>0?a("span",{staticStyle:{border:"1px solid #d41d0f",padding:"0.05rem","font-size":"0.2rem !important",color:"#d41d0f","border-radius":"0.1rem","margin-left":"0.1rem"}},[t._v(t._s("已选择"+t.selectCoupons.length+"张")+" ")]):t._e()]),t._v(" "),0==t.availableCount?a("span",{staticStyle:{"font-size":"0.3rem"},attrs:{slot:"right"},slot:"right"},[t._v("无可用")]):0==t.couponsMoney?a("span",{staticStyle:{"font-size":"0.3rem"},attrs:{slot:"right"},slot:"right"},[t._v(t._s("可用优惠券"+t.available.length+"张"))]):a("span",{staticStyle:{"font-size":"0.3rem",color:"#d41d0f"},attrs:{slot:"right"},slot:"right"},[t._v(t._s("-"+t.couponsMoney+"元"))])]),t._v(" "),a("yd-cell-item",[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("是否使用积分")]),t._v(" "),a("yd-switch",{attrs:{slot:"right",disabled:0==t.bonusPoints},slot:"right",model:{value:t.isBonusPointsUsed,callback:function(e){t.isBonusPointsUsed=e},expression:"isBonusPointsUsed"}})],1),t._v(" "),t.isBonusPointsUsed?a("yd-cell-item",[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("抵扣积分(共"+t._s(t.bonusPoints)+"积分)")]),t._v(" "),a("span",{attrs:{slot:"right"},slot:"right"},[a("yd-spinner",{attrs:{max:t.bonusPoints>t.orderData.subTotal+t.orderData.serviceFee-t.couponsMoney?t.orderData.subTotal+t.orderData.serviceFee-t.couponsMoney:t.bonusPoints,unit:"1"},model:{value:t.bonusPointsUsed,callback:function(e){t.bonusPointsUsed=e},expression:"bonusPointsUsed"}})],1)]):t._e(),t._v(" "),a("yd-cell-item",[a("yd-textarea",{attrs:{slot:"right",placeholder:"请输入留言(选填)",maxlength:"30"},slot:"right",model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})],1)],1),t._v(" "),a("div",{staticClass:"products"},[a("div",{staticClass:"yd-accordion-title",staticStyle:{"border-bottom":"1px solid #e3e3e3"}},[a("span",{staticStyle:{"padding-left":"0.3rem","font-size":"0.3rem"}},[t._v("订单商品")])]),t._v(" "),a("div",[a("h3",[t._v("商品")]),t._v(" "),a("ul",{staticClass:"por",attrs:{slot:"list"},slot:"list"},t._l(t.orderData.items,function(t){return a("li",[a("goods",{attrs:{item:t,goodsType:"submit",showQuantity:!0}})],1)})),t._v(" "),t.orderData.gifts&&t.orderData.gifts.length>0?a("div",[a("h3",[t._v("赠品")]),t._v(" "),a("ul",{staticClass:"sever"},t._l(t.orderData.gifts,function(e){return a("li",[a("yd-flexbox",{staticStyle:{"margin-left":"16px"}},[a("yd-flexbox-item",[a("div",{staticClass:"titlediv"},[a("p",[t._v(t._s(e.skuName))]),t._v(" "),a("p",{staticStyle:{color:"#999"}},[t._v(t._s(e.description))])])]),t._v(" "),a("div",{staticClass:"titlediv",staticStyle:{"margin-right":"0.2rem",width:"1rem","text-align":"right"}},[a("p",{staticStyle:{color:"#df3448"}},[t._v("¥"+t._s(e.salePrice))]),t._v(" "),a("p",{staticStyle:{color:"#999"}},[t._v("×"+t._s(e.quantity))])])],1)],1)}))]):t._e(),t._v(" "),t.orderData.needService?a("div",[a("h3",[t._v("服务")]),t._v(" "),a("ul",{staticClass:"sever"},t._l(t.orderData.services,function(e){return a("li",[a("yd-flexbox",{staticStyle:{"margin-left":"16px"}},[a("yd-flexbox-item",[a("div",{staticClass:"titlediv"},[a("p",[t._v(t._s(e.serviceName))]),t._v(" "),a("p",{staticStyle:{color:"#999"}},[t._v(t._s(e.description))])])]),t._v(" "),a("div",{staticClass:"titlediv",staticStyle:{"margin-right":"0.2rem",width:"1rem","text-align":"right"}},[a("p",{staticStyle:{color:"#df3448"}},[t._v("¥"+t._s(e.servicePrice))]),t._v(" "),a("p",{staticStyle:{color:"#999"}},[t._v("×"+t._s(e.quantity))])])],1)],1)}))]):t._e()])]),t._v(" "),a("div",{staticClass:"payinfo"},[a("p",[a("span",{staticClass:"label"},[t._v("商品总额")]),t._v(" "),a("span",{staticClass:"price"},[t._v("¥"+t._s(t.orderData.subTotal))])]),t._v(" "),a("p",[a("span",{staticClass:"label"},[t._v("服务费")]),t._v(" "),a("span",{staticClass:"price"},[t._v("¥"+t._s(t.orderData.serviceFee))])]),t._v(" "),a("p",[a("span",{staticClass:"label"},[t._v("运费")]),t._v(" "),a("span",{staticClass:"price"},[t._v("¥"+t._s(t.orderData.shipmentFee))])]),t._v(" "),a("p",[a("span",{staticClass:"label"},[t._v("优惠券")]),t._v(" "),a("span",{staticClass:"price discount"},[t._v("-¥"+t._s(t.couponsMoney))])]),t._v(" "),t.isBonusPointsUsed?a("p",[a("span",{staticClass:"label"},[t._v("积分抵扣金额")]),t._v(" "),a("span",{staticClass:"price discount"},[t._v("-¥"+t._s(t.bonusPointsUsed)+" ")])]):t._e(),t._v(" "),a("div",{staticStyle:{"padding-top":"0.3rem"},attrs:{id:"hyxz"}},[a("yd-checkbox",{attrs:{shape:"circle",color:"#d41d0f",size:"16"},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}}),a("span",{staticStyle:{"font-size":"12px","text-decoration":"underline",color:"#d41d0f"},on:{click:function(e){t.gotopro()}}},[t._v("《退换货须知》")])],1)]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"1.5rem"}}),t._v(" "),a("div",{staticClass:"submitorder",attrs:{slot:"tabbar"},slot:"tabbar"},[a("div",{staticStyle:{width:"60%","text-align":"left","padding-left":"0.2rem"}},[t._v("实付款:¥"),t.isBonusPointsUsed?a("span",[t._v(t._s(t.orderData.total-t.couponsMoney-t.bonusPointsUsed))]):a("span",[t._v(t._s(t.orderData.total-t.couponsMoney))])]),t._v(" "),a("div",{staticClass:"subbtn",staticStyle:{width:"40%"},on:{click:t.gotoplay}},[t._v("提交订单")])]),t._v(" "),a("yd-popup",{attrs:{position:"bottom",height:"60%",id:"coupon"},model:{value:t.chooseCoupon,callback:function(e){t.chooseCoupon=e},expression:"chooseCoupon"}},[a("yd-tab",{attrs:{slot:"top",callback:t.switchlist},slot:"top"},[a("yd-tab-panel",{attrs:{label:"可用优惠券",tabkey:"1"}}),t._v(" "),a("yd-tab-panel",{attrs:{label:"不可用优惠券",tabkey:"2"}})],1),t._v(" "),0!=t.available.length&&"1"==t.tabkey?a("div",[t.selectCoupons.length>0?a("div",{staticClass:"warnTxt"},[a("span",{staticStyle:{"line-height":"0.6rem"}},[t._v("您已选中优惠券"+t._s(t.selectCoupons.length)+"张,共可抵用"),a("span",{staticStyle:{color:"#eb0026"}},[t._v("¥"+t._s(t.couponsMoney)+"元")])])]):t._e(),t._v(" "),a("ul",{staticClass:"coupon",staticStyle:{"min-height":"10rem"}},t._l(t.available,function(e){return a("li",[a("yd-flexbox",{staticStyle:{height:"1.5rem"}},[a("div",{staticClass:"couponBg",staticStyle:{height:"100%",padding:"0.2rem",width:"2rem"}},[a("p",{staticStyle:{"font-size":".3rem","font-weight":"bold",color:"#ffffff"}},[t._v("￥"),a("em",{staticStyle:{"font-size":"0.6rem"}},[t._v(t._s(e.discount))])]),t._v(" "),a("span",{staticStyle:{color:"#FFFFFF"}},[t._v(t._s(e.orderRequirement>0?"满"+e.orderRequirement+"可用":"无金额门槛"))])]),t._v(" "),a("yd-flexbox-item",{staticStyle:{"padding-left":"0.15rem"}},[a("p",{staticStyle:{"min-height":"1rem","font-size":"0.3rem"}},[t._v(t._s(e.description))]),t._v(" "),a("div",{staticStyle:{display:"block"}},[a("span",{staticStyle:{padding:"3px 0"}},[t._v(t._s(t._f("formatDate")(e.startTime))+"—"+t._s(t._f("formatDate")(e.endTime)))]),t._v(" "),-1===t.selectCoupons.indexOf(e)?a("yd-badge",{staticStyle:{"margin-right":"0.2rem",float:"right"},attrs:{type:"disabled"},nativeOn:{click:function(s){t.selectCoupon(e)}}},[t._v("立即使用\n                ")]):a("yd-badge",{staticStyle:{"margin-right":"0.2rem","background-color":"#d41d0f",float:"right"},attrs:{type:"danger"},nativeOn:{click:function(s){t.selectCoupon(e)}}},[t._v("已选择\n                ")])],1)])],1)],1)}))]):0!=t.unavailable.length&&"2"==t.tabkey?a("ul",{staticClass:"coupon1",staticStyle:{"min-height":"10rem"}},t._l(t.unavailable,function(e){return a("li",[a("yd-flexbox",{staticStyle:{height:"1.5rem"}},[a("div",{staticStyle:{height:"100%","background-color":"#BBBBBB",padding:"0.2rem",width:"2rem"}},[a("p",{staticStyle:{"font-size":".3rem","font-weight":"bold",color:"#ffffff"}},[t._v("￥"),a("em",{staticStyle:{"font-size":"0.6rem"}},[t._v(t._s(e.discount))])]),t._v(" "),a("span",{staticStyle:{color:"#FFFFFF"}},[t._v(t._s(e.orderRequirement>0?"满"+e.orderRequirement+"可用":"无金额门槛"))])]),t._v(" "),a("yd-flexbox-item",{staticStyle:{"padding-left":"0.15rem"}},[a("p",{staticStyle:{"min-height":"1rem","font-size":"0.3rem"}},[t._v(t._s(e.description))]),t._v(" "),a("div",{staticStyle:{display:"block",color:"#707070"}},[a("span",{staticStyle:{padding:"3px 0"}},[t._v(t._s(t._f("formatDate")(e.startTime))+"—"+t._s(t._f("formatDate")(e.endTime)))])])])],1)],1)})):a("div",{staticStyle:{"text-align":"center",height:"10rem"}},[a("p",[a("img",{attrs:{src:s("evVK"),width:"30%"}})]),t._v(" "),a("p",[t._v("没有券？")]),t._v(" "),a("p",{staticStyle:{color:"#999999","line-height":".5rem"}},[t._v("去领券中心看看吧")]),t._v(" "),a("p",{staticStyle:{"line-height":"1.5rem"}},[a("yd-button",{staticStyle:{"background-color":"#D9D9D9",border:"1px solid #999999",width:"20%"},attrs:{type:"hollow"},nativeOn:{click:function(e){t.coupons(e)}}},[t._v("去看看")])],1)])],1)],1)},staticRenderFns:[]};var x=s("VU/8")(C,S,!1,function(t){s("/k3S"),s("Oar6")},"data-v-a94901ca",null);e.default=x.exports},Oar6:function(t,e){},evVK:function(t,e,s){t.exports=s.p+"static/img/myyhq.c20b577.png"}});
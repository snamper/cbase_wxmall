webpackJsonp([12],{"08XL":function(_,e,t){t("xL5C"),t("Bcbh"),t("vQRh"),t("9nkg")},"G/J0":function(_,e,t){t("xL5C"),t("Bcbh"),t("vQRh")},KduV:function(_,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("rpmR"),a={render:function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("yd-layout",[t("yd-navbar",{attrs:{slot:"navbar",title:"商品详情",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[t("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(e){_.gotoback()}},slot:"left"},[t("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),_._v(" "),t("van-swipe",{staticStyle:{transform:"none"},style:{height:_.screenWidth+"px"},attrs:{autoplay:3e3}},_._l(_.skuModel.images,function(e,i){return t("van-swipe-item",{key:i,staticClass:"thumb"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"image"}],on:{click:function(e){_.showPreview(i)}}})])})),_._v(" "),t("van-cell-group",{attrs:{id:"active"}},[t("van-cell",{staticClass:"actvie"},[t("van-col",{attrs:{span:"10"}},[t("div",{staticClass:"price"},[t("span",[t("em",[_._v("¥")]),_._v(_._s(_.skuModel.price))]),_._v(" "),_.skuModel.salePrice?t("span",{staticClass:"del_price"},[t("em",[_._v("¥")]),_._v(_._s(_.skuModel.salePrice))]):_._e()])]),_._v(" "),t("van-col",{staticStyle:{position:"absolute",right:"10px"}},[t("div",[_._v("距活动结束时间还剩")]),_._v(" "),t("div",[t("yd-countdown",{attrs:{time:_.endTime,id:"times"}},[t("span",[t("em",[_._v("{%d}")])]),_._v("天\n            "),t("span",[t("em",[_._v("{%h}")])]),_._v("小时\n            "),t("span",[t("em",[_._v("{%m}")])]),_._v("时\n            "),t("span",[t("em",[_._v("{%s}")])]),_._v("秒\n          ")])],1)])],1),_._v(" "),t("van-cell",[t("div",{staticClass:"goods-title"},[_._v(_._s(_.skuModel.skuName))]),_._v(" "),t("div",{staticClass:"goods-des"},[_._v(_._s(_.skuModel.skuDescription))])])],1),_._v(" "),t("van-cell-group",{staticStyle:{"margin-top":"0.2rem"}},[t("van-cell",[t("van-col",{staticStyle:{color:"#9c9c9c"},attrs:{span:"10"}},[_._v("剩余："+_._s(_.skuModel.stock)+"件")])],1)],1),_._v(" "),_._e(),_._v(" "),t("van-cell-group",{staticStyle:{"margin-top":"0.2rem","margin-bottom":"1.5rem"}},[t("van-cell",[_._v("\n      商品详情\n    ")]),_._v(" "),t("van-cell",[t("van-col",{staticStyle:{"border-right":"1px solid #f5f5f5","border-bottom":"1px solid #f5f5f5"},attrs:{span:"12"}},[_._v("等级"+_._s(_.param.greade))]),_._v(" "),t("van-col",{staticStyle:{"border-bottom":"1px solid #f5f5f5","padding-left":"0.2rem"},attrs:{span:"12"}},[_._v("规格"+_._s(_.param.model))]),_._v(" "),t("van-col",{staticStyle:{"border-right":"1px solid #f5f5f5","padding-right":"0.2rem"},attrs:{span:"12"}},[_._v("单位"+_._s(_.param.unit))]),_._v(" "),t("van-col",{staticStyle:{"padding-left":"0.2rem"},attrs:{span:"12"}},[_._v("产地"+_._s(_.param.place))])],1),_._v(" "),t("van-cell",{staticStyle:{padding:"0px",margin:"0","line-height":"normal"}},[t("div",{staticClass:"detal"},_._l(_.descriptions,function(e,i){return t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"img"}],key:i,on:{click:function(e){_.showPreviewDetail(i)}}})}))])],1),_._v(" "),t("van-goods-action",{attrs:{slot:"tabbar"},slot:"tabbar"},[t("van-goods-action-mini-btn",{attrs:{icon:"chat",text:"客服"}}),_._v(" "),t("van-goods-action-mini-btn",{attrs:{icon:"cart",text:"购物车",info:_.quantity+""},on:{click:function(e){_.gotoCar()}}}),_._v(" "),t("van-goods-action-big-btn",{attrs:{text:"SECKILL"==_.promotionType?"立即购买":"立即开团",primary:""},on:{click:function(e){_.showBase=!_.showBase}}})],1),_._v(" "),t("van-sku",{attrs:{slot:"tabbar",sku:_.sku,goods:_.goods,"goods-id":_.goodsId,"hide-stock":_.sku.hide_stock,quota:_.quota,"reset-stepper-on-hide":_.sku.resetStepperOnHide,"reset-selected-sku-on-hide":_.sku.resetSelectedSkuOnHide},on:{"buy-clicked":_.gotoOder},slot:"tabbar",scopedSlots:_._u([{key:"sku-actions",fn:function(e){return[t("div",{staticClass:"van-sku-actions"},[t("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:function(_){e.skuEventBus.$emit("sku:buy")}}},[_._v("下一步")])],1)]}}]),model:{value:_.showBase,callback:function(e){_.showBase=e},expression:"showBase"}})],1)},staticRenderFns:[]};var n=function(_){t("VAqR")},o=t("VU/8")(i.a,a,!1,n,"data-v-82ea3bd8",null);e.default=o.exports},VAqR:function(_,e){},rpmR:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview_style__=__webpack_require__("i9vB"),__WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview_style__),__WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview__=__webpack_require__("Mqtp"),__WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__=__webpack_require__("bOdI"),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__),__WEBPACK_IMPORTED_MODULE_3_vant_lib_button_style__=__webpack_require__("FDxC"),__WEBPACK_IMPORTED_MODULE_3_vant_lib_button_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vant_lib_button_style__),__WEBPACK_IMPORTED_MODULE_4_vant_lib_button__=__webpack_require__("w+oK"),__WEBPACK_IMPORTED_MODULE_4_vant_lib_button___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vant_lib_button__),__WEBPACK_IMPORTED_MODULE_5_vant_lib_sku_style__=__webpack_require__("SpPX"),__WEBPACK_IMPORTED_MODULE_5_vant_lib_sku_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vant_lib_sku_style__),__WEBPACK_IMPORTED_MODULE_6_vant_lib_sku__=__webpack_require__("yqud"),__WEBPACK_IMPORTED_MODULE_6_vant_lib_sku___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vant_lib_sku__),__WEBPACK_IMPORTED_MODULE_7_vant_lib_goods_action_mini_btn_style__=__webpack_require__("69Li"),__WEBPACK_IMPORTED_MODULE_7_vant_lib_goods_action_mini_btn_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vant_lib_goods_action_mini_btn_style__),__WEBPACK_IMPORTED_MODULE_8_vant_lib_goods_action_mini_btn__=__webpack_require__("RI/5"),__WEBPACK_IMPORTED_MODULE_8_vant_lib_goods_action_mini_btn___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vant_lib_goods_action_mini_btn__),__WEBPACK_IMPORTED_MODULE_9_vant_lib_goods_action_big_btn_style__=__webpack_require__("mAGR"),__WEBPACK_IMPORTED_MODULE_9_vant_lib_goods_action_big_btn_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vant_lib_goods_action_big_btn_style__),__WEBPACK_IMPORTED_MODULE_10_vant_lib_goods_action_big_btn__=__webpack_require__("NYHp"),__WEBPACK_IMPORTED_MODULE_10_vant_lib_goods_action_big_btn___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vant_lib_goods_action_big_btn__),__WEBPACK_IMPORTED_MODULE_11_vant_lib_goods_action_style__=__webpack_require__("JtRP"),__WEBPACK_IMPORTED_MODULE_11_vant_lib_goods_action_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vant_lib_goods_action_style__),__WEBPACK_IMPORTED_MODULE_12_vant_lib_goods_action__=__webpack_require__("EJoZ"),__WEBPACK_IMPORTED_MODULE_12_vant_lib_goods_action___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_vant_lib_goods_action__),__WEBPACK_IMPORTED_MODULE_13_vant_lib_col_style__=__webpack_require__("dKGA"),__WEBPACK_IMPORTED_MODULE_13_vant_lib_col_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_vant_lib_col_style__),__WEBPACK_IMPORTED_MODULE_14_vant_lib_col__=__webpack_require__("kSul"),__WEBPACK_IMPORTED_MODULE_14_vant_lib_col___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vant_lib_col__),__WEBPACK_IMPORTED_MODULE_15_vant_lib_cell_group_style__=__webpack_require__("QP/A"),__WEBPACK_IMPORTED_MODULE_15_vant_lib_cell_group_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_vant_lib_cell_group_style__),__WEBPACK_IMPORTED_MODULE_16_vant_lib_cell_group__=__webpack_require__("pyxX"),__WEBPACK_IMPORTED_MODULE_16_vant_lib_cell_group___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_vant_lib_cell_group__),__WEBPACK_IMPORTED_MODULE_17_vant_lib_cell_style__=__webpack_require__("cnGM"),__WEBPACK_IMPORTED_MODULE_17_vant_lib_cell_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_vant_lib_cell_style__),__WEBPACK_IMPORTED_MODULE_18_vant_lib_cell__=__webpack_require__("S6j6"),__WEBPACK_IMPORTED_MODULE_18_vant_lib_cell___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_vant_lib_cell__),__WEBPACK_IMPORTED_MODULE_19_vant_lib_swipe_item_style__=__webpack_require__("G/J0"),__WEBPACK_IMPORTED_MODULE_19_vant_lib_swipe_item_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_vant_lib_swipe_item_style__),__WEBPACK_IMPORTED_MODULE_20_vant_lib_swipe_item__=__webpack_require__("beN6"),__WEBPACK_IMPORTED_MODULE_20_vant_lib_swipe_item___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_vant_lib_swipe_item__),__WEBPACK_IMPORTED_MODULE_21_vant_lib_swipe_style__=__webpack_require__("08XL"),__WEBPACK_IMPORTED_MODULE_21_vant_lib_swipe_style___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_vant_lib_swipe_style__),__WEBPACK_IMPORTED_MODULE_22_vant_lib_swipe__=__webpack_require__("24wo"),__WEBPACK_IMPORTED_MODULE_22_vant_lib_swipe___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_vant_lib_swipe__),__WEBPACK_IMPORTED_MODULE_23_babel_runtime_helpers_extends__=__webpack_require__("Dd8w"),__WEBPACK_IMPORTED_MODULE_23_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_24__config_mUtils__=__webpack_require__("yclV"),__WEBPACK_IMPORTED_MODULE_25__config_env__=__webpack_require__("uaSg"),__WEBPACK_IMPORTED_MODULE_26_vuex__=__webpack_require__("NYxO"),_components,vm={computed:__WEBPACK_IMPORTED_MODULE_23_babel_runtime_helpers_extends___default()({},Object(__WEBPACK_IMPORTED_MODULE_26_vuex__.b)(["quantity"])),components:(_components={},__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_22_vant_lib_swipe___default.a.name,__WEBPACK_IMPORTED_MODULE_22_vant_lib_swipe___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_20_vant_lib_swipe_item___default.a.name,__WEBPACK_IMPORTED_MODULE_20_vant_lib_swipe_item___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_18_vant_lib_cell___default.a.name,__WEBPACK_IMPORTED_MODULE_18_vant_lib_cell___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_16_vant_lib_cell_group___default.a.name,__WEBPACK_IMPORTED_MODULE_16_vant_lib_cell_group___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_14_vant_lib_col___default.a.name,__WEBPACK_IMPORTED_MODULE_14_vant_lib_col___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_12_vant_lib_goods_action___default.a.name,__WEBPACK_IMPORTED_MODULE_12_vant_lib_goods_action___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_10_vant_lib_goods_action_big_btn___default.a.name,__WEBPACK_IMPORTED_MODULE_10_vant_lib_goods_action_big_btn___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_8_vant_lib_goods_action_mini_btn___default.a.name,__WEBPACK_IMPORTED_MODULE_8_vant_lib_goods_action_mini_btn___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_6_vant_lib_sku___default.a.name,__WEBPACK_IMPORTED_MODULE_6_vant_lib_sku___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_4_vant_lib_button___default.a.name,__WEBPACK_IMPORTED_MODULE_4_vant_lib_button___default.a),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()(_components,__WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview___default.a.name,__WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview___default.a),_components),data:function(){return{screenWidth:document.body.clientWidth,promotionType:"",showBase:!1,promotionId:"",securitylst:["正品保障","正规发票","自营门店"],param:{},descriptions:[],sku:{tree:[],list:[],none_sku:!0,stock_num:1,collection_id:0,price:"",messages:[{datetime:"0",multiple:"0",name:"留言",type:"text",required:"0"}],hide_stock:!1,resetStepperOnHide:!0,resetSelectedSkuOnHide:!0},goods:{title:"",picture:""},quota:0,skuModel:{},goodsId:"",endTime:""}},mounted:function(){this.promotionId=this.$route.query.promotionId,this.promotionType=this.$route.query.promotionType;var _=this;window.onresize=function(){return window.screenWidth=document.body.clientWidth,void(_.screenWidth=window.screenWidth)},this.getDetail()},methods:{gotoback:function(){this.$router.go(-1)},getDetail:function getDetail(){var that=this;Object(__WEBPACK_IMPORTED_MODULE_25__config_env__.a)(this,"/api/promotion/detail",{promotionId:this.promotionId},"get","加载中...",function(data){var tree=[],promotion=data.promotion;1==promotion.limit&&(that.quota=promotion.limitQuantity),that.formatPrice(promotion.endTime),promotion.attrs&&(promotion.attrs.forEach(function(_){var e={};for(var t in _)for(var i in e.k=t,e.k_s=t,e.v=[],_[t])e.v.push({id:_[t][i],name:_[t][i]});tree.push(e)}),that.sku.tree=tree),promotion.skuModels&&(that.sku.none_sku=!1,promotion.skuModels.forEach(function(item){for(var key in item.attrs)eval("item."+key+'="'+item.attrs[key]+'"');item.id=item.skuId,item.stock_num=item.stock,item.price=100*item.price}),that.sku.list=promotion.skuModels),promotion.skuModel&&(that.skuModel=promotion.skuModel,that.sku.stock_num=promotion.skuModel.stock,that.sku.price=promotion.skuModel.price,that.sku.collection_id=promotion.skuModel.skuId,that.goods.picture=promotion.skuModel.image,that.goods.title=promotion.skuModel.skuName,that.goodsId=promotion.skuModel.skuId),that.productDesc()})},productDesc:function(){var _=this;Object(__WEBPACK_IMPORTED_MODULE_25__config_env__.a)(this,"/api/mall/productDesc",{skuId:this.skuModel.skuId},"get","",function(e){e.images&&(e.images.descriptions&&(_.descriptions=e.images.descriptions),e.images.param&&(_.param=e.images.param))})},formatPrice:function(_){var e=new Date(_),t=e.getFullYear()+"/",i=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"/",a=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",n=e.getHours()+":",o=e.getMinutes()+":",l=e.getSeconds();this.endTime=t+i+a+n+o+l},showPreview:function(_){__WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview___default()(this.skuModel.images,_)},showPreviewDetail:function(_){__WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview___default()(this.descriptions,_)},gotoCar:function(){this.$router.push({name:"shoppingCart",meta:{title:"购物车"}})},gotoOder:function(_){var e="";e=_.selectedSkuComb?_.selectedSkuComb.id:_.goodsId;var t={},i=Object(__WEBPACK_IMPORTED_MODULE_24__config_mUtils__.a)("cityInfo");i.cityName?t.location=i.cityName:t.location="重庆",t.orderType=this.promotionType;var a=[],n={};n.skuId=e,n.appliedPromotionId=this.promotionId,n.isPromotionApplied=!0,n.quantity=_.selectedNum,a.push(n),t.products=a,Object(__WEBPACK_IMPORTED_MODULE_24__config_mUtils__.e)("oderInfo",t),this.$router.push({name:"orderSubmit"})}}};__webpack_exports__.a=vm}});
webpackJsonp([31],{"3itV":function(t,e){},BFZ3:function(t,e){},rzxk:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("uaSg"),s=i("8NGk"),r={data:function(){return{id:"",urls:[],isCookie:!1,storeInfo:{},carInfo:{},weixinInfo:{},latitude:"",longitude:"",medias:[],services:[],checkservices:[],serviceModelList:[],totalMoney:0,pointA:"",distancekm:"计算中"}},watch:{checkservices:{deep:!0,handler:function(t,e){this.calculateMoney()}}},mounted:function(){this.id=this.$route.query.id,this.getStroeDetail()},methods:{getMyPoint:function(t){var e=this;(new BMap.Geolocation).getCurrentPosition(function(i){e.pointA=new BMap.Point(i.point.lng,i.point.lat),e.getDistance(t)})},getDistance:function(t){var e=new BMap.Map(""),i=new BMap.Point(parseFloat(t.lng),parseFloat(t.lat)),o=(e.getDistance(this.pointA,i)/1e3).toFixed(2);this.distancekm=o+"km"},getStroeDetail:function(){var t=this;Object(o.a)(this,"/api/store/detail",{merchantId:this.id},"get","加载中...",function(e){if(e.urls&&(t.urls=e.urls),e.store&&(t.storeInfo=e.store),e.store.medias&&(t.medias=e.store.medias),e.serviceModelList&&(t.serviceModelList=e.serviceModelList),e.store.longitude&&e.store.latitude){var i={lng:e.store.longitude,lat:e.store.latitude};t.getMyPoint(i)}})},calculateMoney:function(){var t=0;for(var e in this.checkservices)t+=parseFloat(this.checkservices[e].servicePrice);this.totalMoney=t},selectItem:function(t){this.checkservices.splice(0,this.checkservices.length),this.checkservices.push(t)},signature:function(){var t=this;Object(o.a)(this,"/wechat/jsapi/signature",{url:window.location.href},"post","",function(e){e.signature&&(t.weixinInfo=e.signature,t.getLocation())})},getLocation:function(){Object(s.b)(this.weixinInfo,this.storeInfo,function(t){},function(t){})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("yd-layout",{attrs:{id:"stroeDetail"}},[i("yd-navbar",{attrs:{slot:"navbar",title:"门店详情",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[i("router-link",{attrs:{slot:"left",to:"/stores"},slot:"left"},[i("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),i("yd-slider",{staticStyle:{"min-height":"4rem"},attrs:{autoplay:"3000"}},t._l(t.urls,function(t){return i("yd-slider-item",{key:t},[i("img",{attrs:{src:t}})])})),t._v(" "),i("yd-cell-group",{staticStyle:{"margin-bottom":"0px"}},[i("yd-cell-item",{staticStyle:{"padding-top":"0.1rem","padding-bottom":"0.1rem"}},[i("span",{staticStyle:{width:"100%"},attrs:{slot:"left"},slot:"left"},[i("p"),i("div",{staticStyle:{"font-size":"0.35rem",overflow:"hidden","text-overflow":"ellipsis","-webkit-line-clamp":"1","-webkit-box-orient":"vertical"}},[t._v(t._s(t.storeInfo.storeName))]),i("p"),t._v(" "),i("p",[i("span",{staticStyle:{color:"#999","font-size":".27rem"}},[t._v("总订单 "),i("em",{staticStyle:{color:"#ff7d49"}},[t._v(t._s(t.storeInfo.orderCount?t.storeInfo.orderCount:"0"))])]),t._v(" "),i("span",{staticStyle:{color:"#999","font-size":".27rem"}},[t._v("|")]),t._v(" "),i("span",{staticStyle:{color:"#999","font-size":".27rem"}},[t._v("总评价 "),i("em",{staticStyle:{color:"#ff7d49"}},[t._v(t._s(t.storeInfo.ratesCount?t.storeInfo.ratesCount:"0"))])])]),t._v(" "),i("div",{staticStyle:{color:"#717273",overflow:"hidden","text-overflow":"ellipsis","-webkit-line-clamp":"1","-webkit-box-orient":"vertical"}},[t._v(t._s(t.storeInfo.storeAddress))])]),t._v(" "),i("span",{staticStyle:{"border-left":"1px solid #D9D9D9","margin-right":"0px"},attrs:{slot:"right"},slot:"right"},[i("a",{staticClass:"yd-tabbar-item  yd-tabbar-active",staticStyle:{"margin-left":"0.2rem"},on:{click:function(e){t.signature()}}},[i("yd-icon",{attrs:{name:"location",size:".6rem",color:"rgb(255, 125, 73)"}}),t._v(" "),i("span",{staticClass:"yd-tabbar-txt",staticStyle:{color:"#999"}},[t._v(t._s(t.distancekm))])],1)])])],1),t._v(" "),i("yd-cell-group",{staticStyle:{"margin-top":"0.2rem"},attrs:{title:"门店简介"}},[i("p",{staticStyle:{padding:"0.3rem","text-indent":"0.6rem","letter-spacing":"2px",color:"#717273","font-size":"0.3rem"}},[t._v(t._s(t.storeInfo.desc))])]),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1)},staticRenderFns:[]};var a=i("VU/8")(r,n,!1,function(t){i("BFZ3"),i("3itV")},"data-v-62e4f8d5",null);e.default=a.exports}});
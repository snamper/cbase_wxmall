webpackJsonp([50],{"1Asl":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("Dd8w"),o=e.n(s),l=e("uaSg"),n=e("NYxO"),a={data:function(){return{invoiceList:[],page:1,pageSize:10}},computed:o()({},Object(n.b)(["customerinfo"])),mounted:function(){this.page=1,this.invoicelist()},methods:{pullList:function(){this.page=1,this.invoicelist()},loadList:function(){this.page=this.page+1,this.invoicelist()},invoicelist:function(){var i=this,t={page:this.page,pageSize:this.pageSize,customerId:this.customerinfo.customerId};Object(l.a)(this,"/api/invoice/list",t,"get",1==this.page?"加载中...":"",function(t){1==i.page?t.data.recordList?(i.invoiceList=t.data.recordList,i.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad"),i.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.reInit")):(i.oderlist=[],i.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad")):t.recordList?(i.oderlist=i.oderlist.concat(t.data.recordList),t.data.recordList&&t.data.recordList.length!=i.pageSize?i.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone"):i.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad")):i.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone")})},gotoback:function(){this.$router.go(-1)},gotoSign:function(i){window.location.href=i.invoiceUrl}}},r={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("yd-layout",[e("yd-navbar",{attrs:{slot:"navbar",title:"我的发票",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[e("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(t){i.gotoback()}},slot:"left"},[e("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),i._v(" "),e("yd-pullrefresh",{ref:"pullrefreshDemo",attrs:{callback:i.pullList}},[e("yd-infinitescroll",{ref:"infinitescrollDemo",attrs:{callback:i.loadList}},[e("article",{staticClass:"receipt",attrs:{slot:"list"},slot:"list"},[e("ul",i._l(i.invoiceList,function(t){return e("li",[e("div",{staticClass:"fle"},[e("div",{staticClass:"cell"},[i._v(i._s("流水号"+t.outTradeNo))]),i._v(" "),e("time")]),i._v(" "),e("div",{staticClass:"fle"},[e("div",{staticClass:"cell"},[e("div",{staticClass:"name"},[i._v("电子发票")]),i._v(" "),e("p",{staticClass:"price"},[i._v("¥"+i._s(t.orderTatal))])]),i._v(" "),e("div",{on:{click:function(e){i.gotoSign(t)}}},[e("span",{staticClass:"sign writing"},[i._v("查看发票")])])])])}))])])],1)],1)},staticRenderFns:[]};var c=e("VU/8")(a,r,!1,function(i){e("B6X5")},"data-v-b91a92ec",null);t.default=c.exports},B6X5:function(i,t){}});
webpackJsonp([28],{"9TZA":function(t,i){},MjBz:function(t,i){},ylMp:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("Dd8w"),n=e.n(o),l=e("NYxO"),c={computed:n()({},Object(l.b)(["invoice"])),data:function(){return{spmx:"商品明细"}},mounted:function(){},methods:{gotoback:function(){this.$router.go(-1)},invoiceok:function(){if("PERSONAL"==this.invoice.invoiceType){if(0==this.invoice.invoiceTitle.length)return void this.$dialog.toast({mes:"请输入发票信息",timeout:1e3})}else if("COMPANY"==this.invoice.invoiceType){if(0==this.invoice.invoiceTitle.length)return void this.$dialog.toast({mes:"请输入发票信息",timeout:1e3});if(0==this.invoice.taxNumber.length)return void this.$dialog.toast({mes:"请输入发票信息",timeout:1e3})}this.$store.dispatch("setInvoice",this.invoice),this.gotoback()}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{"background-color":"#ffffff"},attrs:{id:"invoice"}},[e("yd-navbar",{attrs:{slot:"navbar",title:"发票信息",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[e("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(i){t.gotoback()}},slot:"left"},[e("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),e("yd-flexbox",{staticStyle:{"padding-left":"0.24rem"},attrs:{direction:"vertical"}},[e("yd-flexbox-item",{staticStyle:{"font-size":"0.3rem",padding:"0.1rem 0"}},[t._v("发票类型")]),t._v(" "),e("yd-flexbox-item",{staticStyle:{"padding-bottom":"0.1rem"}},[e("yd-button",{attrs:{type:"hollow"}},[t._v("纸质发票")])],1)],1),t._v(" "),e("hr",{staticStyle:{border:"none","border-bottom":"1px solid #D9D9D9"}}),t._v(" "),e("yd-flexbox",{staticStyle:{"padding-left":"0.24rem","padding-bottom":"0.24rem"},attrs:{direction:"vertical"}},[e("yd-flexbox-item",{staticStyle:{"font-size":"0.3rem",padding:"0.1rem 0"}},[t._v("发票抬头")]),t._v(" "),e("yd-flexbox-item",{staticStyle:{"padding-bottom":"0.1rem"}},[e("yd-radio-group",{attrs:{color:"#F00"},model:{value:t.invoice.invoiceType,callback:function(i){t.$set(t.invoice,"invoiceType",i)},expression:"invoice.invoiceType"}},[e("yd-radio",{attrs:{val:"PERSONAL"}},[t._v("个人")]),t._v(" "),e("yd-radio",{attrs:{val:"COMPANY"}},[t._v("单位")]),t._v(" "),e("yd-radio",{attrs:{val:"NO"}},[t._v("无需发票")])],1)],1)],1),t._v(" "),e("hr",{staticStyle:{border:"none","border-bottom":".2rem solid #f5f5f5"}}),t._v(" "),"PERSONAL"==t.invoice.invoiceType?e("yd-cell-group",[e("yd-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("个人：")]),t._v(" "),e("yd-input",{attrs:{slot:"right",placeholder:"请输入个人姓名"},slot:"right",model:{value:t.invoice.invoiceTitle,callback:function(i){t.$set(t.invoice,"invoiceTitle",i)},expression:"invoice.invoiceTitle"}})],1),t._v(" "),e("yd-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("发票内容：")]),t._v(" "),e("yd-input",{attrs:{slot:"right",disabled:!0,placeholder:"商品明细"},slot:"right",model:{value:t.invoice.invoiceinfos,callback:function(i){t.$set(t.invoice,"invoiceinfos",i)},expression:"invoice.invoiceinfos"}})],1)],1):"COMPANY"==t.invoice.invoiceType?e("yd-cell-group",[e("yd-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("单位名称：")]),t._v(" "),e("yd-input",{attrs:{slot:"right",placeholder:"请输入单位名称"},slot:"right",model:{value:t.invoice.invoiceTitle,callback:function(i){t.$set(t.invoice,"invoiceTitle",i)},expression:"invoice.invoiceTitle"}})],1),t._v(" "),e("yd-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("单位税号：")]),t._v(" "),e("yd-input",{attrs:{slot:"right",placeholder:"纳税人识别号或统一社会信用代码"},slot:"right",model:{value:t.invoice.taxNumber,callback:function(i){t.$set(t.invoice,"taxNumber",i)},expression:"invoice.taxNumber"}})],1),t._v(" "),e("yd-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("发票内容：")]),t._v(" "),e("yd-input",{attrs:{slot:"right",id:"fpnr",disabled:!0,placeholder:"商品明细"},slot:"right",model:{value:t.invoice.invoiceinfos,callback:function(i){t.$set(t.invoice,"invoiceinfos",i)},expression:"invoice.invoiceinfos"}})],1)],1):t._e(),t._v(" "),e("div",{staticClass:"sure"},[e("yd-button",{attrs:{size:"large",bgcolor:"#d41d0f",color:"#fff",type:"danger"},nativeOn:{click:function(i){t.invoiceok()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]};var r=e("VU/8")(c,s,!1,function(t){e("9TZA"),e("MjBz")},"data-v-6f0813d4",null);i.default=r.exports}});
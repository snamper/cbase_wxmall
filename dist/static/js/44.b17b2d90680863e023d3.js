webpackJsonp([44],{DWoE:function(t,o){},"h+3q":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("uaSg"),r={data:function(){return{html:""}},mounted:function(){this.aboutus()},methods:{aboutus:function(){var t=this;Object(n.a)(this,"/api/store/baseInfo",{merchantId:this.$store.getters.store},"get","",function(o){o&&(t.html=o.storeDesc)})},gotoback:function(){this.$router.go(-1)}}},a={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("yd-layout",{staticStyle:{"background-color":"white"}},[e("yd-navbar",{attrs:{slot:"navbar",title:"关于",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[e("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(o){t.gotoback()}},slot:"left"},[e("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.html)}})],1)},staticRenderFns:[]};var s=e("VU/8")(r,a,!1,function(t){e("DWoE")},"data-v-95cf31bc",null);o.default=s.exports}});
webpackJsonp([46],{TG9o:function(t,o){},zJzH:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});n("yclV");var e=n("uaSg"),r={data:function(){return{pl:""}},mounted:function(){this.getprotocol()},methods:{gotoback:function(){this.$router.go(-1)},getprotocol:function(){var t=this;Object(e.a)(this,"/api/system/help?helpId=1",{},"get","获取中...",function(o){t.pl=o.contents})}}},a={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("yd-layout",[n("yd-navbar",{attrs:{slot:"navbar",title:"退换货须知",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[n("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(o){t.gotoback()}},slot:"left"},[n("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),n("div",{staticStyle:{padding:"0.2rem","background-color":"#fff"}},[n("div",{domProps:{innerHTML:t._s(t.pl)}})])],1)},staticRenderFns:[]};var c=n("VU/8")(r,a,!1,function(t){n("TG9o")},null,null);o.default=c.exports}});
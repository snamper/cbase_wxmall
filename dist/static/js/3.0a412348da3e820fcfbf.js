webpackJsonp([3],{"8AAa":function(t,e){},Ofir:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("uaSg"),a=(s("UsCG"),{data:function(){return{message:"",password:"",rpassword:"",customerPhone:"",start1:!1}},methods:{fetchDate:function(){},gotoback:function(){this.$emit("choiceHospital","111"),this.$router,this.$router.go(-1)},sendCode1:function(){var t=this.$refs.customerPhone;if(0!=this.customerPhone.length&&0!=t.valid){var e=this;Object(o.a)(this,"/api/customer/sendMessage",{customerPhone:this.customerPhone},"post","发送中...",function(t){e.$dialog.toast({mes:"发送成功!",timeout:1e3,icon:"success"}),e.start1=!0})}else this.$dialog.toast({mes:"请输入正确手机号",timeout:1e3})},regist:function(){if(0!=this.start1)if(0!=this.message.length)if(0!=this.password.length)if(this.password==this.rpassword){var t=this;gethttp(this,"/api/customer/regist",{customerPhone:this.customerPhone,message:this.message,customerPassword:md5(this.password)},"post","注册中...",function(e){t.$dialog.toast({mes:"注册成功!",timeout:1e3,icon:"success",callback:function(){t.$router.go(-1)}})})}else this.$dialog.toast({mes:"确认密码错误",timeout:1e3});else this.$dialog.toast({mes:"请输入密码",timeout:1e3});else this.$dialog.toast({mes:"请输入验证码",timeout:1e3});else this.$dialog.toast({mes:"请获取验证码",timeout:1e3})}},mounted:function(){},watch:{$route:"fetchDate"}}),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("yd-navbar",{attrs:{slot:"navbar",title:"注册",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[s("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(e){t.gotoback()}},slot:"left"},[s("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),s("yd-cell-group",[s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("国家:")]),t._v(" "),s("span",{staticClass:"reg_3",attrs:{slot:"right"},slot:"right"},[t._v("中国")])]),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("手机号：")]),t._v(" "),s("yd-input",{ref:"customerPhone",attrs:{slot:"right",regex:"mobile",placeholder:"+86"},slot:"right",model:{value:t.customerPhone,callback:function(e){t.customerPhone=e},expression:"customerPhone"}}),t._v(" "),s("yd-sendcode",{staticStyle:{"min-width":"1.5rem"},attrs:{slot:"right",type:"warning","run-str":"{%s}s","init-str":"获取验证码","reset-str":"重新获取"},nativeOn:{click:function(e){t.sendCode1(e)}},slot:"right",model:{value:t.start1,callback:function(e){t.start1=e},expression:"start1"}})],1),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("验证码：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{slot:"right",type:"number",placeholder:"请输入验证码"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}},slot:"right"})]),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("密码：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{slot:"right",type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}},slot:"right"})]),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("确认密码：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.rpassword,expression:"rpassword"}],attrs:{slot:"right",type:"password",placeholder:"请再次输入密码"},domProps:{value:t.rpassword},on:{input:function(e){e.target.composing||(t.rpassword=e.target.value)}},slot:"right"})])],1),t._v(" "),t._m(0),t._v(" "),s("yd-button",{staticClass:"reg_2",attrs:{size:"large",type:"primary"},nativeOn:{click:function(e){t.regist(e)}}},[t._v("验证并注册")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"reg_agreement"},[this._v("收不到短信？"),e("a",{staticClass:"reg_1"},[this._v("语音验证")])])}]};var i=s("VU/8")(a,r,!1,function(t){s("8AAa"),s("saOG")},"data-v-f74b7852",null);e.default=i.exports},saOG:function(t,e){}});
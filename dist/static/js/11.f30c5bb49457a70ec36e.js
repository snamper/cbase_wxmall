webpackJsonp([11],{BwLt:function(t,e,n){t.exports=n.p+"static/img/zm.7702b4b.png"},TKl7:function(t,e){},UlC8:function(t,e){},lmVz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("pwxT"),r=n.n(i),o=n("uaSg"),a={components:{barcode:r.a},data:function(){return{isShow:!0,isload:!1,value:"",description:"",txm:"",background:"",options:{width:5,height:150,displayValue:!0}}},mounted:function(){!function(){function t(){var t=document.getElementsByTagName("p")[0],e=document.getElementsByTagName("html")[0],n=e.clientWidth,i=e.clientHeight,r=n>i?n:i,o=n>i?i:n;t.style.width=r+"px",t.style.height=o+"px"}t(),window.addEventListener("resize",t)}()},methods:{init:function(t){var e=this;this.txm=t,Object(o.a)(this,"/api/customer/dynamicCardNumber",{},"get","生成条形码...",function(t){t&&200==t.code&&(e.value=t.cardNumber,e.isload=!0,e.description=t.description,t.background&&(e.background=t.background))})},close:function(){this.$emit("close")},showToggle:function(){this.isShow=!this.isShow}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"show"},[i("p",[i("yd-icon",{staticStyle:{color:"#999999",position:"fixed",left:"10px",top:"10px"},attrs:{name:"error-outline"},nativeOn:{click:function(e){t.close(e)}}}),t._v(" "),t.background.length>0?i("img",{staticStyle:{width:"80%","border-radius":"10px"},attrs:{src:t.background},on:{click:t.showToggle}}):t.isload&&0==t.background.length?i("img",{staticStyle:{width:"80%","border-radius":"10px"},attrs:{src:n("BwLt")},on:{click:t.showToggle}}):t._e(),t._v(" "),t.isShow?i("i",{staticStyle:{position:"fixed","font-style":"normal",bottom:"20%","font-size":"13px",display:"block",color:"white","text-shadow":"black 0.1em 0.1em 0.2em"}},[t._v("会员卡号："+t._s(t.txm))]):t._e(),t._v(" "),t.isShow&&t.value.length>0?i("barcode",{staticStyle:{width:"70%",position:"fixed"},attrs:{value:t.value,options:t.options}}):t._e(),t._v(" "),t.isShow?t._e():i("span",{staticStyle:{position:"absolute",right:"15%",left:"15%",top:"2rem","font-size":"0.35rem","font-weight":"500"},domProps:{innerHTML:t._s(t.description)}})],1)])},staticRenderFns:[]};var u={components:{show:n("VU/8")(a,s,!1,function(t){n("TKl7")},"data-v-0907cca3",null).exports},data:function(){return{iscarInfo:{customerName:"",loyaltyNumber:"",storeName:"",bonusPoints:"",other:"",couponQuantity:0,avatar:"",background:"",logo:""},isShow:!1,isload:!1}},activated:function(){this.isShow=!1,this.loyalty()},methods:{loyalty:function(){var t=this;Object(o.b)(this,"/api/customer/loyalty",{},"get","",function(e){t.isload=!0,e&&200==e.code&&(t.iscarInfo=e)})},explain:function(){this.$router.push({name:"Explain"})},binding:function(){this.$router.push({name:"Binding"})},show:function(){var t=this;0!=this.iscarInfo.loyaltyNumber.length&&(this.isShow=!0,this.$nextTick(function(){t.$refs.showcars.init(t.iscarInfo.loyaltyNumber)}))},closecar:function(){this.isShow=!1},exchange:function(){this.$router.push({path:"/home/PointsList"})},mycoupons:function(){this.$router.push({name:"myCoupons"})},getcoupons:function(){this.$router.push({path:"/home/getcoupons"})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("yd-layout",[i("yd-navbar",{attrs:{slot:"navbar",title:"会员中心",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"}),t._v(" "),i("div",{staticClass:"g-header",staticStyle:{width:"100%"}},[i("div",{staticClass:"m-content",on:{click:t.show}},[t.iscarInfo.background&&t.iscarInfo.background.length>0?i("img",{staticClass:"back_img",attrs:{src:t.iscarInfo.background}}):i("img",{staticClass:"back_img",attrs:{src:n("qm1U")}}),t._v(" "),i("div",{staticStyle:{position:"absolute",top:"0.2rem",right:"0.2rem","font-size":"0.3rem",color:"#ffffff",height:"0.5rem","line-height":"0.5rem"}},[t.iscarInfo.logo&&t.iscarInfo.logo.length>0?i("img",{attrs:{src:t.iscarInfo.logo}}):t._e(),t._v(t._s(t.iscarInfo.storeName)+"\n            ")]),t._v(" "),t.iscarInfo.loyaltyNumber.length>0?i("div",{staticClass:"m-info"},[i("div",{staticClass:"u-avatarUrl"},[i("img",{attrs:{src:t.iscarInfo.avatar}})]),t._v(" "),i("div",{staticClass:"m-right"},[i("div",{staticClass:"u-nickname"},[t._v(t._s("卡号:"+t.iscarInfo.loyaltyNumber))]),t._v(" "),i("div",{staticClass:"u-nickname"},[t._v(t._s("姓名:"+t.iscarInfo.customerName))])])]):t.isload&&0==t.iscarInfo.loyaltyNumber.length?i("div",{staticStyle:{position:"absolute",bottom:"0",width:"100%"}},[i("div",{staticClass:"yd-cell-item",staticStyle:{"background-color":"#fff",color:"#000"},on:{click:function(e){e.stopPropagation(),t.binding(e)}}},[i("div",{staticClass:"yd-cell-left"},[i("span",{staticClass:"yd-cell-icon"},[i("i",{staticClass:"icon-custom-vip",staticStyle:{"font-size":"0.35rem",color:"#000"}})]),t._v(" "),i("span",{staticStyle:{color:"#000"}},[t._v("点击开通会员卡")])]),t._v(" "),i("div",{staticClass:"yd-cell-right yd-cell-arrow"})])]):t._e()])]),t._v(" "),i("yd-cell-group",[t._e(),t._v(" "),i("yd-cell-item",{attrs:{arrow:""},nativeOn:{click:function(e){t.getcoupons(e)}}},[i("yd-icon",{attrs:{slot:"icon",name:"youhuiquan2",size:".35rem",color:"#2e4057",custom:""},slot:"icon"}),t._v(" "),i("span",{attrs:{slot:"left"},slot:"left"},[t._v("领取优惠券")])],1),t._v(" "),i("yd-cell-item",{attrs:{arrow:""},nativeOn:{click:function(e){t.mycoupons(e)}}},[i("yd-icon",{attrs:{slot:"icon",name:"youhuiquan2",size:".35rem",color:"#2e4057",custom:""},slot:"icon"}),t._v(" "),i("span",{attrs:{slot:"left"},slot:"left"},[t._v("我的优惠券")]),t._v(" "),t.iscarInfo.couponQuantity>0?i("span",{attrs:{slot:"right"},slot:"right"},[t._v("可用"),i("span",{staticStyle:{color:"red"}},[t._v(t._s(t.iscarInfo.couponQuantity))]),t._v("张")]):t._e()],1),t._v(" "),i("yd-cell-item",{attrs:{arrow:""},nativeOn:{click:function(e){t.exchange(e)}}},[i("yd-icon",{attrs:{slot:"icon",name:"duihuan",size:".35rem",color:"#2e4057",custom:""},slot:"icon"}),t._v(" "),i("span",{attrs:{slot:"left"},slot:"left"},[t._v("积分兑换")]),t._v(" "),t.iscarInfo.loyaltyNumber.length>0?i("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.iscarInfo.bonusPoints)+"积分")]):t._e()],1),t._v(" "),i("yd-cell-item",{attrs:{arrow:""},nativeOn:{click:function(e){t.explain(e)}}},[i("yd-icon",{attrs:{slot:"icon",name:"shu",size:".35rem",color:"#2e4057",custom:""},slot:"icon"}),t._v(" "),i("span",{attrs:{slot:"left"},slot:"left"},[t._v("积分规则和会员卡使用说明")])],1)],1),t._v(" "),t.isShow?i("show",{ref:"showcars",on:{close:t.closecar}}):t._e()],1)},staticRenderFns:[]};var h=n("VU/8")(u,c,!1,function(t){n("UlC8")},"data-v-b24ac7fa",null);e.default=h.exports},pwxT:function(t,e,n){var i;i=function(){"use strict";var t,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=(function(){function t(t){this.value=t}function e(e){var n,i;function r(n,i){try{var a=e[n](i),s=a.value;s instanceof t?Promise.resolve(s.value).then(function(t){r("next",t)},function(t){r("throw",t)}):o(a.done?"return":"normal",a.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":n.resolve({value:e,done:!0});break;case"throw":n.reject(e);break;default:n.resolve({value:e,done:!1})}(n=n.next)?r(n.key,n.arg):i=null}this._invoke=function(t,e){return new Promise(function(o,a){var s={key:t,arg:e,resolve:o,reject:a,next:null};i?i=i.next=s:(n=i=s,r(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},u=function t(e,i){n(this,t),this.data=e,this.text=i.text||e,this.options=i},c=function(t){function e(t,i){var r;return n(this,e),t=t.toUpperCase(),i.mod43&&(t+=(r=function(t){for(var e=0,n=0;n<t.length;n++)e+=r(t[n]);return e%=43}(t),h[r])),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i))}return a(e,u),i(e,[{key:"encode",value:function(){for(var t=d("*"),e=0;e<this.data.length;e++)t+=d(this.data[e])+"0";return{data:t+=d("*"),text:this.text}}},{key:"valid",value:function(){return-1!==this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)}}]),e}(),h=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],l=[20957,29783,23639,30485,20951,29813,23669,20855,29789,23645,29975,23831,30533,22295,30149,24005,21623,29981,23837,22301,30023,23879,30545,22343,30161,24017,21959,30065,23921,22385,29015,18263,29141,17879,29045,18293,17783,29021,18269,17477,17489,17681,20753,35770];function d(t){return function(t){return l[t].toString(2)}(f(t))}function f(t){return h.indexOf(t)}var p=(r(t={},103,0),r(t,104,1),r(t,105,2),t),g={101:0,100:1,99:2},v=String.fromCharCode(208),y=String.fromCharCode(209),m=String.fromCharCode(210),b="[\0-_È-Ï]",_="[ -È-Ï]",x=[11011001100,11001101100,11001100110,10010011e3,10010001100,10001001100,10011001e3,10011000100,10001100100,11001001e3,11001000100,11000100100,10110011100,10011011100,10011001110,10111001100,10011101100,10011100110,11001110010,11001011100,11001001110,11011100100,11001110100,11101101110,11101001100,11100101100,11100100110,11101100100,11100110100,11100110010,11011011e3,11011000110,11000110110,10100011e3,10001011e3,10001000110,10110001e3,10001101e3,10001100010,11010001e3,11000101e3,11000100010,10110111e3,10110001110,10001101110,10111011e3,10111000110,10001110110,11101110110,11010001110,11000101110,11011101e3,11011100010,11011101110,11101011e3,11101000110,11100010110,11101101e3,11101100010,11100011010,11101111010,11001000010,11110001010,1010011e4,10100001100,1001011e4,10010000110,10000101100,10000100110,1011001e4,10110000100,1001101e4,10011000010,10000110100,10000110010,11000010010,1100101e4,11110111010,11000010100,10001111010,10100111100,10010111100,10010011110,10111100100,10011110100,10011110010,11110100100,11110010100,11110010010,11011011110,11011110110,11110110110,10101111e3,10100011110,10001011110,10111101e3,10111100010,11110101e3,11110100010,10111011110,10111101110,11101011110,11110101110,11010000100,1101001e4,11010011100,1100011101011],w=function(t){function e(t,i){n(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.substring(1),i));return r.bytes=t.split("").map(function(t){return t.charCodeAt(0)}),r}return a(e,u),i(e,[{key:"valid",value:function(){return/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)}},{key:"encode",value:function(){var t=this.bytes,n=t.shift()-105,i=p[n];if(void 0===i)throw new RangeError("The encoding does not start with a start character.");var r=e.next(t,1,i);return{text:this.text===this.data?this.text.replace(/[^\x20-\x7E]/g,""):this.text,data:e.getBar(n)+r.result+e.getBar((r.checksum+n)%103)+e.getBar(106)}}}],[{key:"getBar",value:function(t){return x[t]?x[t].toString():""}},{key:"correctIndex",value:function(t,e){if(0===e){var n=t.shift();return n<32?n+64:n-32}return 1===e?t.shift()-32:10*(t.shift()-48)+t.shift()-48}},{key:"next",value:function(t,n,i){if(!t.length)return{result:"",checksum:0};var r=void 0,o=void 0;if(t[0]>=200){o=t.shift()-105;var a=g[o];void 0!==a?r=e.next(t,n+1,a):(0!==i&&1!==i||98!==o||(t[0]=0===i?t[0]>95?t[0]-96:t[0]:t[0]<32?t[0]+96:t[0]),r=e.next(t,n+1,i))}else o=e.correctIndex(t,i),r=e.next(t,n+1,i);var s=o*n;return{result:e.getBar(o)+r.result,checksum:s+r.checksum}}}]),e}(),O=function(t){return t.match(new RegExp("^"+b+"*"))[0].length},E=function(t){return t.match(new RegExp("^"+_+"*"))[0].length},S=function(t){return t.match(new RegExp("^(Ï*[0-9]{2}Ï*)*"))[0]};function k(t,e){var n=e?b:_,i=t.match(new RegExp("^("+n+"+?)(([0-9]{2}){2,})([^0-9]|$)"));if(i)return i[1]+String.fromCharCode(204)+L(t.substring(i[1].length));var r=t.match(new RegExp("^"+n+"+"))[0];return r.length===t.length?t:r+String.fromCharCode(e?205:206)+k(t.substring(r.length),!e)}function L(t){var e=S(t),n=e.length;if(n===t.length)return t;t=t.substring(n);var i=O(t)>=E(t);return e+String.fromCharCode(i?206:205)+k(t,i)}var C=function(t){var e=void 0;if(S(t).length>=2)e=m+L(t);else{var n=O(t)>E(t);e=(n?v:y)+k(t,n)}return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/,function(t,e){return String.fromCharCode(203)+e})},A=function(t){function e(t,i){if(n(this,e),/^[\x00-\x7F\xC8-\xD3]+$/.test(t))var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,C(t),i));else r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return s(r)}return a(e,w),e}(),R=function(t){function e(t,i){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,v+t,i))}return a(e,w),i(e,[{key:"valid",value:function(){return new RegExp("^"+b+"+$").test(this.data)}}]),e}(),P=function(t){function e(t,i){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,y+t,i))}return a(e,w),i(e,[{key:"valid",value:function(){return new RegExp("^"+_+"+$").test(this.data)}}]),e}(),G=function(t){function e(t,i){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,m+t,i))}return a(e,w),i(e,[{key:"valid",value:function(){return new RegExp("^(Ï*[0-9]{2}Ï*)+$").test(this.data)}}]),e}(),z=function(){function t(){n(this,t),this.startBin="101",this.endBin="101",this.middleBin="01010",this.binaries={L:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],G:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],R:["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"],O:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],E:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"]}}return i(t,[{key:"encode",value:function(t,e,n){var i="";n=n||"";for(var r=0;r<t.length;r++){var o=this.binaries[e[r]];o&&(i+=o[t[r]]),r<t.length-1&&(i+=n)}return i}}]),t}(),I=function(t){function e(t,i){n(this,e),-1!==t.search(/^[0-9]{12}$/)&&(t+=j(t));var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return!i.flat&&i.fontSize>10*i.width?r.fontSize=10*i.width:r.fontSize=i.fontSize,r.guardHeight=i.height+r.fontSize/2+i.textMargin,r.lastChar=i.lastChar,r}return a(e,u),i(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{13}$/)&&this.data[12]==j(this.data)}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"getStructure",value:function(){return["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"]}},{key:"guardedEncoding",value:function(){var t=new z,e=[],n=this.getStructure()[this.data[0]],i=this.data.substr(1,6),r=this.data.substr(7,6);return this.options.displayValue&&e.push({data:"000000000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),e.push({data:"101",options:{height:this.guardHeight}}),e.push({data:t.encode(i,n),text:this.text.substr(1,6),options:{fontSize:this.fontSize}}),e.push({data:"01010",options:{height:this.guardHeight}}),e.push({data:t.encode(r,"RRRRRR"),text:this.text.substr(7,6),options:{fontSize:this.fontSize}}),e.push({data:"101",options:{height:this.guardHeight}}),this.options.lastChar&&this.options.displayValue&&(e.push({data:"00"}),e.push({data:"00000",text:this.options.lastChar,options:{fontSize:this.fontSize}})),e}},{key:"flatEncoding",value:function(){var t=new z,e="",n=this.getStructure()[this.data[0]];return e+="101",e+=t.encode(this.data.substr(1,6),n),e+="01010",e+=t.encode(this.data.substr(7,6),"RRRRRR"),{data:e+="101",text:this.text}}}]),e}();function j(t){var e,n=0;for(e=0;e<12;e+=2)n+=parseInt(t[e]);for(e=1;e<12;e+=2)n+=3*parseInt(t[e]);return(10-n%10)%10}var X=function(t){function e(t,i){return n(this,e),-1!==t.search(/^[0-9]{7}$/)&&(t+=$(t)),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i))}return a(e,u),i(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{8}$/)&&this.data[7]==$(this.data)}},{key:"encode",value:function(){var t=new z,e="",n=this.data.substr(0,4),i=this.data.substr(4,4);return e+=t.startBin,e+=t.encode(n,"LLLL"),e+=t.middleBin,e+=t.encode(i,"RRRR"),{data:e+=t.endBin,text:this.text}}}]),e}();function $(t){var e,n=0;for(e=0;e<7;e+=2)n+=3*parseInt(t[e]);for(e=1;e<7;e+=2)n+=parseInt(t[e]);return(10-n%10)%10}var T=function(t){function e(t,i){n(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return r.structure=["GGLLL","GLGLL","GLLGL","GLLLG","LGGLL","LLGGL","LLLGG","LGLGL","LGLLG","LLGLG"],r}return a(e,u),i(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{5}$/)}},{key:"encode",value:function(){var t=new z,e=this.checksum(),n="1011";return{data:n+=t.encode(this.data,this.structure[e],"01"),text:this.text}}},{key:"checksum",value:function(){var t=0;return t+=3*parseInt(this.data[0]),t+=9*parseInt(this.data[1]),t+=3*parseInt(this.data[2]),t+=9*parseInt(this.data[3]),(t+=3*parseInt(this.data[4]))%10}}]),e}(),V=function(t){function e(t,i){n(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return r.structure=["LL","LG","GL","GG"],r}return a(e,u),i(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{2}$/)}},{key:"encode",value:function(){var t=new z,e=this.structure[parseInt(this.data)%4],n="1011";return{data:n+=t.encode(this.data,e,"01"),text:this.text}}}]),e}(),B=function(t){function e(t,i){n(this,e),-1!==t.search(/^[0-9]{11}$/)&&(t+=M(t));var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return r.displayValue=i.displayValue,i.fontSize>10*i.width?r.fontSize=10*i.width:r.fontSize=i.fontSize,r.guardHeight=i.height+r.fontSize/2+i.textMargin,r}return a(e,u),i(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{12}$/)&&this.data[11]==M(this.data)}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var t=new z,e="";return e+="101",e+=t.encode(this.data.substr(0,6),"LLLLLL"),e+="01010",e+=t.encode(this.data.substr(6,6),"RRRRRR"),{data:e+="101",text:this.text}}},{key:"guardedEncoding",value:function(){var t=new z,e=[];return this.displayValue&&e.push({data:"00000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),e.push({data:"101"+t.encode(this.data[0],"L"),options:{height:this.guardHeight}}),e.push({data:t.encode(this.data.substr(1,5),"LLLLL"),text:this.text.substr(1,5),options:{fontSize:this.fontSize}}),e.push({data:"01010",options:{height:this.guardHeight}}),e.push({data:t.encode(this.data.substr(6,5),"RRRRR"),text:this.text.substr(6,5),options:{fontSize:this.fontSize}}),e.push({data:t.encode(this.data[11],"R")+"101",options:{height:this.guardHeight}}),this.displayValue&&e.push({data:"00000000",text:this.text.substr(11,1),options:{textAlign:"right",fontSize:this.fontSize}}),e}}]),e}();function M(t){var e,n=0;for(e=1;e<11;e+=2)n+=parseInt(t[e]);for(e=0;e<11;e+=2)n+=3*parseInt(t[e]);return(10-n%10)%10}var N=["XX00000XXX","XX10000XXX","XX20000XXX","XXX00000XX","XXXX00000X","XXXXX00005","XXXXX00006","XXXXX00007","XXXXX00008","XXXXX00009"],D=[["EEEOOO","OOOEEE"],["EEOEOO","OOEOEE"],["EEOOEO","OOEEOE"],["EEOOOE","OOEEEO"],["EOEEOO","OEOOEE"],["EOOEEO","OEEOOE"],["EOOOEE","OEEEOO"],["EOEOEO","OEOEOE"],["EOEOOE","OEOEEO"],["EOOEOE","OEEOEO"]],H=function(t){function e(t,i){n(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));if(r.isValid=!1,-1!==t.search(/^[0-9]{6}$/))r.middleDigits=t,r.upcA=U(t,"0"),r.text=i.text||""+r.upcA[0]+t+r.upcA[r.upcA.length-1],r.isValid=!0;else{if(-1===t.search(/^[01][0-9]{7}$/))return s(r);if(r.middleDigits=t.substring(1,t.length-1),r.upcA=U(r.middleDigits,t[0]),r.upcA[r.upcA.length-1]!==t[t.length-1])return s(r);r.isValid=!0}return r.displayValue=i.displayValue,i.fontSize>10*i.width?r.fontSize=10*i.width:r.fontSize=i.fontSize,r.guardHeight=i.height+r.fontSize/2+i.textMargin,r}return a(e,u),i(e,[{key:"valid",value:function(){return this.isValid}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var t=new z,e="";return e+="101",e+=this.encodeMiddleDigits(t),{data:e+="010101",text:this.text}}},{key:"guardedEncoding",value:function(){var t=new z,e=[];return this.displayValue&&e.push({data:"00000000",text:this.text[0],options:{textAlign:"left",fontSize:this.fontSize}}),e.push({data:"101",options:{height:this.guardHeight}}),e.push({data:this.encodeMiddleDigits(t),text:this.text.substring(1,7),options:{fontSize:this.fontSize}}),e.push({data:"010101",options:{height:this.guardHeight}}),this.displayValue&&e.push({data:"00000000",text:this.text[7],options:{textAlign:"right",fontSize:this.fontSize}}),e}},{key:"encodeMiddleDigits",value:function(t){var e=this.upcA[0],n=this.upcA[this.upcA.length-1],i=D[parseInt(n)][parseInt(e)];return t.encode(this.middleDigits,i)}}]),e}();function U(t,e){for(var n=parseInt(t[t.length-1]),i=N[n],r="",o=0,a=0;a<i.length;a++){var s=i[a];r+="X"===s?t[o++]:s}return""+(r=""+e+r)+M(r)}var F=function(t){function e(t,i){n(this,e),-1!==t.search(/^[0-9]{13}$/)&&(t+=Q(t));var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return r.binaryRepresentation={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"},r}return a(e,u),i(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{14}$/)&&this.data[13]==Q(this.data)}},{key:"encode",value:function(){for(var t="1010",e=0;e<14;e+=2)t+=this.calculatePair(this.data.substr(e,2));return{data:t+="11101",text:this.text}}},{key:"calculatePair",value:function(t){for(var e="",n=this.binaryRepresentation[t[0]],i=this.binaryRepresentation[t[1]],r=0;r<5;r++)e+="1"==n[r]?"111":"1",e+="1"==i[r]?"000":"0";return e}}]),e}();function Q(t){for(var e=0,n=0;n<13;n++)e+=parseInt(t[n])*(3-n%2*2);return 10*Math.ceil(e/10)-e}var q=function(t){function e(t,i){n(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return r.binaryRepresentation={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"},r}return a(e,u),i(e,[{key:"valid",value:function(){return-1!==this.data.search(/^([0-9]{2})+$/)}},{key:"encode",value:function(){for(var t="1010",e=0;e<this.data.length;e+=2)t+=this.calculatePair(this.data.substr(e,2));return{data:t+="11101",text:this.text}}},{key:"calculatePair",value:function(t){for(var e="",n=this.binaryRepresentation[t[0]],i=this.binaryRepresentation[t[1]],r=0;r<5;r++)e+="1"==n[r]?"111":"1",e+="1"==i[r]?"000":"0";return e}}]),e}(),J=function(t){function e(t,i){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i))}return a(e,u),i(e,[{key:"encode",value:function(){for(var t="110",e=0;e<this.data.length;e++){var n=parseInt(this.data[e]).toString(2);n=K(n,4-n.length);for(var i=0;i<n.length;i++)t+="0"==n[i]?"100":"110"}return{data:t+="1001",text:this.text}}},{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]+$/)}}]),e}();function K(t,e){for(var n=0;n<e;n++)t="0"+t;return t}function W(t){for(var e=0,n=0;n<t.length;n++){var i=parseInt(t[n]);(n+t.length)%2==0?e+=i:e+=2*i%10+Math.floor(2*i/10)}return(10-e%10)%10}function Z(t){for(var e=0,n=[2,3,4,5,6,7],i=0;i<t.length;i++){var r=parseInt(t[t.length-1-i]);e+=n[i%n.length]*r}return(11-e%11)%11}var Y={CODE39:c,CODE128:A,CODE128A:R,CODE128B:P,CODE128C:G,EAN13:I,EAN8:X,EAN5:T,EAN2:V,UPC:B,UPCE:H,ITF14:F,ITF:q,MSI:J,MSI10:function(t){function e(t,i){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t+W(t),i))}return a(e,J),e}(),MSI11:function(t){function e(t,i){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t+Z(t),i))}return a(e,J),e}(),MSI1010:function(t){function e(t,i){return n(this,e),t+=W(t),t+=W(t),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i))}return a(e,J),e}(),MSI1110:function(t){function e(t,i){return n(this,e),t+=Z(t),t+=W(t),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i))}return a(e,J),e}(),pharmacode:function(t){function e(t,i){n(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return r.number=parseInt(t,10),r}return a(e,u),i(e,[{key:"encode",value:function(){for(var t=this.number,e="";!isNaN(t)&&0!=t;)t%2==0?(e="11100"+e,t=(t-2)/2):(e="100"+e,t=(t-1)/2);return{data:e=e.slice(0,-2),text:this.text}}},{key:"valid",value:function(){return this.number>=3&&this.number<=131070}}]),e}(),codabar:function(t){function e(t,i){n(this,e),0===t.search(/^[0-9\-\$\:\.\+\/]+$/)&&(t="A"+t+"A");var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.toUpperCase(),i));return r.text=r.options.text||r.text.replace(/[A-D]/g,""),r}return a(e,u),i(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)}},{key:"encode",value:function(){for(var t=[],e=this.getEncodings(),n=0;n<this.data.length;n++)t.push(e[this.data.charAt(n)]),n!==this.data.length-1&&t.push("0");return{text:this.text,data:t.join("")}}},{key:"getEncodings",value:function(){return{0:"101010011",1:"101011001",2:"101001011",3:"110010101",4:"101101001",5:"110101001",6:"100101011",7:"100101101",8:"100110101",9:"110100101","-":"101001101",$:"101100101",":":"1101011011","/":"1101101011",".":"1101101101","+":"101100110011",A:"1011001001",B:"1010010011",C:"1001001011",D:"1010011001"}}}]),e}(),GenericBarcode:function(t){function e(t,i){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i))}return a(e,u),i(e,[{key:"encode",value:function(){return{data:"10101010101010101010101010101010101010101",text:this.text}}},{key:"valid",value:function(){return!0}}]),e}()},tt=function(t,e){return o({},t,e)};function et(t){var e=[];return function t(n){if(Array.isArray(n))for(var i=0;i<n.length;i++)t(n[i]);else n.text=n.text||"",n.data=n.data||"",e.push(n)}(t),e}function nt(t){return t.marginTop=t.marginTop||t.margin,t.marginBottom=t.marginBottom||t.margin,t.marginRight=t.marginRight||t.margin,t.marginLeft=t.marginLeft||t.margin,t}function it(t){var e=["width","height","textMargin","fontSize","margin","marginTop","marginBottom","marginLeft","marginRight"];for(var n in e)e.hasOwnProperty(n)&&"string"==typeof t[n=e[n]]&&(t[n]=parseInt(t[n],10));return"string"==typeof t.displayValue&&(t.displayValue="false"!=t.displayValue),t}var rt={width:2,height:100,format:"auto",displayValue:!0,fontOptions:"",font:"monospace",text:void 0,textAlign:"center",textPosition:"bottom",textMargin:2,fontSize:20,background:"#ffffff",lineColor:"#000000",margin:10,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0,valid:function(){}};function ot(t){var e={};for(var n in rt)rt.hasOwnProperty(n)&&(t.hasAttribute("jsbarcode-"+n.toLowerCase())&&(e[n]=t.getAttribute("jsbarcode-"+n.toLowerCase())),t.hasAttribute("data-"+n.toLowerCase())&&(e[n]=t.getAttribute("data-"+n.toLowerCase())));return e.value=t.getAttribute("jsbarcode-value")||t.getAttribute("data-value"),e=it(e)}function at(t,e){return e.height+(e.displayValue&&t.text.length>0?e.fontSize+e.textMargin:0)+e.marginTop+e.marginBottom}function st(t,e,n){if(n.displayValue&&e<t){if("center"==n.textAlign)return Math.floor((t-e)/2);if("left"==n.textAlign)return 0;if("right"==n.textAlign)return Math.floor(t-e)}return 0}function ut(t,e,n){for(var i=0;i<t.length;i++){var r,o=t[i],a=tt(e,o.options);r=a.displayValue?lt(o.text,a,n):0;var s=o.data.length*a.width;o.width=Math.ceil(Math.max(r,s)),o.height=at(o,a),o.barcodePadding=st(r,s,a)}}function ct(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].width;return e}function ht(t){for(var e=0,n=0;n<t.length;n++)t[n].height>e&&(e=t[n].height);return e}function lt(t,e,n){var i;if(n)i=n;else{if("undefined"==typeof document)return 0;i=document.createElement("canvas").getContext("2d")}return i.font=e.fontOptions+" "+e.fontSize+"px "+e.font,i.measureText(t).width}var dt="http://www.w3.org/2000/svg",ft={CanvasRenderer:function(){function t(e,i,r){n(this,t),this.canvas=e,this.encodings=i,this.options=r}return i(t,[{key:"render",value:function(){if(!this.canvas.getContext)throw new Error("The browser does not support canvas.");this.prepareCanvas();for(var t=0;t<this.encodings.length;t++){var e=tt(this.options,this.encodings[t].options);this.drawCanvasBarcode(e,this.encodings[t]),this.drawCanvasText(e,this.encodings[t]),this.moveCanvasDrawing(this.encodings[t])}this.restoreCanvas()}},{key:"prepareCanvas",value:function(){var t=this.canvas.getContext("2d");t.save(),ut(this.encodings,this.options,t);var e=ct(this.encodings),n=ht(this.encodings);this.canvas.width=e+this.options.marginLeft+this.options.marginRight,this.canvas.height=n,t.clearRect(0,0,this.canvas.width,this.canvas.height),this.options.background&&(t.fillStyle=this.options.background,t.fillRect(0,0,this.canvas.width,this.canvas.height)),t.translate(this.options.marginLeft,0)}},{key:"drawCanvasBarcode",value:function(t,e){var n,i=this.canvas.getContext("2d"),r=e.data;n="top"==t.textPosition?t.marginTop+t.fontSize+t.textMargin:t.marginTop,i.fillStyle=t.lineColor;for(var o=0;o<r.length;o++){var a=o*t.width+e.barcodePadding;"1"===r[o]?i.fillRect(a,n,t.width,t.height):r[o]&&i.fillRect(a,n,t.width,t.height*r[o])}}},{key:"drawCanvasText",value:function(t,e){var n,i,r=this.canvas.getContext("2d"),o=t.fontOptions+" "+t.fontSize+"px "+t.font;t.displayValue&&(i="top"==t.textPosition?t.marginTop+t.fontSize-t.textMargin:t.height+t.textMargin+t.marginTop+t.fontSize,r.font=o,"left"==t.textAlign||e.barcodePadding>0?(n=0,r.textAlign="left"):"right"==t.textAlign?(n=e.width-1,r.textAlign="right"):(n=e.width/2,r.textAlign="center"),r.fillText(e.text,n,i))}},{key:"moveCanvasDrawing",value:function(t){this.canvas.getContext("2d").translate(t.width,0)}},{key:"restoreCanvas",value:function(){this.canvas.getContext("2d").restore()}}]),t}(),SVGRenderer:function(){function t(e,i,r){n(this,t),this.svg=e,this.encodings=i,this.options=r,this.document=r.xmlDocument||document}return i(t,[{key:"render",value:function(){var t=this.options.marginLeft;this.prepareSVG();for(var e=0;e<this.encodings.length;e++){var n=this.encodings[e],i=tt(this.options,n.options),r=this.createGroup(t,i.marginTop,this.svg);this.setGroupOptions(r,i),this.drawSvgBarcode(r,i,n),this.drawSVGText(r,i,n),t+=n.width}}},{key:"prepareSVG",value:function(){for(;this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);ut(this.encodings,this.options);var t=ct(this.encodings),e=ht(this.encodings),n=t+this.options.marginLeft+this.options.marginRight;this.setSvgAttributes(n,e),this.options.background&&this.drawRect(0,0,n,e,this.svg).setAttribute("style","fill:"+this.options.background+";")}},{key:"drawSvgBarcode",value:function(t,e,n){var i,r=n.data;i="top"==e.textPosition?e.fontSize+e.textMargin:0;for(var o=0,a=0,s=0;s<r.length;s++)a=s*e.width+n.barcodePadding,"1"===r[s]?o++:o>0&&(this.drawRect(a-e.width*o,i,e.width*o,e.height,t),o=0);o>0&&this.drawRect(a-e.width*(o-1),i,e.width*o,e.height,t)}},{key:"drawSVGText",value:function(t,e,n){var i,r,o=this.document.createElementNS(dt,"text");e.displayValue&&(o.setAttribute("style","font:"+e.fontOptions+" "+e.fontSize+"px "+e.font),r="top"==e.textPosition?e.fontSize-e.textMargin:e.height+e.textMargin+e.fontSize,"left"==e.textAlign||n.barcodePadding>0?(i=0,o.setAttribute("text-anchor","start")):"right"==e.textAlign?(i=n.width-1,o.setAttribute("text-anchor","end")):(i=n.width/2,o.setAttribute("text-anchor","middle")),o.setAttribute("x",i),o.setAttribute("y",r),o.appendChild(this.document.createTextNode(n.text)),t.appendChild(o))}},{key:"setSvgAttributes",value:function(t,e){var n=this.svg;n.setAttribute("width",t+"px"),n.setAttribute("height",e+"px"),n.setAttribute("x","0px"),n.setAttribute("y","0px"),n.setAttribute("viewBox","0 0 "+t+" "+e),n.setAttribute("xmlns",dt),n.setAttribute("version","1.1"),n.setAttribute("style","transform: translate(0,0)")}},{key:"createGroup",value:function(t,e,n){var i=this.document.createElementNS(dt,"g");return i.setAttribute("transform","translate("+t+", "+e+")"),n.appendChild(i),i}},{key:"setGroupOptions",value:function(t,e){t.setAttribute("style","fill:"+e.lineColor+";")}},{key:"drawRect",value:function(t,e,n,i,r){var o=this.document.createElementNS(dt,"rect");return o.setAttribute("x",t),o.setAttribute("y",e),o.setAttribute("width",n),o.setAttribute("height",i),r.appendChild(o),o}}]),t}(),ObjectRenderer:function(){function t(e,i,r){n(this,t),this.object=e,this.encodings=i,this.options=r}return i(t,[{key:"render",value:function(){this.object.encodings=this.encodings}}]),t}()},pt=function(t){function e(t,i){n(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.name="InvalidInputException",r.symbology=t,r.input=i,r.message='"'+r.input+'" is not a valid input for '+r.symbology,r}return a(e,t),e}(Error),gt=function(t){function e(){n(this,e);var t=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.name="InvalidElementException",t.message="Not supported type to render on",t}return a(e,t),e}(Error),vt=function(t){function e(){n(this,e);var t=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.name="NoElementException",t.message="No element to render on.",t}return a(e,t),e}(Error);function yt(t){if("string"==typeof t)return function(t){var e=document.querySelectorAll(t);if(0===e.length)return;for(var n=[],i=0;i<e.length;i++)n.push(yt(e[i]));return n}(t);if(Array.isArray(t)){for(var n=[],i=0;i<t.length;i++)n.push(yt(t[i]));return n}if("undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLImageElement)return r=t,{element:o=document.createElement("canvas"),options:ot(r),renderer:ft.CanvasRenderer,afterRender:function(){r.setAttribute("src",o.toDataURL())}};if(t&&"svg"===t.nodeName||"undefined"!=typeof SVGElement&&t instanceof SVGElement)return{element:t,options:ot(t),renderer:ft.SVGRenderer};if("undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement)return{element:t,options:ot(t),renderer:ft.CanvasRenderer};if(t&&t.getContext)return{element:t,renderer:ft.CanvasRenderer};if(t&&"object"===(void 0===t?"undefined":e(t))&&!t.nodeName)return{element:t,renderer:ft.ObjectRenderer};throw new gt;var r,o}var mt=function(){function t(e){n(this,t),this.api=e}return i(t,[{key:"handleCatch",value:function(t){if("InvalidInputException"!==t.name)throw t;if(this.api._options.valid===this.api._defaults.valid)throw t.message;this.api._options.valid(!1),this.api.render=function(){}}},{key:"wrapBarcodeCall",value:function(t){try{var e=t.apply(void 0,arguments);return this.api._options.valid(!0),e}catch(t){return this.handleCatch(t),this.api}}}]),t}(),bt=function(){},_t=function(t,e,n){var i=new bt;if(void 0===t)throw Error("No element to render on was provided.");return i._renderProperties=yt(t),i._encodings=[],i._options=rt,i._errorHandler=new mt(i),void 0!==e&&((n=n||{}).format||(n.format=Et()),i.options(n)[n.format](e,n).render()),i};for(var xt in _t.getModule=function(t){return Y[t]},Y)Y.hasOwnProperty(xt)&&wt(Y,xt);function wt(t,e){bt.prototype[e]=bt.prototype[e.toUpperCase()]=bt.prototype[e.toLowerCase()]=function(n,i){var r=this;return r._errorHandler.wrapBarcodeCall(function(){i.text=void 0===i.text?void 0:""+i.text;var o=tt(r._options,i);o=it(o);var a=t[e],s=Ot(n,a,o);return r._encodings.push(s),r})}}function Ot(t,e,n){var i=new e(t=""+t,n);if(!i.valid())throw new pt(i.constructor.name,t);var r=i.encode();r=et(r);for(var o=0;o<r.length;o++)r[o].options=tt(n,r[o].options);return r}function Et(){return Y.CODE128?"CODE128":Object.keys(Y)[0]}function St(t,e,n){e=et(e);for(var i=0;i<e.length;i++)e[i].options=tt(n,e[i].options),nt(e[i].options);nt(n),new(0,t.renderer)(t.element,e,n).render(),t.afterRender&&t.afterRender()}return bt.prototype.options=function(t){return this._options=tt(this._options,t),this},bt.prototype.blank=function(t){var e=new Array(t+1).join("0");return this._encodings.push({data:e}),this},bt.prototype.init=function(){var t;if(this._renderProperties)for(var e in Array.isArray(this._renderProperties)||(this._renderProperties=[this._renderProperties]),this._renderProperties){t=this._renderProperties[e];var n=tt(this._options,t.options);"auto"==n.format&&(n.format=Et()),this._errorHandler.wrapBarcodeCall(function(){var e=Ot(n.value,Y[n.format.toUpperCase()],n);St(t,e,n)})}},bt.prototype.render=function(){if(!this._renderProperties)throw new vt;if(Array.isArray(this._renderProperties))for(var t=0;t<this._renderProperties.length;t++)St(this._renderProperties[t],this._encodings,this._options);else St(this._renderProperties,this._encodings,this._options);return this},bt.prototype._defaults=rt,"undefined"!=typeof window&&(window.JsBarcode=_t),"undefined"!=typeof jQuery&&(jQuery.fn.JsBarcode=function(t,e){var n=[];return jQuery(this).each(function(){n.push(this)}),_t(n,t,e)}),{props:{value:{type:String,required:!0},options:{type:Object},tag:{type:String,default:"canvas"}},render:function(t){return t(this.tag,this.$slots.default)},watch:{value:function(){this.generate()},options:function(){this.generate()}},mounted:function(){this.generate()},methods:{generate:function(){_t(this.$el,this.value,this.options)}}}},t.exports=i()},qm1U:function(t,e,n){t.exports=n.p+"static/img/vipCard.dfbb524.jpg"}});
webpackJsonp([6],{"3MFY":function(t,e){},"95Mb":function(t,e,s){"use strict";e.__esModule=!0;var i=s("VxeN");e.default=(0,i.create)({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"van-progress"},[e("span",{staticClass:"van-progress__portion",style:this.portionStyle}),e("span",{directives:[{name:"show",rawName:"v-show",value:this.showPivot,expression:"showPivot"}],staticClass:"van-progress__pivot",style:this.pivotStyle},[this._v(this._s(this.pivotText))])])},name:"van-progress",props:{inactive:Boolean,percentage:{type:Number,required:!0,validator:function(t){return t>=0&&t<=100}},showPivot:{type:Boolean,default:!0},pivotText:{type:String,default:function(){return this.percentage+"%"}},color:{type:String,default:"#38f"},textColor:{type:String,default:"#fff"}},computed:{componentColor:function(){return this.inactive?"#cacaca":this.color},pivotStyle:function(){var t=this.percentage;return{color:this.textColor,backgroundColor:this.componentColor,left:t<=5?"0%":t>=95?"100%":t+"%",marginLeft:t<=5?"0":t>=95?"-28px":"-14px"}},portionStyle:function(){return{width:this.percentage+"%",backgroundColor:this.componentColor}}}})},IYDm:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=s("bOdI"),o=s.n(a),r=(s("oVsm"),s("95Mb")),n=s.n(r),l=(s("FDxC"),s("w+oK")),c=s.n(l),p=(s("dKGA"),s("kSul")),m=s.n(p),u=(s("jgNZ"),s("syWm")),v=s.n(u),d=s("uaSg"),f={components:(i={},o()(i,v.a.name,v.a),o()(i,m.a.name,m.a),o()(i,c.a.name,c.a),o()(i,n.a.name,n.a),i),data:function(){return{showpivot:!1,selettype:1,startTimes:[],promotions:[],seckillTime:""}},mounted:function(){},methods:{switchlist:function(t,e){this.selettype=t;var s=this.startTimes[t-1].seckillTime;this.seckillTime=s/1e3,document.getElementById("scroll").scrollLeft=e.currentTarget.offsetLeft-10,this.loadList(s)},starttimes:function(){var t=this;Object(d.a)(this,"/api/promotion/seckill/starttimes",{store:"1"},"get","加载中...",function(e){if(e.startTimes){t.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad"),t.startTimes=[],e.startTimes=e.startTimes.sort();var s=0;e.startTimes.forEach(function(t){e.currentTime>t&&(s=t)});var i=0;e.startTimes.forEach(function(e){var a=new Date(e),o=(a.getHours()<10?"0"+a.getHours():a.getHours())+":"+(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes());e<s?t.startTimes.push({name:o,des:"已开抢",type:i+1,seckillTime:e}):e==s?(t.startTimes.push({name:o,des:"抢购进行中...",type:i+1,seckillTime:e}),t.seckillTime=e/1e3,t.selettype=i+1,t.loadList(e)):t.startTimes.push({name:o,des:"未开始",type:i+1,seckillTime:e}),i++})}})},loadList:function(t){var e=this;Object(d.a)(this,"/api/promotion/seckill/model",{startTime:t,store:"1"},"get","加载中...",function(t){t.model&&t.model.promotions&&(e.promotions=t.model.promotions)})},gotoDetail:function(t){t.status==START&&this.$router.push({path:"/home/GroupBuyDetail",query:{promotionId:t.promotionId,promotionType:"SECKILL"}})}},activated:function(){this.starttimes()}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("yd-layout",{staticStyle:{"background-color":"#FFFFFF"},attrs:{id:"seckill"}},[s("yd-navbar",{attrs:{slot:"navbar",title:"限时秒杀",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[s("router-link",[s("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),s("ul",{staticClass:"yd-scrollnav-tab-item",staticStyle:{color:"rgb(255, 255, 255)",height:"0.9rem"},attrs:{slot:"navbar",id:"scroll"},slot:"navbar"},t._l(t.startTimes,function(e){return s("li",{class:{"yd-scrollnav-current":t.selettype==e.type},staticStyle:{color:"rgb(245, 245, 245)"},on:{click:function(s){t.switchlist(e.type,s)}}},[s("div",{staticStyle:{width:"100%",display:"table",margin:"auto",height:"0.9rem","text-align":"center"}},[s("div",{staticStyle:{"vertical-align":"middle",display:"table-cell"}},[s("p",{staticStyle:{"font-size":"0.25rem"}},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticStyle:{"font-size":"0.2rem"}},[t._v(t._s(e.des))])])])])})),t._v(" "),s("div",{staticStyle:{display:"block"}},[s("img",{staticStyle:{width:"100%"},attrs:{src:"http://image.bitauto.com/dealer/news/1601163/3e0c97c8-d392-44c8-9671-4039491f0749.jpg"}})]),t._v(" "),s("van-row",{staticStyle:{"line-height":"30px","background-color":"#E9E9E9"}},[s("van-col",{attrs:{offset:"1",span:"8"}},[s("span",{staticStyle:{"font-size":"0.25rem",color:"#d41d0f"}},[t._v("疯狂抢购 限时秒杀")])]),t._v(" "),s("van-col",{staticStyle:{"text-align":"right"},attrs:{offset:"5",span:"9"}},[s("yd-countdown",{attrs:{time:t.seckillTime,"done-text":"正在抢购",id:"times"}},[s("span",[s("em",[t._v("{%d}")])]),t._v("天\n      "),s("span",[s("em",[t._v("{%h}")])]),t._v("小时\n      "),s("span",[s("em",[t._v("{%m}")])]),t._v("时\n      "),s("span",[s("em",[t._v("{%s}")])]),t._v("秒\n    ")])],1)],1),t._v(" "),s("yd-pullrefresh",{ref:"pullrefreshDemo",attrs:{callback:t.starttimes}},[s("ul",{staticClass:"bulk_goods"},t._l(t.promotions,function(e,i){return s("li",{key:i,staticClass:"goods-item",on:{click:function(s){t.gotoDetail(e)}}},[s("div",{staticClass:"thumb center-img"},[s("img",{attrs:{src:e.image}})]),t._v(" "),s("div",{staticClass:"detail"},[s("div",{staticClass:"goods-info"},[s("div",{staticClass:"title"},[t._v(t._s(e.skuName))])]),t._v(" "),s("div",{staticClass:"from-shop"},[s("van-row",{staticStyle:{"line-height":"30px"}},[s("van-col",{staticClass:"price",attrs:{span:"8"}},[s("span",[s("em",[t._v("¥")]),t._v(t._s(e.price))])]),t._v(" "),s("van-col",{attrs:{offset:"8",span:"8"}},[s("van-button",{staticClass:"pull-right",attrs:{disabled:"START"!=e.status,type:"danger",size:"small"}},[t._v(t._s("NOTSTART"==e.status?"未开枪":"START"==e.status?"立即抢购":"END"==e.status?"已结束":"已抢空"))])],1)],1),t._v(" "),s("van-row",[s("van-col",{staticClass:"del_price",attrs:{span:"8"}},[s("span",[s("em",[t._v("¥")]),t._v(t._s(e.salePrice))])]),t._v(" "),s("van-col",{staticStyle:{"text-align":"right","font-size":"0.2rem",color:"#999"},attrs:{span:"8"}},[t._v("已售"+t._s(((e.stock-e.stockAvaliable)/e.stock*100).toFixed(2))+"%")]),t._v(" "),s("van-col",{staticStyle:{"margin-top":"7px"},attrs:{span:"7",offset:"1"}},[s("van-progress",{attrs:{"show-pivot":t.showpivot,color:"#ed5050",percentage:(e.stock-e.stockAvaliable)/e.stock*100}})],1)],1)],1)])])}))])],1)},staticRenderFns:[]};var g=s("VU/8")(f,h,!1,function(t){s("3MFY"),s("yJMW")},"data-v-c9e764a6",null);e.default=g.exports},Z9xB:function(t,e){},oVsm:function(t,e,s){s("xL5C"),s("Bcbh"),s("vQRh"),s("Z9xB")},yJMW:function(t,e){}});
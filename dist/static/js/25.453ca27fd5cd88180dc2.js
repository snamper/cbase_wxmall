webpackJsonp([25],{WKVu:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=s("uaSg"),l=s("bOdI"),r=s.n(l),a=(s("dKGA"),s("kSul")),n=s.n(a),c=(s("jgNZ"),s("syWm")),d=s.n(c),u={components:(i={},r()(i,d.a.name,d.a),r()(i,n.a.name,n.a),i),name:"productlist",props:["productlist"],methods:{gotoDetail:function(t){this.$emit("gotoDetail",t)}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"bulk_goods"},t._l(t.productlist,function(e,i){return s("li",{key:i,staticClass:"goods-item",on:{click:function(s){t.gotoDetail(e)}}},[s("div",{staticClass:"thumb"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.url,expression:"item.url"}]}),t._v(" "),0==e.isAvalible?s("i",{staticClass:"sell-out sell-out-60"}):t._e()]),t._v(" "),s("div",{staticClass:"detail"},[s("div",{staticClass:"goods-info"},[s("div",{staticClass:"title"},[t._v(t._s(e.skuName))]),t._v(" "),s("div",{staticClass:"meta"},[s("p",{staticClass:"price"},[s("span",[s("em",[t._v("¥")]),t._v(t._s(e.salePrices))]),t._v(" "),e.retailPrices?s("span",{staticClass:"del_price"},[s("em",[t._v("¥")]),t._v(t._s(e.retailPrices))]):t._e()]),t._v(" "),s("div",{staticStyle:{height:"0.4rem"}},[s("span",{staticStyle:{color:"#6e6f70","font-size":"0.25rem","line-height":"0.5rem"}},[t._v("已售 "),s("span",{staticStyle:{color:"#ff7d49"}},[t._v(t._s(e.salesCount?e.salesCount:"0"))]),t._v(" | "),s("span",{staticStyle:{color:"#6e6f70"}},[t._v("评论")]),t._v(" "),s("span",{staticStyle:{color:"#ff7d49"}},[t._v(t._s(e.reviewCount?e.reviewCount:"0"))])]),0==e.isAvalible?s("span",{staticStyle:{"font-weight":"bold",color:"#d41d0f"}},[t._v(t._s(e.unAvalibleReson))]):t._e()])])])])])}))},staticRenderFns:[]};var f={components:{productlist:s("VU/8")(u,p,!1,function(t){s("xVnc")},"data-v-4cc1b088",null).exports},data:function(){return{categoryId:"",page:1,pageSize:10,sortType:0,minPrice:"",maxPrice:"",queryKey:"",show4:!1,zh:"#ff0000",xl:"#6d6d6d",jg:"#6d6d6d",list:[],screenlist:[],selectscreenlist:[],priceSorting:1}},mounted:function(){this.$route.query.categoryId&&(this.categoryId=this.$route.query.categoryId),this.$route.query.queryKey&&(this.queryKey=this.$route.query.queryKey),this.page=1,this.products()},methods:{gotoback:function(){this.$router.go(-2)},screenIng:function(){this.show4=!this.show4,this.screenlist.length>0||this.mallbrands()},screenOk:function(){this.show4=!this.show4,this.loadList()},mallbrands:function(){var t=this;Object(o.a)(this,"/api/mall/category/brands",{category:this.categoryId},"get","",function(e){t.screenlist=e.brands})},products:function(){var t={categoryId:this.categoryId,page:this.page,pageSize:this.pageSize};0!=this.sortType.length&&(t.sortType=this.sortType),0!=this.maxPrice.length&&(t.maxPrice=this.maxPrice),0!=this.minPrice.length&&(t.minPrice=this.minPrice),0!=this.queryKey.length&&(t.queryKey=this.queryKey),0!=this.selectscreenlist.length&&(t.brandIds=this.selectscreenlist.join(","));var e=this;Object(o.a)(this,"/api/mall/products",t,"post",1==this.page?"加载中...":"",function(t){1==e.page?t.skus&&(e.list=t.skus,e.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad"),e.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.reInit")):t.skus?(e.list=e.list.concat(t.skus),t.skus&&e.page==t.totalPages?e.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone"):e.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad")):e.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone")})},priceSor:function(){this.xl="#6d6d6d",this.zh="#6d6d6d",this.jg="#ff0000",1==this.sortType?this.sortType=2:2!=this.sortType&&""!=this.sortType&&3!=this.sortType||(this.sortType=1),this.loadList()},sales:function(){this.xl="#ff0000",this.zh="#6d6d6d",this.jg="#6d6d6d",this.sortType=3,this.loadList()},comprehensive:function(){this.xl="#6d6d6d",this.zh="#ff0000",this.jg="#6d6d6d",this.sortType=0,this.loadList()},loadList:function(){this.page=1,this.products()},loadMore:function(){this.page=this.page+1,this.products()},gotoDetail:function(t){this.$router.push({name:"productsDetail",query:{skuId:t.skuId},meta:{title:"商品详情"}})}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("yd-layout",{attrs:{id:"prolist"}},[s("yd-navbar",{attrs:{slot:"navbar",title:"商品列表",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[s("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(e){t.gotoback()}},slot:"left"},[s("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),s("yd-flexbox",{attrs:{slot:"navbar"},slot:"navbar"},[s("yd-flexbox-item",[s("yd-button",{attrs:{size:"large",type:"hollow",bgcolor:"#fff",color:t.zh},nativeOn:{click:function(e){t.comprehensive()}}},[t._v("综合\n      ")])],1),t._v(" "),s("yd-flexbox-item",[s("yd-button",{attrs:{size:"large",type:"hollow",bgcolor:"#fff",color:t.xl},nativeOn:{click:function(e){t.sales()}}},[t._v("销量")])],1),t._v(" "),s("yd-flexbox-item",[s("yd-button",{attrs:{size:"large",type:"hollow",bgcolor:"#fff",color:t.jg},nativeOn:{click:function(e){t.priceSor()}}},[t._v("价格\n        "),1==t.sortType?s("icon",{attrs:{name:"jg-sx",scale:1.5}}):t._e(),t._v(" "),2==t.sortType?s("icon",{attrs:{name:"jg-jx",scale:1.5}}):t._e(),t._v(" "),"#6d6d6d"==t.jg?s("icon",{attrs:{name:"jg-mr",scale:1.5}}):t._e()],1)],1),t._v(" "),s("yd-flexbox-item",[s("yd-button",{attrs:{size:"large",bgcolor:"#fff",type:"hollow",color:"#6d6d6d"},nativeOn:{click:function(e){t.screenIng()}}},[t._v("筛选\n        "),s("icon",{attrs:{name:"sx",scale:1.5}})],1)],1)],1),t._v(" "),s("yd-pullrefresh",{ref:"pullrefreshDemo",attrs:{callback:t.loadList}},[s("yd-infinitescroll",{ref:"infinitescrollDemo",attrs:{callback:t.loadMore}},[s("productlist",{attrs:{slot:"list",productlist:t.list},on:{gotoDetail:t.gotoDetail},slot:"list"}),t._v(" "),s("span",{attrs:{slot:"doneTip"},slot:"doneTip"},[t._v("我是有底线的")])],1)],1),t._v(" "),s("yd-popup",{attrs:{position:"right",width:"70%"},model:{value:t.show4,callback:function(e){t.show4=e},expression:"show4"}},[s("div",{staticClass:"splb2"},[s("p",{staticClass:"splb3"},[t._v("价格区间")]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.minPrice,expression:"minPrice"}],staticClass:"splb4",staticStyle:{"border-radius":"3px"},attrs:{type:"number",placeholder:"最高价"},domProps:{value:t.minPrice},on:{input:function(e){e.target.composing||(t.minPrice=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPrice,expression:"maxPrice"}],staticClass:"splb5",staticStyle:{"border-radius":"3px"},attrs:{type:"number",placeholder:"最低价"},domProps:{value:t.maxPrice},on:{input:function(e){e.target.composing||(t.maxPrice=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"splb6"})]),t._v(" "),s("div",{staticClass:"splb2"},[s("p",{staticClass:"splb3"},[t._v("品牌")]),t._v(" "),s("yd-checkbox-group",{attrs:{color:"#d41d0f"},model:{value:t.selectscreenlist,callback:function(e){t.selectscreenlist=e},expression:"selectscreenlist"}},t._l(t.screenlist,function(e,i){return s("yd-checkbox",{key:i,attrs:{val:e.brandId,shape:"circle"}},[t._v(t._s(e.brandName))])}))],1),t._v(" "),s("div",{staticStyle:{"margin-top":"2rem"}},[s("yd-button",{staticStyle:{width:"80%","margin-left":"10%","font-size":".3rem"},attrs:{size:"large",type:"danger",bgcolor:"#d41d0f",color:"#ffffff"},nativeOn:{click:function(e){t.screenOk()}}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var v=s("VU/8")(f,h,!1,function(t){s("kj+N"),s("gd0e")},"data-v-10b7881f",null);e.default=v.exports},gd0e:function(t,e){},"kj+N":function(t,e){},xVnc:function(t,e){}});
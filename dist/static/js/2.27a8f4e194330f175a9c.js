webpackJsonp([2],{"076A":function(t,e){},"3evy":function(t,e,i){i("xL5C"),i("076A")},"67Fi":function(t,e,i){"use strict";(function(t){e.__esModule=!0,e.raf=function(t){return n.call(o,t)},e.cancel=function(t){r.call(o,t)};var s=i("VxeN"),a=Date.now();var o=s.isServer?t:window,n=o.requestAnimationFrame||o.webkitRequestAnimationFrame||function(t){var e=Date.now(),i=Math.max(0,16-(e-a)),s=setTimeout(t,i);return a=e+i,s},r=o.cancelAnimationFrame||o.webkitCancelAnimationFrame||o.clearTimeout}).call(e,i("DuR2"))},CCOf:function(t,e,i){i("xL5C")},Irlo:function(t,e,i){"use strict";e.__esModule=!0;var s=o(i("ArwO")),a=o(i("gVfS"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,s.default)({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"van-tab__pane",class:{"van-tab__pane--select":this.index===this.parentGroup.curActive}},[this._t("default")],2)},name:"tab",mixins:[a.default],props:{title:String,disabled:Boolean},computed:{index:function(){return this.parentGroup.tabs.indexOf(this)}},created:function(){this.findParentByName("van-tabs"),this.parentGroup.tabs.push(this)},destroyed:function(){this.parentGroup.tabs.splice(this.index,1)}})},J0vh:function(t,e){},U9so:function(t,e){},aS2L:function(t,e,i){"use strict";e.__esModule=!0,e.default={name:"van-node",functional:!0,props:{node:Array},render:function(t,e){return e.props.node}}},gVfS:function(t,e,i){"use strict";e.__esModule=!0,e.default={methods:{findParentByName:function(t){if(!this.parentGroup)for(var e=this.$parent;e;){if(e.$options.name===t){this.parentGroup=e;break}e=e.$parent}return this.parentGroup}}}},rrcz:function(t,e,i){"use strict";e.__esModule=!0;var s=c(i("ArwO")),a=i("67Fi"),o=i("NrR7"),n=c(i("aS2L")),r=c(i("KRZb"));function c(t){return t&&t.__esModule?t:{default:t}}e.default=(0,s.default)({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"van-tabs",class:"van-tabs--"+t.type},[i("div",{ref:"wrap",staticClass:"van-tabs__wrap",class:["van-tabs__wrap--"+t.position,{"van-tabs--scrollable":t.scrollable,"van-hairline--top-bottom":"line"===t.type}]},[i("div",{ref:"nav",staticClass:"van-tabs__nav",class:"van-tabs__nav--"+t.type},["line"===t.type?i("div",{staticClass:"van-tabs__nav-bar",style:t.navBarStyle}):t._e(),t._l(t.tabs,function(e,s){return i("div",{key:s,ref:"tabs",refInFor:!0,staticClass:"van-tab",class:{"van-tab--active":s===t.curActive,"van-tab--disabled":e.disabled},on:{click:function(e){t.onClick(s)}}},[e.$slots.title?i("van-node",{attrs:{node:e.$slots.title}}):i("span",{staticClass:"van-ellipsis"},[t._v(t._s(e.title))])],1)})],2)]),i("div",{ref:"content",staticClass:"van-tabs__content"},[t._t("default")],2)])},name:"tabs",components:{VanNode:n.default},props:{sticky:Boolean,active:{type:[Number,String],default:0},type:{type:String,default:"line"},duration:{type:Number,default:.2},swipeThreshold:{type:Number,default:4},swipeable:Boolean},data:function(){return{tabs:[],position:"content-top",curActive:0,navBarStyle:{}}},computed:{scrollable:function(){return this.tabs.length>this.swipeThreshold}},watch:{active:function(t){this.correctActive(t)},tabs:function(t){this.correctActive(this.curActive||this.active),this.setNavBar()},curActive:function(){this.scrollIntoView(),this.setNavBar(),"page-top"!==this.position&&"content-bottom"!==this.position||r.default.setScrollTop(this.scrollEl,r.default.getElementTop(this.$el))},sticky:function(t){this.scrollHandler(t)}},mounted:function(){var t=this;this.correctActive(this.active),this.setNavBar(),this.$nextTick(function(){t.sticky&&t.scrollHandler(!0),t.swipeable&&t.swipeableHandler(!0),t.scrollIntoView()})},beforeDestroy:function(){this.sticky&&this.scrollHandler(!1),this.swipeable&&this.swipeableHandler(!1)},methods:{scrollHandler:function(t){this.scrollEl=this.scrollEl||r.default.getScrollEventTarget(this.$el),(t?o.on:o.off)(this.scrollEl,"scroll",this.onScroll,!0),t&&this.onScroll()},swipeableHandler:function(t){var e=this.$refs.content;(t?o.on:o.off)(e,"touchstart",this.onTouchStart,!1),(t?o.on:o.off)(e,"touchmove",this.onTouchMove,!1),(t?o.on:o.off)(e,"touchend",this.onTouchEnd,!1),(t?o.on:o.off)(e,"touchcancel",this.onTouchEnd,!1)},onTouchStart:function(t){this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},onTouchMove:function(t){this.deltaX=t.touches[0].clientX-this.startX,this.direction=this.getDirection(t.touches[0])},onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.curActive;"horizontal"===t&&Math.abs(e)>=50&&(e>0&&0!==i?this.curActive=i-1:e<0&&i!==this.tabs.length-1&&(this.curActive=i+1))},getDirection:function(t){var e=Math.abs(t.clientX-this.startX),i=Math.abs(t.clientY-this.startY);return e>i?"horizontal":e<i?"vertical":""},onScroll:function(){var t=r.default.getScrollTop(this.scrollEl),e=r.default.getElementTop(this.$el),i=e+this.$el.offsetHeight-this.$refs.wrap.offsetHeight;this.position=t>i?"page-top":t>e?"page-top":"content-top"},setNavBar:function(){var t=this;this.$nextTick(function(){if(t.$refs.tabs){var e=t.$refs.tabs[t.curActive];t.navBarStyle={width:(e.offsetWidth||0)+"px",transform:"translate("+(e.offsetLeft||0)+"px, 0)",transitionDuration:t.duration+"s"}}})},correctActive:function(t){t=+t;var e=this.tabs.some(function(e){return e.index===t}),i=(this.tabs[0]||{}).index||0;this.curActive=e?t:i},onClick:function(t){var e=this.tabs[t],i=e.title;e.disabled?this.$emit("disabled",t,i):(this.$emit("click",t,i),this.curActive=t)},scrollIntoView:function(){if(this.scrollable&&this.$refs.tabs){var t=this.$refs.tabs[this.curActive],e=this.$refs.nav,i=e.scrollLeft,s=e.offsetWidth,a=t.offsetLeft,o=t.offsetWidth;this.scrollTo(e,i,a-(s-o)/2)}},scrollTo:function(t,e,i){var s=0,o=Math.round(1e3*this.duration/16);!function n(){t.scrollLeft+=(i-e)/o,++s<o&&(0,a.raf)(n)}()}}})},yo21:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("i9vB");var s,a,o=i("Mqtp"),n=i.n(o),r=i("bOdI"),c=i.n(r),l=(i("CCOf"),i("rrcz")),u=i.n(l),d=(i("3evy"),i("Irlo")),p=i.n(d),v=(i("G/J0"),i("beN6")),f=i.n(v),h=(i("08XL"),i("24wo")),m=i.n(h),b=(i("dKGA"),i("kSul")),_=i.n(b),g=(i("QP/A"),i("pyxX")),y=i.n(g),k=(i("cnGM"),i("S6j6")),w=i.n(k),S=(i("FDxC"),i("w+oK")),x=i.n(S),C=(i("SpPX"),i("yqud")),A=i.n(C),I=(i("69Li"),i("RI/5")),$=i.n(I),O=(i("mAGR"),i("NYHp")),N=i.n(O),B=(i("JtRP"),i("EJoZ")),D=i.n(B),T=i("Dd8w"),E=i.n(T),M=i("uaSg"),q=i("yclV"),j=(i("7+uW"),i("NYxO")),z=(a={computed:E()({},Object(j.b)(["quantity"])),components:(s={},c()(s,D.a.name,D.a),c()(s,N.a.name,N.a),c()(s,$.a.name,$.a),c()(s,A.a.name,A.a),c()(s,x.a.name,x.a),c()(s,w.a.name,w.a),c()(s,y.a.name,y.a),c()(s,_.a.name,_.a),c()(s,n.a.name,n.a),c()(s,m.a.name,m.a),c()(s,f.a.name,f.a),c()(s,p.a.name,p.a),c()(s,u.a.name,u.a),s),data:function(){return{active:0,screenWidth:document.body.clientWidth,sku:{tree:[],list:[],stock_num:1,collection_id:0,price:"",none_sku:!0,messages:[{datetime:"0",multiple:"0",name:"留言",type:"text",required:"0"}],hide_stock:!1,resetStepperOnHide:!0,resetSelectedSkuOnHide:!0},isCarOrBuy:0,goods:{title:"",picture:""},goodsId:"",showBase:!1,tabkey:0,productId:"",defaultSkuId:"",product:{isAvalible:!0,skuAssociation:{}},skuid:"",price:0,guidePrice:0,spinner4:1,show2:!1,securityView:!1,descriptions:[],previewlist:[],param:{},images:{},reviewslist:[],reviewCount:"0",securitylst:["正品保障","正规发票","自营门店"]}}},c()(a,"computed",{}),c()(a,"mounted",function(){var t=this;window.onresize=function(){return window.screenWidth=document.body.clientWidth,void(t.screenWidth=window.screenWidth)},this.productId=this.$route.query.skuId,this.productDetail()}),c()(a,"methods",{shopping:function(t){this.isCarOrBuy=t,this.showBase=!this.showBase},gotoback:function(){this.$router.go(-1)},getCartsQuantity:function(){var t=this;Object(M.a)(this,"/api/carts/cartsQuantity",{},"get","",function(e){e.quantity&&t.$store.dispatch("setQuantity",e.quantity)})},productDetail:function(){var t=this;Object(M.a)(this,"/api/mall/skuDetail",{skuId:this.productId},"get","加载中...",function(e){t.product=e.product,e.product&&(t.defaultSkuId=e.product.skuId,t.skuid=e.product.skuId,t.price=e.product.price,t.guidePrice=e.product.guidePrice,t.sku.stock_num=e.product.stock,t.sku.price=e.product.price,t.sku.collection_id=e.product.skuId,t.goods.title=e.product.skuName,t.goodsId=e.product.skuId,t.sku.none_sku=e.product.noneSku,t.sku.hide_stock=e.product.hideStock);var i=[];e.product.images&&(t.goods.picture=e.product.images[0],e.product.images.forEach(function(t){i.push({src:t})})),t.previewlist=i,e.skus&&(t.sku.list=e.skus),e.productOptions&&(t.sku.tree=e.productOptions),t.productDesc()})},productDesc:function(){var t=this;Object(M.a)(this,"/api/mall/productDesc",{skuId:this.productId},"get","加载中...",function(e){e.images&&(t.images=e.images),e.images.descriptions&&(t.descriptions=e.images.descriptions),e.images.param&&(t.param=e.images.param),t.reviews()})},reviews:function(){var t=this;Object(M.a)(this,"/api/mall/reviews",{skuId:this.productId,page:1,pageSize:"8"},"get","加载中...",function(e){e.reviews&&(t.reviewslist=e.reviews),e.reviewCount&&(t.reviewCount=e.reviewCount)})},loadList:function(){this.page=1,this.reviews1(!0)},loadMore:function(){this.page=this.page+1,this.reviews1(!0)},gotoSecurityDeatil:function(){this.securityView=!this.securityView},additem:function(t){var e="";e=t.selectedSkuComb?t.selectedSkuComb.id:t.goodsId;var i=this;Object(M.a)(this,"/api/carts/addToCarts",{skuId:e,quantity:t.selectedNum,merchantId:this.product.merchantId},"post","",function(t){i.showBase=!1,i.getCartsQuantity()})},gotoCar:function(){this.$router.push({name:"shoppingCart",meta:{title:"购物车"}})},gotoOder:function(t){var e="";e=t.selectedSkuComb?t.selectedSkuComb.id:t.goodsId;var i={},s=Object(q.a)("carInfo");s.type&&(i.carDetailId=s.id);var a=Object(q.a)("cityInfo");a.cityName?i.location=a.cityName:i.location="重庆",i.orderType="GENERAL";var o=[],n={};n.skuId=e,n.quantity=t.selectedNum,o.push(n),0!=o.length?(i.products=o,Object(q.e)("oderInfo",i),this.$router.push({name:"orderSubmit"})):this.$dialog.toast({mes:"请选择购物商品",timeout:1e3})},gotoReview:function(){this.$router.push({name:"reviewsList",query:{skuId:this.productId},meta:{title:"评价列表"}})},onClickMiniBtn:function(){var t=this.$store.getters.baseInfo;window.location.href="tel://"+t.storePhone},showPreview:function(t){var e=[];this.previewlist.forEach(function(t){e.push(t.src)}),n()(e,t)},showPreviewDetail:function(t){n()(this.descriptions,t)}}),a),P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("yd-layout",{attrs:{id:"proDetail"}},[i("van-swipe",{style:{height:t.screenWidth+"px"},attrs:{autoplay:3e3}},t._l(t.previewlist,function(e,s){return i("van-swipe-item",{key:s},[i("div",{staticClass:"thumb"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"item.src"}],on:{click:function(e){t.showPreview(s)}}})])])})),t._v(" "),i("van-cell-group",[i("van-cell",[i("p",{staticClass:"skuName"},[t._v(t._s(t.product.skuName))]),t._v(" "),i("p",{staticClass:"longDescription"},[t._v(t._s(t.product.longDescription))]),t._v(" "),i("p",{staticClass:"price"},[t._v("¥"),i("em",[t._v(t._s(t.price))]),t._v(" "),i("em",{staticClass:"guidePrice"},[t._v("¥"+t._s(t.guidePrice))])]),t._v(" "),t.product.skuAssociation.gift&&t.product.skuAssociation.gift.length>0?i("div",[i("span",{staticStyle:{color:"#7f828f",float:"left","padding-top":"0.1rem"}},[t._v("促销:  ")]),t._v(" "),i("yd-flexbox",[i("yd-flexbox-item",t._l(t.product.skuAssociation.gift,function(e){return i("p",{staticStyle:{"padding-top":"0.1rem","padding-bottom":"0.1rem"}},[i("span",{staticStyle:{"border-radius":"0.1rem",border:"1px solid #d41d0f",color:"#d41d0f",padding:"0 0.1rem"}},[t._v("赠品")]),t._v(" "+t._s(e.skuName)+" ")])}))],1)],1):t._e(),t._v(" "),t.product.skuAssociation.service&&t.product.skuAssociation.service.length>0?i("div",[i("span",{staticStyle:{color:"#7f828f",float:"left","padding-top":"0.1rem"}},[t._v("服务:  ")]),t._v(" "),i("yd-flexbox",[i("yd-flexbox-item",t._l(t.product.skuAssociation.service,function(e){return t.product.skuAssociation.service?i("p",{staticStyle:{"padding-top":"0.1rem","padding-bottom":"0.1rem"}},[i("span",{staticStyle:{"border-radius":"0.1rem",border:"1px solid #d41d0f",color:"#d41d0f",padding:"0 0.1rem"}},[t._v("服务")]),t._v("  "+t._s(e.serviceName))]):t._e()}))],1)],1):t._e()])],1),t._v(" "),i("van-cell-group",{staticStyle:{"margin-top":"0.2rem","margin-bottom":"0.2rem"}},[i("van-cell",[i("span",{staticClass:"store"},[t._v("商家")]),t._v(" "),i("span",{staticClass:"storeName"},[t._v(" "+t._s(t.product.storeName)+" ")])])],1),t._v(" "),i("van-tabs",{staticStyle:{"background-color":"#ffffff","margin-bottom":"1rem","z-index":"1"},attrs:{active:t.active,swipeable:"",sticky:"",duration:.5,id:"tabs"}},[i("van-tab",{attrs:{title:"商品详情"}},[i("van-cell-group",[i("van-cell",[i("span",{staticClass:"qbpj1"},[i("em",{staticStyle:{color:"#D41D0F","font-size":".5rem"}},[t._v("|")]),t._v(" 商品规格")])]),t._v(" "),i("van-cell",[i("van-col",{staticStyle:{"border-right":"1px solid #f5f5f5","border-bottom":"1px solid #f5f5f5"},attrs:{span:"12"}},[t._v("等级:"+t._s(t.param.greade))]),t._v(" "),i("van-col",{staticStyle:{"border-bottom":"1px solid #f5f5f5","padding-left":"0.2rem"},attrs:{span:"12"}},[t._v("规格:"+t._s(t.param.model))]),t._v(" "),i("van-col",{staticStyle:{"border-right":"1px solid #f5f5f5","padding-right":"0.2rem"},attrs:{span:"12"}},[t._v("单位:"+t._s(t.param.unit))]),t._v(" "),i("van-col",{staticStyle:{"padding-left":"0.2rem"},attrs:{span:"12"}},[t._v("产地:"+t._s(t.param.place))])],1)],1),t._v(" "),i("van-cell-group",[i("van-cell",[i("span",{staticClass:"qbpj1"},[i("em",{staticStyle:{color:"#D41D0F","font-size":".5rem"}},[t._v("|")]),t._v(" 商品详情")])]),t._v(" "),t._l(t.descriptions,function(e,s){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}],key:s,staticStyle:{width:"100%",display:"block"},on:{click:function(e){t.showPreviewDetail(s)}}})})],2)],1),t._v(" "),i("van-tab",{attrs:{title:"商品评价"}},[i("van-cell-group",[i("van-cell",[i("span",{staticClass:"qbpj1"},[t._v("评价")])]),t._v(" "),t.reviewslist.length>0?i("van-cell",{staticClass:"reviews"},[i("ul",t._l(t.reviewslist,function(e){return i("li",[i("yd-flexbox",{staticStyle:{"padding-top":"0.2rem"}},[i("div",{staticStyle:{width:"1rem",height:"1rem",overflow:"hidden","border-radius":"50%",border:"1px solid #edeeef","margin-left":"0.2rem"}},[i("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.avatar}})]),t._v(" "),i("yd-flexbox-item",{staticStyle:{"margin-left":"0.2rem"}},[i("yd-flexbox",{attrs:{direction:"vertical"}},[i("yd-flexbox-item",{staticStyle:{"line-height":"0.6rem","font-size":"0.3rem"}},[t._v(t._s(e.name))]),t._v(" "),i("yd-flexbox-item",[i("yd-rate",{attrs:{size:".3rem",readonly:!0,color:"#d41d0f","active-color":"#d41d0f"},model:{value:e.level,callback:function(i){t.$set(e,"level",i)},expression:"item.level"}})],1)],1)],1),t._v(" "),i("div",{staticStyle:{"padding-right":".3rem",color:"#9a9b9c"}},[t._v(t._s(e.date))])],1),t._v(" "),i("yd-flexbox",{staticStyle:{"margin-left":"1.4rem","margin-top":"0.2rem"}},[i("div",{staticStyle:{color:"#666869"}},[t._v(t._s(e.desc))])]),t._v(" "),i("yd-flexbox",{staticStyle:{"margin-bottom":"0.2rem"}},[i("yd-lightbox",{staticClass:"pj_9"},t._l(e.reviewImgs,function(t,e){return i("yd-lightbox-img",{key:e,staticClass:"xqpjtp1",attrs:{src:t}})}))],1),t._v(" "),e.childrens&&e.childrens.length>0?i("div",{staticStyle:{padding:".1rem"}},t._l(e.childrens,function(e){return i("p",{staticStyle:{"background-color":"#edeeef",padding:".2rem"}},[i("span",{staticStyle:{color:"rgb(255, 125, 73)"}},[t._v("官方回复：")]),t._v(t._s(e.desc)+"\n                ")])})):t._e()],1)}))]):t._e(),t._v(" "),i("van-cell",[i("van-col",{attrs:{offise:"1",span:"11"}},[t._v("共"),i("span",{staticStyle:{color:"#f00"}},[t._v(t._s(t.reviewCount))]),t._v(" 评论")]),t._v(" "),i("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"},nativeOn:{click:function(e){t.gotoReview(e)}}},[t._v("查看更多"),i("div",{staticClass:"yd-cell-arrow",staticStyle:{float:"right"}})])],1)],1)],1)],1),t._v(" "),i("van-goods-action",{staticStyle:{"z-index":"1"},attrs:{slot:"tabbar"},slot:"tabbar"},[i("van-goods-action-mini-btn",{attrs:{icon:"chat",text:"客服"},on:{click:t.onClickMiniBtn}}),t._v(" "),i("van-goods-action-mini-btn",{attrs:{icon:"cart",text:"购物车",info:t.$store.state.basicStorage.quantity+""},on:{click:function(e){t.gotoCar()}}}),t._v(" "),1==t.product.isAvalible?i("van-goods-action-big-btn",{attrs:{text:"加入购物车"},on:{click:function(e){t.shopping(1)}}}):t._e(),t._v(" "),1==t.product.isAvalible?i("van-goods-action-big-btn",{attrs:{text:"立即购买",primary:""},on:{click:function(e){t.shopping(2)}}}):t._e(),t._v(" "),0==t.product.isAvalible?i("van-goods-action-big-btn",{attrs:{text:"库存不足"}}):t._e()],1),t._v(" "),i("van-sku",{attrs:{slot:"tabbar",sku:t.sku,goods:t.goods,"goods-id":t.goodsId,"hide-stock":t.sku.hide_stock,quota:0,"reset-stepper-on-hide":t.sku.resetStepperOnHide,"reset-selected-sku-on-hide":t.sku.resetSelectedSkuOnHide},on:{"buy-clicked":t.gotoOder,"add-cart":t.additem},slot:"tabbar",scopedSlots:t._u([{key:"sku-actions",fn:function(e){return[i("div",{staticClass:"van-sku-actions"},[1==t.isCarOrBuy?i("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:function(t){e.skuEventBus.$emit("sku:addCart")}}},[t._v("加入购物车")]):2==t.isCarOrBuy?i("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:function(t){e.skuEventBus.$emit("sku:buy")}}},[t._v("下一步")]):t._e()],1)]}}]),model:{value:t.showBase,callback:function(e){t.showBase=e},expression:"showBase"}})],1)},staticRenderFns:[]};var H=i("VU/8")(z,P,!1,function(t){i("U9so"),i("J0vh")},"data-v-56779474",null);e.default=H.exports}});
webpackJsonp([5],{"/HaV":function(t,e,n){"use strict";e.__esModule=!0;var i=o(n("pFYg"));e.default=function t(e){if(Array.isArray(e))return e.map(function(e){return t(e)});if("object"===(void 0===e?"undefined":(0,i.default)(e)))return(0,s.default)({},e);return e};var s=o(n("bhS9"));function o(t){return t&&t.__esModule?t:{default:t}}},"Qp/9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("i9vB");var i,s=n("Mqtp"),o=n.n(s),a=n("bOdI"),r=n.n(a),u=(n("FDxC"),n("w+oK")),c=n.n(u),l=(n("SpPX"),n("yqud")),d=n.n(l),h=(n("69Li"),n("RI/5")),m=n.n(h),f=(n("mAGR"),n("NYHp")),p=n.n(f),v=(n("JtRP"),n("EJoZ")),g=n.n(v),k=(n("dKGA"),n("kSul")),_=n.n(k),b=(n("QP/A"),n("pyxX")),y=n.n(b),x=(n("cnGM"),n("S6j6")),C=n.n(x),I=(n("G/J0"),n("beN6")),S=n.n(I),w=(n("08XL"),n("24wo")),M=n.n(w),O=(n("jydU"),n("WQwN")),T=n.n(O),V=(n("tLo2"),n("blRl")),$=n.n(V),H=(n("Rv11"),n("TMdk")),N=n.n(H),D=n("Dd8w"),P=n.n(D),B=n("yclV"),E=n("uaSg"),j=n("NYxO"),q={computed:P()({},Object(j.b)(["quantity"])),components:(i={},r()(i,N.a.name,N.a),r()(i,$.a.name,$.a),r()(i,T.a.name,T.a),r()(i,M.a.name,M.a),r()(i,S.a.name,S.a),r()(i,C.a.name,C.a),r()(i,y.a.name,y.a),r()(i,_.a.name,_.a),r()(i,g.a.name,g.a),r()(i,p.a.name,p.a),r()(i,m.a.name,m.a),r()(i,d.a.name,d.a),r()(i,c.a.name,c.a),r()(i,o.a.name,o.a),i),data:function(){return{loading:!1,stroelist:[],stroeIds:[],currentMerchant:"",merchat_stock:0,screenWidth:document.body.clientWidth,showBase:!1,show:!1,promotionSkuId:"",securitylst:["正品保障","正规发票","自营门店"],param:{},descriptions:[],sku:{tree:[],list:[],none_sku:!0,stock_num:1,collection_id:0,price:"",messages:[{datetime:"0",multiple:"0",name:"留言",type:"text",required:"0"}],hide_stock:!1,resetStepperOnHide:!0,resetSelectedSkuOnHide:!0},goods:{title:"",picture:""},quota:0,skuModel:{},goodsId:"",endTime:""}},mounted:function(){this.promotionSkuId=this.$route.query.promotionSkuId,this.getDetail();var t=this;window.onresize=function(){return window.screenWidth=document.body.clientWidth,void(t.screenWidth=window.screenWidth)}},methods:{onClickExchange:function(){0!=this.stroelist.length?this.showBase=!this.showBase:this.$dialog.toast({mes:"没有门店可兑换",timeout:1500})},onCancel:function(){this.show=!this.show},onConfirm:function(t,e){this.currentMerchant=t,this.getSkuInventory(this.stroeIds[e]),this.show=!this.show},gotoback:function(){this.$router.go(-1)},getSkuInventory:function(t){var e=this;Object(E.a)(this,"/api/promotion/getSkuInventory",{merchant_Id:t,skuId:this.skuModel.skuId},"get","加载中...",function(t){e.merchat_stock=t.SkuQuantity,e.sku.stock_num=t.SkuQuantity})},getDetail:function(){var t=this;Object(E.a)(this,"/api/promotion/promotionSku",{promotionSkuId:this.promotionSkuId},"get","加载中...",function(e){var n=e.promotion;1==n.hasLimit&&(t.quota=n.limitQuantity),t.endTime=n.promotionVO.endTime,e.productOptions&&(t.sku.tree=e.productOptions),e.skus&&(t.sku.none_sku=!1,t.sku.list=e.skus),n&&(t.skuModel=n,t.sku.collection_id=n.skuId,t.goods.picture=n.image,t.goods.title=n.skuName,t.goodsId=n.skuId),n.merchant&&n.merchant.length>0&&(t.stroelist=n.merchant.map(function(t){return t.storeName}),t.stroeIds=n.merchant.map(function(t){return t.merchantId}),t.currentMerchant=t.stroelist[0],t.getSkuInventory(t.stroeIds[0])),t.productDesc()})},productDesc:function(){var t=this;Object(E.a)(this,"/api/mall/productDesc",{skuId:this.skuModel.skuId},"get","",function(e){e.images&&(e.images.descriptions&&(t.descriptions=e.images.descriptions),e.images.param&&(t.param=e.images.param))})},formatPrice:function(t){var e=new Date(t),n=e.getFullYear()+"/",i=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"/",s=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",o=e.getHours()+":",a=e.getMinutes()+":",r=e.getSeconds();this.endTime=n+i+s+o+a+r},showPreview:function(t){o()(this.skuModel.images,t)},showPreviewDetail:function(t){o()(this.descriptions,t)},gotoCar:function(){this.$router.push({name:"shoppingCart",meta:{title:"购物车"}})},gotoOder:function(t){var e={};e.shippingType=this.skuModel.shippingType,e.promotionId=this.skuModel.promotionId;var n="",i="";t.selectedSkuComb?(n=t.selectedSkuComb.id,i=t.selectedSkuComb.price):(n=t.goodsId,i=this.skuModel.bonusPoints),e.messages=t.messages.message_0,e.productSkuId=n,e.quantity=t.selectedNum,e.bonusPoints=i,Object(B.e)("oderInfo",e),this.$router.push({name:"PointsSubmit"})},onClickMiniBtn:function(){var t=this.$store.getters.baseInfo;window.location.href="tel://"+t.storePhone}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yd-layout",[n("yd-navbar",{attrs:{slot:"navbar",title:"商品详情",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[n("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(e){t.gotoback()}},slot:"left"},[n("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),n("van-swipe",{staticStyle:{transform:"none"},style:{height:t.screenWidth+"px"},attrs:{autoplay:3e3}},t._l(t.skuModel.image,function(e,i){return n("van-swipe-item",{key:i,staticClass:"thumb"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"image"}],staticStyle:{"min-height":"100px"},on:{click:function(e){t.showPreview(i)}}})])})),t._v(" "),n("van-cell-group",[n("div",{staticStyle:{"border-top":"1px solid #eeeeee",height:"120px","border-bottom":"10px solid #eeeeee"}},[n("p",{staticStyle:{"font-size":"14px","text-align":"center","padding-top":"20px"}},[t._v(t._s(t.skuModel.skuName))]),t._v(" "),n("p",{staticStyle:{"font-size":"12px","text-align":"center","padding-top":"10px",color:"#999999"}},[t._v(t._s(t.skuModel.skuDescription))]),t._v(" "),n("p",{staticStyle:{"text-align":"center","padding-top":"10px"}},[n("em",{staticStyle:{color:"red","font-size":"16px","font-weight":"bold"}},[t._v(t._s(t.skuModel.promotionPoint)+"积分")]),t._v(" "),t._e()])])]),t._v(" "),n("van-cell-group",{staticStyle:{"margin-top":"0.2rem"}},[n("van-cell",{attrs:{title:"门店选择","is-link":""},on:{click:function(e){t.show=!t.show}}},[t._v(t._s(t.currentMerchant))]),t._v(" "),n("van-cell",{attrs:{title:"剩余："}},[t._v("\n      "+t._s(t.merchat_stock)+"件\n    ")])],1),t._v(" "),n("van-cell-group",{staticStyle:{"margin-top":"0.2rem","margin-bottom":"1.2rem"}},[n("van-cell",[t._v("\n      商品详情\n    ")]),t._v(" "),n("van-cell",[n("van-col",{staticStyle:{"border-right":"1px solid #f5f5f5","border-bottom":"1px solid #f5f5f5"},attrs:{span:"12"}},[t._v("等级"+t._s(t.param.greade))]),t._v(" "),n("van-col",{staticStyle:{"border-bottom":"1px solid #f5f5f5","padding-left":"0.2rem"},attrs:{span:"12"}},[t._v("规格"+t._s(t.param.model))]),t._v(" "),n("van-col",{staticStyle:{"border-right":"1px solid #f5f5f5","padding-right":"0.2rem"},attrs:{span:"12"}},[t._v("单位"+t._s(t.param.unit))]),t._v(" "),n("van-col",{staticStyle:{"padding-left":"0.2rem"},attrs:{span:"12"}},[t._v("产地"+t._s(t.param.place))])],1),t._v(" "),n("van-cell",{staticStyle:{padding:"0px",margin:"0","line-height":"normal"}},[n("div",{staticClass:"detal"},t._l(t.descriptions,function(e,i){return n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"img"}],key:i,on:{click:function(e){t.showPreviewDetail(i)}}})}))])],1),t._v(" "),n("van-goods-action",{attrs:{slot:"tabbar"},slot:"tabbar"},[n("van-goods-action-mini-btn",{attrs:{icon:"chat",text:"客服"},on:{click:t.onClickMiniBtn}}),t._v(" "),n("van-goods-action-big-btn",{attrs:{text:"立即兑换",primary:""},on:{click:t.onClickExchange}})],1),t._v(" "),n("van-sku",{attrs:{slot:"tabbar",sku:t.sku,goods:t.goods,"goods-id":t.goodsId,"hide-stock":t.sku.hide_stock,quota:t.quota,"reset-stepper-on-hide":t.sku.resetStepperOnHide,"reset-selected-sku-on-hide":t.sku.resetSelectedSkuOnHide},on:{"buy-clicked":t.gotoOder},slot:"tabbar",scopedSlots:t._u([{key:"sku-header",fn:function(e){return[n("div",{staticClass:"van-sku-header van-hairline--bottom"},[n("div",{staticClass:"van-sku-header__img-wrap"},[n("img",{staticClass:"van-sku__goods-img",attrs:{src:t.skuModel.image}})]),t._v(" "),n("div",{staticClass:"van-sku-header__goods-info"},[n("div",{staticClass:"van-sku__goods-name van-ellipsis"},[t._v(t._s(t.skuModel.skuName))]),t._v(" "),n("div",{staticClass:"van-sku__goods-price"},[n("span",{staticClass:"van-sku__price-num"},[t._v(t._s(t.skuModel.promotionPoint)+"积分")])]),t._v(" "),n("van-icon",{staticClass:"van-sku__close-icon",attrs:{name:"close"},on:{click:function(t){e.skuEventBus.$emit("sku:close")}}})],1)])]}},{key:"sku-actions",fn:function(e){return[n("div",{staticClass:"van-sku-actions"},[n("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:function(t){e.skuEventBus.$emit("sku:buy")}}},[t._v("立即兑换")])],1)]}}]),model:{value:t.showBase,callback:function(e){t.showBase=e},expression:"showBase"}}),t._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-picker",{attrs:{"show-toolbar":"",title:"选择门店",columns:t.stroelist},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1)],1)},staticRenderFns:[]};var A=n("VU/8")(q,F,!1,function(t){n("VES+")},"data-v-b92cd116",null);e.default=A.exports},Rv11:function(t,e,n){n("xL5C"),n("y0N0")},TMdk:function(t,e,n){"use strict";e.__esModule=!0;var i=a(n("ArwO")),s=a(n("oCfm")),o=a(n("/HaV"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=(0,i.default)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"van-picker"},[t.showToolbar?n("div",{staticClass:"van-picker__toolbar van-hairline--top-bottom"},[t._t("default",[n("div",{staticClass:"van-picker__cancel",on:{click:function(e){t.emit("cancel")}}},[t._v(t._s(t.cancelButtonText||t.$t("cancel")))]),t.title?n("div",{staticClass:"van-picker__title van-ellipsis",domProps:{textContent:t._s(t.title)}}):t._e(),n("div",{staticClass:"van-picker__confirm",on:{click:function(e){t.emit("confirm")}}},[t._v(t._s(t.confirmButtonText||t.$t("confirm")))])])],2):t._e(),t.loading?n("div",{staticClass:"van-picker__loading"},[n("loading")],1):t._e(),n("div",{staticClass:"van-picker__columns",style:t.columnsStyle,on:{touchmove:function(t){t.preventDefault()}}},[t._l(t.currentColumns,function(e,i){return n("picker-column",{key:i,attrs:{"value-key":t.valueKey,options:e.values,"class-name":e.className,"default-index":e.defaultIndex,"item-height":t.itemHeight,"visible-item-count":t.visibleItemCount},on:{change:function(e){t.onChange(i)}}})}),n("div",{staticClass:"van-picker__frame van-hairline--top-bottom",style:t.frameStyle})],2)])},name:"picker",components:{PickerColumn:s.default},props:{title:String,loading:Boolean,showToolbar:Boolean,confirmButtonText:String,cancelButtonText:String,visibleItemCount:{type:Number,default:5},valueKey:{type:String,default:"text"},itemHeight:{type:Number,default:44},columns:{type:Array,default:function(){return[]}}},data:function(){return{children:[],currentColumns:[]}},created:function(){this.initColumns()},watch:{columns:function(){this.initColumns()}},computed:{frameStyle:function(){return{height:this.itemHeight+"px"}},columnsStyle:function(){return{height:this.itemHeight*this.visibleItemCount+"px"}}},methods:{initColumns:function(){var t=this.columns.map(o.default);this.isSimpleColumn=t.length&&!t[0].values,this.currentColumns=this.isSimpleColumn?[{values:t}]:t},emit:function(t){this.isSimpleColumn?this.$emit(t,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit(t,this.getValues(),this.getIndexes())},onChange:function(t){this.isSimpleColumn?this.$emit("change",this,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit("change",this,this.getValues(),t)},getColumn:function(t){return this.children[t]},getColumnValue:function(t){return(this.getColumn(t)||{}).currentValue},setColumnValue:function(t,e){var n=this.getColumn(t);n&&n.setValue(e)},getColumnIndex:function(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex:function(t,e){var n=this.getColumn(t);n&&n.setIndex(e)},getColumnValues:function(t){return(this.currentColumns[t]||{}).values},setColumnValues:function(t,e){var n=this.currentColumns[t];n&&(n.values=e)},getValues:function(){return this.children.map(function(t){return t.currentValue})},setValues:function(t){var e=this;t.forEach(function(t,n){e.setColumnValue(n,t)})},getIndexes:function(){return this.children.map(function(t){return t.currentIndex})},setIndexes:function(t){var e=this;t.forEach(function(t,n){e.setColumnIndex(n,t)})}}})},"VES+":function(t,e){},jydU:function(t,e,n){n("xL5C")},oCfm:function(t,e,n){"use strict";e.__esModule=!0;var i=a(n("mvHQ")),s=a(n("ArwO")),o=n("VxeN");function a(t){return t&&t.__esModule?t:{default:t}}var r=function(t,e){return Math.min(Math.max(t,e[0]),e[1])};e.default=(0,s.default)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"van-picker-column",class:t.className,style:t.columnStyle,on:{touchstart:t.onTouchStart,touchmove:function(e){return e.preventDefault(),t.onTouchMove(e)},touchend:t.onTouchEnd,touchcancel:t.onTouchEnd}},[n("ul",{style:t.wrapperStyle},t._l(t.options,function(e,i){return n("li",{staticClass:"van-ellipsis",class:{"van-picker-column--disabled":t.isDisabled(e),"van-picker-column--selected":i===t.currentIndex},domProps:{textContent:t._s(t.getOptionText(e))},on:{click:function(e){t.setIndex(i,!0)}}})}))])},name:"picker-column",props:{valueKey:String,className:String,itemHeight:Number,visibleItemCount:Number,options:{type:Array,default:function(){return[]}},defaultIndex:{type:Number,default:0}},data:function(){return{startY:0,offset:0,duration:0,startOffset:0,currentIndex:this.defaultIndex}},created:function(){this.$parent&&this.$parent.children.push(this)},mounted:function(){this.setIndex(this.currentIndex)},destroyed:function(){this.$parent&&this.$parent.children.splice(this.$parent.children.indexOf(this),1)},watch:{defaultIndex:function(){this.setIndex(this.defaultIndex)},options:function(t,e){(0,i.default)(t)!==(0,i.default)(e)&&this.setIndex(0)}},computed:{count:function(){return this.options.length},baseOffset:function(){return this.itemHeight*(this.visibleItemCount-1)/2},columnStyle:function(){return{height:this.itemHeight*this.visibleItemCount+"px"}},wrapperStyle:function(){return{transition:this.duration+"ms",transform:"translate3d(0, "+(this.offset+this.baseOffset)+"px, 0)",lineHeight:this.itemHeight+"px"}},currentValue:function(){return this.options[this.currentIndex]}},methods:{onTouchStart:function(t){this.startY=t.touches[0].clientY,this.startOffset=this.offset,this.duration=0},onTouchMove:function(t){var e=t.touches[0].clientY-this.startY;this.offset=r(this.startOffset+e,[-this.count*this.itemHeight,this.itemHeight])},onTouchEnd:function(){if(this.offset!==this.startOffset){this.duration=200;var t=r(Math.round(-this.offset/this.itemHeight),[0,this.count-1]);this.setIndex(t,!0)}},adjustIndex:function(t){for(var e=t=r(t,[0,this.count]);e<this.count;e++)if(!this.isDisabled(this.options[e]))return e;for(var n=t-1;n>=0;n--)if(!this.isDisabled(this.options[n]))return n},isDisabled:function(t){return(0,o.isObj)(t)&&t.disabled},getOptionText:function(t){return(0,o.isObj)(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex:function(t,e){t=this.adjustIndex(t),this.offset=-t*this.itemHeight,t!==this.currentIndex&&(this.currentIndex=t,e&&this.$emit("change",t))},setValue:function(t){for(var e=this.options,n=0;n<e.length;n++)if(this.getOptionText(e[n])===t)return void this.setIndex(n)}}})},tLo2:function(t,e,n){n("xL5C"),n("itIU")},y0N0:function(t,e){}});
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
Vue.use(Router)
const Stores =resolve =>require(['../components/stores.vue'],resolve);//懒加载
const IndexHome = r => require.ensure([], () => r(require('../components/IndexHome')), 'IndexHome')//懒加载
const ChooseCity = r => require.ensure([], () => r(require('../components/pageHome/chooseCity/chooseCity')), 'ChooseCity')//选择城市
const CarProducts = r => require.ensure([], () => r(require('../components/pageHome/carProductsMall/category')), 'CarProducts')//车品商城
const ProductsList = r => require.ensure([], () => r(require('../components/pageHome/carProductsMall/productsList')), 'ProductsList')//商品列表
const ProductsDetail = r => require.ensure([], () => r(require('../components/pageHome/carProductsMall/productsDetail')), 'ProductsDetail')//商品详情
const ReviewsList = r => require.ensure([], () => r(require('../components/pageHome/carProductsMall/reviewsList')), 'ReviewsList')//评价列表

const OrderSubmit = r => require.ensure([], () => r(require('../components/pageHome/orderSubmit/orderSubmit')), 'OrderSubmit')//订单提交

const InvoiceInfo = r => require.ensure([], () => r(require('../components/pageHome/orderSubmit/invoiceInfo')), 'InvoiceInfo')//发票信息填写

const OrderPay = r => require.ensure([], () => r(require('../components/pageHome/orderSubmit/orderpay')), 'OrderPay')//支付界面

const GetCoupons = r => require.ensure([], () => r(require('../components/pageHome/coupons/getcoupons')), 'GetCoupons')//获取优惠券
const Maintain = r => require.ensure([], () => r(require('../components/pageHome/maintain/maintainPackage')), 'Maintain')//保养
const CarMaintain = r => require.ensure([], () => r(require('../components/pageHome/maintain/carMaintain')), 'CarMaintain')//保养
const ShoppingCart = r => require.ensure([], () => r(require('../components/ShoppingCart')), 'ShoppingCart')//购物车
const PersonalCenter = r => require.ensure([], () => r(require('../components/PersonalCenter')), 'PersonalCenter')//个人中心
const LoginWithCode = r => require.ensure([], () => r(require('../components/personalCenter/loginWithCode')), 'LoginWithCode')//用户登录
const CarChoose = r => require.ensure([], () => r(require('../components/pageHome/carChoose')), 'CarChoose')//车辆选择
const InsuranceList = r => require.ensure([], () => r(require('../components/pageHome/insurance/insuranceList')), 'InsuranceList')//保险
const FillInformation = r => require.ensure([], () => r(require('../components/pageHome/insurance/fillInformation')), 'FillInformation')//保险信息填写
const Insurance_type = r => require.ensure([], () => r(require('../components/pageHome/insurance/insurance_type')), 'Insurance_type')//保险报价
const InsuranceSure = r => require.ensure([], () => r(require('../components/pageHome/insurance/insuranceSure')), 'InsuranceSure')//保险报价确定
const ChooseCarInfo = r => require.ensure([], () => r(require('../components/pageHome/chooseCarInfo/chooseCarInfo')), 'ChooseCarInfo')//选择车辆
const Protocol = r => require.ensure([], () => r(require('../components/pageHome/orderSubmit/protocol')), 'Protocol')//用户协议
const OrderSuccess = r => require.ensure([], () => r(require('../components/pageHome/orderSubmit/orderSuccess')), 'OrderSuccess')//订单成功
const register = resolve => require.ensure([], () => resolve(require('../components/personalCenter/register')), 'register')//注册
const userProtocol = resolve => require.ensure([], () => resolve(require('../components/personalCenter/userProtocol')), 'userProtocol')//协议
const UserInfo = resolve => require.ensure([], () => resolve(require('../components/personalCenter/userInfo')), 'UserInfo')//用户信息
const RePerUserInfo = resolve => require.ensure([], () => resolve(require('../components/personalCenter/reperUserInfo')), 'RePerUserInfo')//修改用户信息
const AddressList = resolve => require.ensure([], () => resolve(require('../components/personalCenter/addressList')), 'AddressList')//地址列表
const AddAddress = resolve => require.ensure([], () => resolve(require('../components/personalCenter/addAddress')), 'AddAddress')//添加地址
const MyCoupons = resolve => require.ensure([], () => resolve(require('../components/personalCenter/myCoupons')), 'MyCoupons')//优惠券
const MyOderList = resolve => require.ensure([], () => resolve(require('../components/personalCenter/myOderList')), 'MyOderList')//我的订单
const OrderDetail = resolve => require.ensure([], () => resolve(require('../components/personalCenter/orderDetail')), 'OrderDetail')//订单详情
const OrderAppraise = resolve => require.ensure([], () => resolve(require('../components/personalCenter/orderAppraise')), 'OrderAppraise')//订单评价
const FillsalesRetrun = resolve => require.ensure([], () => resolve(require('../components/personalCenter/salesReturn/fillsalesRetrun')), 'FillsalesRetrun')//退货订单
const SalesRetrunList = resolve => require.ensure([], () => resolve(require('../components/personalCenter/salesReturn/salesRetrunList')), 'SalesRetrunList')//退货订单列表
const SalesRetrunDetail = resolve => require.ensure([], () => resolve(require('../components/personalCenter/salesReturn/salesRetrunDetail')), 'SalesRetrunDetail')//退货订单详情
const PolicyList = resolve => require.ensure([], () => resolve(require('../components/personalCenter/policy/policyList')), 'PolicyList')
const PolicyDetail = resolve => require.ensure([], () => resolve(require('../components/personalCenter/policy/policyDetail')), 'PolicyDetail')
const GiftList = resolve => require.ensure([], () => resolve(require('../components/personalCenter/gift/giftList')), 'GiftList')
const GiftAppoint = resolve => require.ensure([], () => resolve(require('../components/personalCenter/gift/giftAppoint')), 'GiftAppoint')
const AboutUs = resolve => require.ensure([], () => resolve(require('../components/personalCenter/introduct/aboutUs')), 'AboutUs')
const StoresDetail = resolve => require.ensure([], () => resolve(require('../components/storesDetail')), 'StoresDetail')

const Index = resolve => require.ensure([], () => resolve(require('../components/Index')), 'Index')

const HotPro = resolve => require.ensure([], () => resolve(require('../components/pageHome/carProductsMall/hotProductsList')), 'HotPro')


const MyPoints = resolve => require.ensure([], () => resolve(require('../components/pageHome/MyPoints/MyPoints')), 'MyPoints')
const PointsList = resolve => require.ensure([], () => resolve(require('../components/pageHome/MyPoints/PointsList')), 'PointsList')
const PointsDetail = resolve => require.ensure([], () => resolve(require('../components/pageHome/MyPoints/PointsDetail')), 'PointsDetail')

const GroupBuying = resolve => require.ensure([], () => resolve(require('../components/pageHome/GroupBuying/GroupBuying')), 'GroupBuying')//团购列表
const GroupBuyDetail = resolve => require.ensure([], () => resolve(require('../components/pageHome/GroupBuying/GroupBuyDetail')), 'GroupBuyDetail')//团购详情


const Seckill = resolve => require.ensure([], () => resolve(require('../components/pageHome/GroupBuying/Seckill')), 'Seckill')

const Card = resolve => require.ensure([], () => resolve(require('../components/User/Card')), 'Card')//会员中心
const Explain = resolve => require.ensure([], () => resolve(require('../components/User/Explain')), 'Explain')//会员积分使用说明
const Binding = resolve => require.ensure([], () => resolve(require('../components/User/Binding')), 'Binding')//会员卡绑定
const Show = resolve => require.ensure([], () => resolve(require('../components/User/Show')), 'Show')//会员展示


const router = new Router({
   // hashbang:false,
   // mode: 'history',
  routes: [
    {path: "*", redirect: '/home'},
    {path:'/home',name:'home',component:IndexHome,meta:{keepAlive:true}},
    {path:'/category',name:'category',component:CarProducts,meta:{title:'商品分类',keepAlive:true}},
    {path:'/shoppingCart',name:'shoppingCart',component:ShoppingCart,meta:{title:'购物车',keepAlive:true}},
    {path:'/personalCenter',name:'personalCenter',component:PersonalCenter,meta:{title:'个人中心',keepAlive:true}},
    {path:'/home/chooseCity',name:'chooseCity',component:ChooseCity,meta:{title:'选择城市',keepAlive:true}},
    {path:"/home/productsList",name:'productsList',component:ProductsList,meta:{title:'商品列表',keepAlive:true}},
    {path:"/home/productsDetail",name:'productsDetail',component:ProductsDetail,meta:{title:'商品详情',keepAlive:false}},
    {path:"/home/reviewsList",name:'reviewsList',component:ReviewsList,meta:{title:'评论列表',keepAlive:false}},
    {path:"/home/orderSubmit",name:'orderSubmit',component:OrderSubmit,meta:{title:'订单提交',keepAlive:false}},
    {path:"/home/orderpay",name:'orderpay',component:OrderPay,meta:{title:'订单支付',keepAlive:false}},
    {path:"/home/invoiceInfo",name:'invoiceInfo',component:InvoiceInfo,meta:{title:'发票信息',keepAlive:false}},
    {path:"/home/protocol",name:'protocol',component:Protocol,meta:{title:'退换货须知',keepAlive:true}},
    {path:"/home/orderSuccess",name:'orderSuccess',component:OrderSuccess,meta:{title:'订单支付成功',keepAlive:false}},
    {path:'/home/getcoupons',name:'getcoupons',component:GetCoupons,meta:{title:'领券中心',keepAlive:false}},
    {path:'/home/carmaintain',name:'carmaintain',component:CarMaintain,meta:{title:'爱车保养',keepAlive:false}},
    {path:'/home/maintain',name:'maintain',component:Maintain,meta:{title:'保养套餐',keepAlive:false}},
    {path:'/home/CarChoose',name:'carchoose',component:CarChoose,meta:{title:'车辆选择',keepAlive:false}},
    {path:'/home/insuranceList',name:'insuranceList',component:InsuranceList,meta:{title:'购买保险',keepAlive:true}},
    {path:'/home/insuranceList/fillInformation',name:'fillInformation',component:FillInformation,meta:{title:'填写车主信息',keepAlive:false}},
    {path:'/home/insuranceList/insurance_type',name:'insurance_type',component:Insurance_type,meta:{title:'选择险种',keepAlive:false}},
    {path:'/home/insuranceList/insuranceSure',name:'insuranceSure',component:InsuranceSure,meta:{title:'险种确认',keepAlive:true}},
    {path:'/home/chooseCarInfo',name:'chooseCarInfo',component:ChooseCarInfo,meta:{title:'选择车辆信息',keepAlive:false}},
    {path:'/stores', name:'stores', component:Stores, meta:{title:'门店',keepAlive:true}},
    {path:'/stores/storesDetail',name:'storesDetail',component:StoresDetail,meta:{title:'门店详情'}},
    {path:'/personalCenter/userInfo', name:'userInfo', component:UserInfo, meta:{title:'用户信息',keepAlive:true}},
    {path:'/personalCenter/reperUserInfo', name:'reperUserInfo', component:RePerUserInfo, meta:{title:'用户信息',keepAlive:true}},
    {path:'/personalCenter/addressList',name:'addressList',component:AddressList,meta:{title:'收货地址',keepAlive:true}},
    {path:'/personalCenter/addAddress',name:'addAddress',component:AddAddress,meta:{title:'地址信息',keepAlive:false}},
    {path:'/personalCenter/myOderList',name:'myOderList',component:MyOderList,meta:{title:'我的订单',keepAlive:false}},
    {path:'/personalCenter/orderDetail',name:'orderDetail',component:OrderDetail,meta:{title:'订单详情',keepAlive:false}},
    {path:'/personalCenter/orderAppraise',name:'orderAppraise',component:OrderAppraise,meta:{title:'订单评价',keepAlive:false}},
    {path:'/personalCenter/fillsalesRetrun',name:'fillsalesRetrun',component:FillsalesRetrun,meta:{title:'填写售后订单',keepAlive:false}},
    {path:'/personalCenter/salesRetrunList',name:'salesRetrunList',component:SalesRetrunList,meta:{title:'售后订单列表',keepAlive:true}},
    {path:'/personalCenter/salesRetrunDetail',name:'salesRetrunDetail',component:SalesRetrunDetail,meta:{title:'售后订单列表',keepAlive:false}},
    {path:'/personalCenter/policyList',name:'policyList',component:PolicyList,meta:{title:'我的保单',keepAlive:true}},
    {path:'/personalCenter/policyDetail',name:'policyDetail',component:PolicyDetail,meta:{title:'保单详情',keepAlive:false}},
    {path:'/personalCenter/giftList',name:'giftList',component:GiftList,meta:{title:'礼品列表',keepAlive:true}},
    {path:'/personalCenter/giftAppoint',name:'giftAppoint',component:GiftAppoint,meta:{title:'礼品预约',keepAlive:false}},
    {path:'/personalCenter/myCoupons',name:'myCoupons',component:MyCoupons,meta:{title:'我的优惠券',keepAlive:false}},
    {path:'/personalCenter/aboutUs',name:'aboutUs',component:AboutUs,meta:{title:'关于',keepAlive:true}},
    {path:'/personalCenter/loginWithCode',name:'loginWithCode',component:LoginWithCode,meta:{title:'登录'},
      children:[ {path:'/personalCenter/register/:userId',name:'register',component:register,meta:{title:'注册'}},
        {path:'/personalCenter/userProtocol',name:'userProtocol',component:userProtocol,meta:{title:'用户协议'}},]},

    {path:'/home/MyPoints',name:'MyPoints',component:MyPoints,meta:{title:'积分中心',keepAlive:true}},
    {path:'/home/PointsList',name:'PointsList',component:PointsList,meta:{title:'积分中心',keepAlive:true}},
    {path:'/home/PointsDetail',name:'PointsDetail',component:PointsDetail,meta:{title:'商品详情',keepAlive:false}},

    {path:'/home/GroupBuying',name:'GroupBuying',component:GroupBuying,meta:{title:'团购频道',keepAlive:true}},
    {path:'/home/GroupBuyDetail',name:'GroupBuyDetail',component:GroupBuyDetail,meta:{title:'商品详情',keepAlive:false}},
    {path:'/home/Seckill',name:'Seckill',component:Seckill,meta:{title:'限时秒杀',keepAlive:true}},

	{path:'/User/Card',name:'Card',component:Card,meta:{title:'会员中心',keepAlive:true}},
    {path:'/User/Explain',name:'Explain',component:Explain,meta:{title:'积分使用说明',keepAlive:true}},
    {path:'/User/Binding',name:'Binding',component:Binding,meta:{title:'会员卡绑定',keepAlive:true}},
    {path:'/User/Show',name:'Show',component:Show,meta:{title:'会员卡显示',keepAlive:true}},
    {path:'/home/hotProductsList',name:'hotProductsList',component:HotPro,meta:{title:'热销商品',keepAlive:true}},
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
export default router

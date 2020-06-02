import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
// ���������µ�ҳ��
const Myorder = () =>
    import ('./components/myCenter/myorder')
import Millorder from './components/myCenter/milltrustOrder'
import Allorder from './components/myCenter/allorder'
import OffDateorder from './components/myCenter/offDateorder'
import Upevidence from './components/myCenter/upEvidence'
import Upevmine from './components/myCenter/upEvidenceMine'
import AccountSetting from './components/myCenter/accountSetting'
import Certification from './components/myCenter/certification'
import Changepwd from './components/myCenter/changePwd'
import Logistics from './components/myCenter/logistics'
import NeedUpEvidence from './components/myCenter/needUpEvidence'
import CallBusiness from './components/myCenter/callBusiness'
import Waitrecive from './components/myCenter/waitReciveOrder'
import Orderdetail from './components/myCenter/orderdetail'
import Addressalter from './components/myCenter/addressalter'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        }, {
            path: '/cloudCalc',
            name: 'cloudcalc',
            component: () =>
                import ('./views/cloudCalc')
        }, {
            path: '/cloudCalc/calcdetail/:id',
            name: 'calcdetail',
            component: () =>
                import ('../src/components/calcDetail/calcDetail')
        },
        {
            path: '/mills',
            name: 'mills',
            component: () =>
                import ('./views/mills')
        },
        {
            path: '/mills/milldetails',
            name: 'milldetails',
            component: () =>
                import ('./components/milldetails/milldetails')
        },
        {
            path: '/millTrust',
            name: 'milltrust',
            component: () =>
                import ('./views/millTrust')
        },
        {
            path: '/millTrust/minedetail',
            name: 'minedetail',
            component: () =>
                import ('./components/milldetails/minedetail')
        },
        {
            path: '/news',
            name: 'news',
            component: () =>
                import ('./views/news')
        },
        {
            path: '/news/newsdetails/:id',
            name: 'newsdetails',
            component: () =>
                import ('./components/newsDetails/newsDetails')
        },
        {
            path: '/download',
            name: 'download',
            component: () =>
                import ('./views/download')
        }, {
            path: '/helpcenter',
            name: 'helpcenter',
            component: () =>
                import ('./views/helpCenter')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./components/login/login')
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('./components/register/register')
        },
        {
            path: '/resetpwd',
            name: 'resetpwd',
            component: () =>
                import ('./components/resetpwd/resetpwd')
        },
        {
            path: '/completepwd',
            name: 'completepwd',
            component: () =>
                import ('./components/resetpwd/completepwd')
        },
        {
            path: '/shoppingcar',
            name: 'shoppingcar',
            component: () =>
                import ('./components/shoppingcar/shoppingcar')
        },
        {
            path: '/ordermsg',
            name: 'ordermsg',
            component: () =>
                import ('./components/ordermsg/ordermsg')
        },
        {
            path: '/millManagedOrder',
            name: 'millManagedOrder',
            component: () =>
                import ('./components/millManagedOrder/millManagedOrder')
        },
        {
            path: '/mycenter',
            name: 'mycenter',
            component: () =>
                import ('./views/myCenter'),
            children: [{
                    path: '/',
                    name: 'mycenter',
                    redirect: 'allorder'
                },
                {
                    path: "myorder",
                    name: 'myorder',
                    component: Myorder
                },
                {
                    path: "allorder",
                    name: 'allorder',
                    component: Allorder
                },
                {
                    path: "offDateorder",
                    name: 'offDateorder',
                    component: OffDateorder
                },
                {
                    path: "millorder",
                    name: 'millorder',
                    component: Millorder
                },
                {
                    path: "myorder/upevidence",
                    name: 'upevidence',
                    component: Upevidence
                },
                {
                    path: "allorder/upevmine/:orderId",
                    name: 'upevmine',
                    component: Upevmine
                },
                {
                    path: "allorder/orderdetail/:orderId",
                    name: 'orderdetail',
                    component: Orderdetail
                },
                {
                    path: "accountSetting",
                    name: 'accountSetting',
                    component: AccountSetting
                },
                {
                    path: "certification",
                    name: 'certification',
                    component: Certification
                },
                {
                    path: "changepwd",
                    name: 'changepwd',
                    component: Changepwd
                },
                {
                    path: "waitrecive/logistics",
                    name: 'logistics',
                    component: Logistics
                },
                {
                    path: "needupev/:name",
                    name: 'needupev',
                    component: NeedUpEvidence
                },
                {
                    path: "myorder/:call",
                    name: 'callbusiness',
                    component: CallBusiness
                },
                {
                    path: "waitrecive",
                    name: 'waitrecive',
                    component: Waitrecive
                },
                {
                    path: "addressalter",
                    name: 'addressalter',
                    component: Addressalter
                }
            ]
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})
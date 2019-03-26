import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import {
    setToken
} from '@/utils/auth'
import store from '@/store'
import { Toast } from 'vant'
import { urlParse } from '@/utils'

Vue.use(Router)
const router = new Router({
    mode: 'history',       // 路由模式 一律采用history
    base: '/wx/',     // 应用的根路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"
    routes,
    // // 点击浏览器导航返回按钮滚动条滚回跳转之前的位置
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
        }
        // return 期望滚动到哪个的位置
    }
})
const LOGIN_PAGE_NAME = 'bind'
const HASLOGIN_PAGE_NAME = 'home'
router.beforeEach((to, from, next) => {
    const { title } = to.meta
    if (title) {
        document.title = title
    }
    const {login_token} = urlParse(document.URL)
    if (login_token && !token) {
        store.commit('SET_TOKEN', login_token)
    }
    let token = store.state.user.token
    // if (!token && to.name !== HASLOGIN_PAGE_NAME) {
    //     console.log('没有登录且跳转的不是首页', to)
    //     window.localStorage.setItem('resultUrl', JSON.stringify(to))
    //     // 未登录且要跳转的页面不是登录页，没有token,把要调往的页面信息存入localstorage, 去登录页判断是否授权，授权完跳回来
    //     next({
    //         name: HASLOGIN_PAGE_NAME, // 跳转到登录页
    //         replace: true
    //     })
    // } else if (!token && to.name === HASLOGIN_PAGE_NAME) {
    //     console.log('没有登录且跳转的是首页', to)
    //     // 未登陆且要跳转的页面是登录页
    //     // next()
    // } else {
    //     console.log('有登录', to)
    //     const isBind = store.getters.isBind
    //     // 页面是否需要获取用户信息，在meta字段里添加 requiredUserInfo
    //     const isRequiredUserInfo = to.matched.some(route => {   
    //         return route.meta.requiredUserInfo
    //     })
    //     console.log('%cisRequiredUserInfo: ','color: MidnightBlue; background: Aquamarine; font-size: 20px;',isRequiredUserInfo);
    //     // 如果绑定过手机，且跳往页面不需要获取用户信息
    //     if (isBind && !isRequiredUserInfo) {
    //         console.log('有绑定手机号调往的页面不需要用户信息', to)
    //         let resultUrl = window.localStorage.getItem('resultUrl')
    //         if (resultUrl) {
    //             console.log('%c有登录记录resultUrl: ','color: MidnightBlue; background: Aquamarine; font-size: 20px;', resultUrl);
    //             window.localStorage.removeItem('resultUrl')
    //             resultUrl = JSON.parse(resultUrl)
    //             next({
    //                 ...resultUrl,
    //                 replace: true
    //             })
    //         } else {
    //             next()
    //         }
    //     } else {
    //         // 有token 并跳往的不是登录页
    //         getUserInfo().then(() => {
    //             // 没有绑定手机，去绑定手机
    //             const isBind = store.getters.isBind
    //             if (!isBind && to.name !== LOGIN_PAGE_NAME) {
    //                 console.log('有登录没有绑定手机号调往的不是绑定手机页面', to)
    //                 // 如果是邀请新用户，进注册页面
    //                 window.localStorage.setItem('resultUrl', JSON.stringify(to))
    //                 next({
    //                     name: LOGIN_PAGE_NAME, // 跳转到登录页
    //                     replace: true
    //                 })
    //             } else if (!isBind && to.name === LOGIN_PAGE_NAME) {
    //                 console.log('有登录没有绑定手机号调往的是绑定手机页面', to)
    //                 next()
    //             } else if (isBind && to.name === LOGIN_PAGE_NAME) {
    //                 console.log('有登录有绑定手机号调往的是绑定手机页面', to)
    //                 next({
    //                     name: HASLOGIN_PAGE_NAME,
    //                     replace: true
    //                 })
    //             } else {
    //                 console.log('正常跳转', to)
    //                 // 获取跳转前的url，授完权跳回去
    //                 let resultUrl = window.localStorage.getItem('resultUrl')
    //                 if (resultUrl) {
    //                     console.log('%cresultUrl: ','color: MidnightBlue; background: Aquamarine; font-size: 20px;',resultUrl);
    //                     window.localStorage.removeItem('resultUrl')
    //                     resultUrl = JSON.parse(resultUrl)
    //                     next({
    //                         ...resultUrl,
    //                         replace: true
    //                     })
    //                 } else {
    //                     next()
    //                 }
    //             }
    //         }).catch(err => {
    //             console.log('%cerr: ','color: MidnightBlue; background: Aquamarine; font-size: 20px;', err);
    //             Toast(err.message || err.errMsg || err.msg || '网络连接异常, 请刷新页面重试')
    //             store.commit('REMOVE_TOKEN')
    //             next({
    //                 name: HASLOGIN_PAGE_NAME, // 跳转到登录页
    //                 replace: true
    //             })
    //         })
        // }
    next()
    // }
})
router.afterEach((to, from) => {
    // 每次路由更新后初始化js-sdk 请求使用的url
    const system = store.state.app.system
    // 如果是安卓用户，每次存最新的
    if (system) {
        store.dispatch('set_sdk_url', document.URL)
    } else {
        // ios进入 先判断是否存在，存在不操作，不存在再存入，因为ios只取第一次进入公众号的url，刷新页面相当于重新进入
        const sdkUrl = store.state.app.sdkUrl
        if (!sdkUrl) {
            store.dispatch('set_sdk_url', document.URL)
        }
    }
})
async function getUserInfo () {
    if (store.state.user.userInfo) {
        return
    } else {
        try {
            await store.dispatch('getUserInfo')
            return
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
export default router

const _import = require(`./_import_${process.env.NODE_ENV}`)
const layout = _import('layout/index')

/**
 *
 * meta 标签字段
 * @param {*} requiredUserInfo: [boolean]  该页面是否需要用户信息，如果需要store里没有用户信息将会去拉取用户信息
 * @param {*} white: [boolean]             白名单页面，路由拦截器不拦截，直接放行
 * @param {*} cache: [boolean]             是否缓存 配合keep-alive
 */

export default [
    {
        path: '/',
        redirect:'/home/index',
    },
    {
        path: '/home',
        component:layout,
        children: [
            {//首页
                path: 'index',
                name:'home',
                component: _import('home/index'),
                meta:{
                    title:'首页',
                    cache: true
                }
            },
            {//走势图
                path: 'charts',
                name: 'charts',
                component: _import('home/charts'),
                meta: {
                    title: '走势图',
                    cache: true
                }
            },
            {//选号技巧
                path: 'picskill',
                name: 'picskill',
                component: _import('home/picskill'),
                meta: {
                    title: '选号技巧',
                    cache: true
                }
            },
            {//大奖预测组合
                path: 'awardSpredict',
                name: "awardSpredict",
                component: _import ('home/awardSpredict'),
                meta: {
                    title: '大奖预测组合',
                    cache: true
                }
            },
            {//反馈
                path: 'feedback',
                name:'feedback',
                component: _import('home/feedback'),
                meta:{
                    title:'反馈',
                    cache: true
                }
            },
            {//公告
                path: 'announcement',
                component: layout,
                children: [
                    {
                        path: 'index',
                        name: 'announcementIndex',
                        component: _import('home/announcement/index'),
                        meta: {
                            title: '公告',
                            cache: true
                        }
                    },
                    {//消息详情页
                        path: 'detail',
                        name: 'announcementDetail',
                        component: _import('home/announcement/detail'),
                        meta: {
                            title: '公告',
                            cache: true
                        }
                    }
                ]
            },
        ]
    },
    {
        component: _import('404/index'),
        name: '404',
        path: '/404'
    },
    {
        path: '*', redirect: '/404'

    },
    {//个人中心
        path: '/personal',
        component:layout,
        children: [
            {//用户中心
                path: 'index',
                name: 'personalIndex',
                component: _import('personal/index'),
                meta: {
                    title: '用户中心',
                    cache: true
                }
            },
            {//我的关注
                path: 'myFocus',
                name:'myFocus',
                component: _import('personal/myFocus'),
                meta:{
                    title:'我的关注',
                    cache: true
                }
            },
            {//专家界面---预测排名
                path: 'perdictRanking',
                name:'perdictRanking',
                component: _import('personal/perdictRanking'),
                meta:{
                    title:'预测排名',
                    cache: true
                }
            },
            {//模拟投注
                path: 'simulateBetting',
                name:'simulateBetting',
                component: _import('personal/simulateBetting'),
                meta:{
                    title:'模拟投注',
                    cache: true
                }
            },
            {//福彩3D09
                path: 'wining',
                name:'wining',
                component: _import('personal/wining'),
                meta:{
                    title:'福彩3D09期大奖组',
                    cache: true
                }
            },
            {//预测排名
                path: 'perdictRank',
                name:'perdictRank',
                component: _import('personal/perdictRank'),
                meta:{
                    title:'预测排名',
                    cache: true
                }
            },
            {//我的查看
                path: 'myLook',
                name:'myLook',
                component: _import('personal/myLook'),
                meta:{
                    title:'我的查看',
                    cache: true
                }
            },
            {//我的查看
                path: 'historyRecord',
                name:'historyRecord',
                component: _import('personal/historyRecord'),
                meta:{
                    title:'福彩3D历史记录',
                    cache: true
                }
            },
            {//微信支付页面
                path: 'pay',
                name:'pay',
                component: _import('personal/pay'),
                meta:{
                    title:'微信二维码支付',
                    cache: true
                }
            },
            {//消息首页
                path: 'message',
                component: layout,
                children: [
                    {
                        path: 'index',
                        name: 'messageIndex',
                        component: _import('personal/message/index'),
                        meta: {
                            title: '我的消息',
                            cache: true
                        }
                    },
                    {//消息详情页
                        path: 'detail',
                        name: 'messageDetail',
                        component: _import('personal/message/detail'),
                        meta: {
                            title: '我的消息',
                            cache: true
                        }
                    }
                ]
            },
            {
                path: 'about',
                name: 'about',
                component: _import('personal/about'),
                meta: {
                    title: '关于'
                }
            },
            {
                path: 'jumpBrowser',
                name: 'jumpBrowser',
                component: _import('personal/jumpBrowser'),
                meta: {
                    title: '请在浏览器中打开'
                }
            }
        ]
    },
    {//登录
        path: '/login',
        component: layout,
        children: [
            {
                path: 'index',
                name: 'loginIndex',
                component: _import('login/index'),
                meta: {
                    title: '登录',
                    cache: true
                }
            },
            {
                path: 'verification',
                name: 'verification',
                component: _import('login/verification'),
                meta: {
                    title: '验证码登录',
                    cache: true
                }
            }
        ]
    },
    {//注册
        path: '/register',
        component: layout,
        children: [
            {
                path: 'index',
                name: 'registerIndex',
                component: _import('register/index'),
                meta: {
                    title: '注册',
                    cache: true
                }
            }
        ]
    },
]

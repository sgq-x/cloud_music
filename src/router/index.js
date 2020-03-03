import Vue from 'vue'
import Router from 'vue-router'

const navIndex = () => import(/* webpackChunkName: "group-nav" */ '@/pages/nav/index')
const findIndex = () => import(/* webpackChunkName: "group-findPage" */ '@/pages/findIndex/index')
Vue.use(Router)

export default new Router({
  /**
   *设置 链接激活时使用的css类名
   *默认值: "router-link-active"
   * 可以通过路由的构造选项 linkActiveClass 来全局配置
   *
   * 通过设置meta: { keepAlive: true },来定义一个页面是否需要做缓存
   */
  linkActiveClass: 'ac',
  routes: [
    {
      path: '/',
      name: 'main',
      component: navIndex,
      redirect: '/find',
      children: [
        {
          path: '/find',
          component: findIndex
        }
      ]
    }
  ]
})

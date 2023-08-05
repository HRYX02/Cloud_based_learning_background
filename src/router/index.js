import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
        }]
    },

    {
        path: '/teacher',
        component: Layout,
        redirect: '/teacher/table',
        name: '讲师管理',
        meta: { title: '讲师管理', icon: 'el-icon-user-solid' },
        children: [
            {
                path: 'table',
                name: '讲师列表',
                component: () => import('@/views/edu/teacher/list/index'),
                meta: { title: '讲师列表', icon: 'table' }
            },
            {
                path: 'save',
                name: '添加讲师',
                component: () => import('@/views/edu/teacher/save/index'),
                meta: { title: '添加讲师', icon: 'tree' }
            },
            {
                path: 'edit/:id',
                name: 'EduTeacherEdit',
                component: () => import('@/views/edu/teacher/save/index'),
                meta: { title: '编辑讲师', noCache: true },
                // 在页面上隐藏该导航栏
                // FIXME:记得生产时候设为true 
                hidden: true
            }
        ]
    },

    {
        path: '/subject',
        component: Layout,
        redirect: '/subject/list',
        name: '课程分类管理',
        meta: { title: '课程分类管理', icon: 'el-icon-s-flag' },
        children: [
            {
                path: 'list',
                name: '课程分类列表',
                component: () => import('@/views/edu/subject/list/index'),
                meta: { title: '课程分类列表', icon: 'table' }
            },
            {
                path: 'save',
                name: '添加课程分类',
                component: () => import('@/views/edu/subject/save/index'),
                meta: { title: '添加课程分类', icon: 'tree' }
            },
        ]
    },

    {
        path: '/course',
        component: Layout,
        redirect: '/course/list',
        name: '课程管理',
        meta: { title: '课程管理', icon: 'el-icon-s-management' },
        children: [
            {
                path: 'list',
                name: '课程列表',
                component: () => import('@/views/edu/course/list/index'),
                meta: { title: '课程列表', icon: 'table' }
            },
            {
                path: 'info',
                name: '添加课程',
                component: () => import('@/views/edu/course/info/index'),
                meta: { title: '添加课程', icon: 'tree' }
            },
            {
                path: 'info/:id',
                name: '编辑课程基本信息',
                component: () => import('@/views/edu/course/info/index'),
                meta: { title: '编辑课程基本信息', icon: 'tree' },
                hidden: true
            },
            {
                path: 'chapter/:id',
                name: '编辑课程大纲',
                component: () => import('@/views/edu/course/chapter/index'),
                meta: { title: '编辑课程大纲', icon: 'tree' },
                hidden: true
            },
            {
                path: 'publish/:id',
                name: '发布课程',
                component: () => import('@/views/edu/course/publish/index'),
                meta: { title: '发布课程', icon: 'tree' },
                hidden: true
            },
        ]
    },

    {
        path: '/banner',
        component: Layout,
        redirect: '/banner/list',
        name: '轮播图管理',
        meta: { title: '轮播图管理', icon: 'el-icon-picture' },
        children: [
            {
                path: 'list',
                name: '轮播图列表',
                component: () => import('@/views/cms/banner/list/index'),
                meta: { title: '轮播图列表', icon: 'table' }
            },
            {
                path: 'save',
                name: '添加轮播图',
                component: () => import('@/views/cms/banner/save/index'),
                meta: { title: '添加轮播图', icon: 'tree' }
            },
        ]
    },

    {
        path: '/statistics',
        component: Layout,
        redirect: '/statistics/create',
        name: '统计分析',
        meta: { title: '统计分析', icon: 'el-icon-s-data' },
        children: [
            {
                path: 'show',
                name: '图表显示',
                component: () => import('@/views/statistics/show/index'),
                meta: { title: '图表显示', icon: 'tree' }
            },
            {
                path: 'create',
                name: '生成数据',
                component: () => import('@/views/statistics/create/index'),
                meta: { title: '生成数据', icon: 'table' }
            }
        ]
    },

    {
        path: 'external-link',
        component: Layout,
        children: [
            {
                path: 'https://github.com/HRYX02/Cloud_based_learning_vue',
                meta: { title: '项目链接', icon: 'link' }
            }
        ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router

import { defineConfig } from 'umi'

export default defineConfig({
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none'
  },
  layout: {},
  routes: [
    {
      exact: true,
      path: '/',
      redirect: '/home'
    },
    {
      exact: true,
      path: '/home',
      component: './home',
      icon: 'project',
      name: '首页'
    },
    {
      exact: true,
      path: '/chart',
      component: './chart',
      icon: 'areaChart',
      name: '图表'
    },
    {
      exact: true,
      path: '/setting',
      component: './setting',
      icon: 'control',
      name: '设置'
    }
  ]
})

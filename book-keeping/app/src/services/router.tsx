import React from 'react'
import { RouteConfig } from 'react-router-config'
// 如果这里报错说 Redirect找不到，要装 5版本的
import { Redirect } from 'react-router-dom'
import ChartPage from '../pages/chart/ChartPage'
import DetailPage from '../pages/detail/DetailPage'

// 加入 RouteConfig 的类型后，vscode 就能提供很好的类型提示
export const ROUTE_CONFIG: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: DetailPage,
  },
  {
    path: '/chart',
    exact: true,
    component: ChartPage,
  },
  {
    render: () => <Redirect to={'/'} />,
  },
]
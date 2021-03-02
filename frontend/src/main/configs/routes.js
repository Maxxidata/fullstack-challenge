import React from 'react'
import { Redirect } from 'react-router-dom'

export default [
  {
    path: '/professionals',
    component: React.lazy(() =>
      import('../../presentation/pages/professional/professional-list.jsx')
    )
  },
  {
    path: '/professionals-types',
    component: React.lazy(() =>
      import(
        '../../presentation/pages/professionals-type/professionals-type-list.jsx'
      )
    )
  },
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/professionals" />
  }
]

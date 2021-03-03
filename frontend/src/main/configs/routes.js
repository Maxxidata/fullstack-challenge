import React from 'react'
import { Redirect } from 'react-router-dom'

export default [
  {
    path: '/professionals',
    exact: true,
    component: React.lazy(() =>
      import('../../presentation/pages/professional/professional-list/professional-list.jsx')
    )
  },
  {
    path: '/professionals/form/:id',
    exact: true,
    component: React.lazy(() =>
      import('../../presentation/pages/professional/professional-form/professional-form.jsx')
    )
  },
  {
    path: '/professionals-types',
    exact: true,
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

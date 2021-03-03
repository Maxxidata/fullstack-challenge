import React from 'react'
import styled from 'styled-components'
import { Layout as AntLayout } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { renderRoutes } from 'react-router-config'
import routes from '@/main/configs/routes'
import Navbar from '../navbar/navbar.jsx'
import Toolbar from '../toolbar/toolbar.jsx'

const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
`

const SuspenseSpinContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Layout = () => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Navbar />
      <ContentWrapper>
        <Toolbar />
        <React.Suspense
          fallback={
            <SuspenseSpinContainer>
              <LoadingOutlined color="#1171bf" size={24} />
            </SuspenseSpinContainer>
          }
        >
          {renderRoutes(routes)}
        </React.Suspense>
      </ContentWrapper>
    </AntLayout>
  )
}

export default Layout

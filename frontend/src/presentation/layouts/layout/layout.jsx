import React from 'react'
import styled from 'styled-components'
import { Layout as AntLayout } from 'antd'
import Navbar from '../navbar/navbar.jsx'
import Toolbar from '../toolbar/toolbar.jsx'

const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
`

const Layout = () => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Navbar />
      <ContentWrapper>
        <Toolbar />
        <div>Content</div>
      </ContentWrapper>
    </AntLayout>
  )
}

export default Layout

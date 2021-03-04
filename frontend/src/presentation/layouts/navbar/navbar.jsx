import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import i18next from 'i18next'
import { withRouter } from 'react-router-dom'

const { Sider } = Layout

const { SubMenu } = Menu
const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`

const Navbar = ({ history, location }) => {
  const { pathname } = location
  const root = `/${pathname.split('/')[1]}`

  const handleMenuClick = useCallback((event) => {
    history.push(event.key)
  })

  return (
    <>
      <Sider collapsible>
        <Logo />
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={['professional']}
          selectedKeys={[root, pathname]}
          onClick={handleMenuClick}
        >
          <SubMenu
            key="professional"
            icon={<UserOutlined />}
            title={i18next.t('professional')}
          >
            <Menu.Item key="/professionals">
              {i18next.t('professionals')}
            </Menu.Item>
            <Menu.Item key="/professional-types">
              {i18next.t('professionalTypes')}
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  )
}

Navbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default withRouter(Navbar)

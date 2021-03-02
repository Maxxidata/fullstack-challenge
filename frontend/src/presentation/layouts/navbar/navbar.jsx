import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
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
          defaultOpenKeys={[root]}
          selectedKeys={[root, pathname]}
          onClick={handleMenuClick}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Profisional">
            <Menu.Item key="/professionals">Profissionais</Menu.Item>
            <Menu.Item key="/professionals-types">
              Tipos de Profissionais
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

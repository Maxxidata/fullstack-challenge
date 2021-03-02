import React from 'react'
import styled from 'styled-components'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Sider } = Layout

const { SubMenu } = Menu
const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`

const Navbar = () => {
  return (
    <>
      <Sider collapsible>
          <Logo />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="Profisional">
            <Menu.Item key="1">Profissional</Menu.Item>
            <Menu.Item key="2">Tipo de Profissional</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  )
}

export default Navbar

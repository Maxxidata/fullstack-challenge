import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'

const { Header } = Layout

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0 24px 0 8px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`
const Toolbar = () => <StyledHeader />

export default Toolbar

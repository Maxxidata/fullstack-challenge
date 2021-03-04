import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'

const FormItem = ({ children, error, ...props }) => {
  return (
    <Form.Item
      validateStatus={error != null ? 'error' : null}
      help={error}
      {...props}
    >
      {children}
    </Form.Item>
  )
}

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string
}

export default FormItem

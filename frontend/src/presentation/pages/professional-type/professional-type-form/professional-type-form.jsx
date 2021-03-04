import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button, Switch, notification } from 'antd'
import i18next from 'i18next'
import { useFormik } from 'formik'
import { useParams, withRouter } from 'react-router-dom'
import * as Yup from 'yup'
import { Content, FormItem } from '@/presentation/components'
import { RemoteProfessionalType } from '@/data/usecases/professional-type'

const professionalSchema = Yup.object().shape({
  description: Yup.string().required(),
  status: Yup.boolean().required()
})

const ProfessionalTypeForm = ({ history }) => {
  const [data, setData] = useState({ status: false })

  const parameters = useParams()

  const formik = useFormik({
    validationSchema: professionalSchema,
    initialValues: data,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        if (parameters.id === 'new') {
          await RemoteProfessionalType.create(values)
        } else {
          await RemoteProfessionalType.update(parameters.id, values)
        }
        history.push('/professional-types')
      } catch (error) {
        notification.error({
          message: i18next.t('requestMessageError'),
          description: error.message
        })
      }
    }
  })

  useEffect(() => {
    if (parameters.id === 'new') return

    async function fetchById (id) {
      try {
        const { data } = await RemoteProfessionalType.getById(id)
        setData(data)
      } catch (error) {
        notification.error({
          message: i18next.t('requestMessageError'),
          description: error.message
        })
      }
    }

    fetchById(parameters.id)
  }, [parameters.id])

  return (
    <Content>
      <Form layout="vertical" onFinish={formik.handleSubmit} requiredMark>
        <FormItem
          label={i18next.t('description')}
          error={formik.errors.description}
          required
        >
          <Input
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </FormItem>
        <FormItem
          label={i18next.t('status')}
          error={formik.errors.status}
          required
        >
          <Switch
            id="status"
            name="status"
            checkedChildren={i18next.t('active')}
            unCheckedChildren={i18next.t('inactive')}
            checked={formik.values.status}
            onChange={(value) => formik.setFieldValue('status', value)}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" size="large">
            {i18next.t('save')}
          </Button>
        </FormItem>
      </Form>
    </Content>
  )
}

ProfessionalTypeForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}

export default withRouter(ProfessionalTypeForm)

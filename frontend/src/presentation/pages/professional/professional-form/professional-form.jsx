import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button, Switch, notification } from 'antd'
import { useFormik } from 'formik'
import { useParams, withRouter } from 'react-router-dom'
import * as Yup from 'yup'
import { Content, AutoPaginatedSelect } from '@/presentation/components'
import { AxiosHttpClient } from '@/infra/usecases/http'

const phoneRegExp = /\(\d{2,}\) \d{4,}-\d{4}/

const professionalSchema = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string().email(),
  professionalType: Yup.object().required(),
  status: Yup.boolean().required()
})

const ProfessionalForm = ({ history }) => {
  const [data, setData] = useState({ status: false })

  const parameters = useParams()

  const formik = useFormik({
    validationSchema: professionalSchema,
    initialValues: data,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        if (parameters.id === 'new') {
          await AxiosHttpClient.post('/professionals', values)
        } else {
          await AxiosHttpClient.put(`/professionals/${parameters.id}`, values)
        }
        history.push('/professionals')
      } catch (error) {
        notification.error({
          message: 'Não foi possivel realizar a operação',
          description: error.message
        })
      }
    }
  })

  useEffect(() => {
    if (parameters.id === 'new') return

    async function fetchById (id) {
      try {
        const { data } = await AxiosHttpClient.get(`/professionals/${id}`)
        setData(data)
      } catch (error) {
        notification.error({
          message: 'Não foi possivel realizar a operação',
          description: error.message
        })
      }
    }

    fetchById(parameters.id)
  }, [parameters.id])

  return (
    <Content>
      <Form layout="vertical" onFinish={formik.handleSubmit} requiredMark>
        <Form.Item
          label="Nome"
          validateStatus={formik.errors.name != null ? 'error' : null}
          help={formik.errors.name}
          required
        >
          <Input
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Telefone"
          validateStatus={formik.errors.phone != null ? 'error' : null}
          help={formik.errors.phone}
        >
          <Input
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="E-mail"
          validateStatus={formik.errors.email != null ? 'error' : null}
          help={formik.errors.email}
        >
          <Input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Tipo"
          validateStatus={
            formik.errors.professionalType != null ? 'error' : null
          }
          help={formik.errors.professionalType}
          required
        >
          <AutoPaginatedSelect
            id="professionalType"
            name="professionalType"
            valueField="id"
            labelField="description"
            path='/professional-types'
            value={formik.values.professionalType?.id}
            onChange={(value) =>
              formik.setFieldValue('professionalType', value)
            }
          />
        </Form.Item>
        <Form.Item
          label="Situação"
          validateStatus={formik.errors.status != null ? 'error' : null}
          help={formik.errors.status}
          required
        >
          <Switch
            id="status"
            name="status"
            checkedChildren="Ativo"
            unCheckedChildren="Inativo"
            checked={formik.values.status}
            onChange={(value) =>
              formik.setFieldValue('status', value)
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </Content>
  )
}

ProfessionalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}

export default withRouter(ProfessionalForm)

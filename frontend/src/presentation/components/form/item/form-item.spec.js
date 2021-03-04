import React from 'react'
import { render, screen } from '@testing-library/react'
import faker from 'faker'
import { Input } from 'antd'
import FormItem from './form-item.jsx'

const makeSut = (error) => {
  render(
    <FormItem error={error}>
      <Input />
    </FormItem>
  )
}

describe('FormItem', () => {
  test('Should show an error message when error was passed', () => {
    const error = faker.random.words()
    makeSut(error)
    expect(screen.getByText(error)).toBeInTheDocument()
  })

  test('Should not show an error message when error was not passed', () => {
    makeSut(null)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})

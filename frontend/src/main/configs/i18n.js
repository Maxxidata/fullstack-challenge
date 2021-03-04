import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      add: 'Add',
      save: 'Save',
      active: 'Active',
      inactive: 'Inactive',
      description: 'Description',
      requestMessageError: 'Could not perform the operation',
      name: 'Name',
      phone: 'Phone',
      email: 'E-mail',
      type: 'Type',
      status: 'Status',
      id: 'ID',
      professionalTypes: 'Professional Types',
      professionals: 'Professionals',
      professional: 'Professional'
    }
  },
  pt: {
    translation: {
      add: 'Adicionar',
      save: 'Salvar',
      active: 'Ativo',
      inactive: 'Inativo',
      description: 'Descrição',
      requestMessageError: 'Não foi possivel realizar a operação',
      name: 'Nome',
      phone: 'Telefone',
      email: 'E-mail',
      type: 'Tipo',
      status: 'Situação',
      id: 'ID',
      professionalTypes: 'Tipos de Profissionais',
      professionals: 'Profissionais',
      professional: 'Profissional'
    }
  }
}

i18n.use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: 'pt',
    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  })

export default i18n

import moment from 'moment'

export const required = ((value) => {
  return value ? undefined : 'This field is required'
})

export const cantBeLessThen = (lessThen, message) => (value) => {
  return value < lessThen ? message : undefined
}

export const cantBeMoreThen = (moreThen, message) => (value) => {
  return value > moreThen ? message : undefined
}

export const cantBeLessThenField = (field, message) => (value, values) => {
  return parseInt(value, 10) < parseInt(values.get(field), 10) ? message : undefined
}

export const number = ((value) => {
  return value && Number.isNaN(Number(value)) ? 'Este campo é numérico' : undefined
})

export const email = ((value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'E-mail inválido' : undefined
})

export const passwordsMatch = ((value, allValues) => {
  return value !== allValues.get('password') ? 'As duas senhas não conferem' : undefined
})

export const cepValidator = (value) => (!/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(value) ? 'Informe um CEP correto!' : undefined)

export const valorDescontoValidator = (
  desconto,
  allValues
) => (desconto <= allValues.get('valor_recisao') ? undefined : 'Desconto maior que o valor líquido.')

export const dateIsSameOrAfter = (date) => {
  const today = moment().format('DD/MM/YYYY')
  const nextDate = moment(date, 'DD/MM/YYYY')

  return nextDate.isSameOrAfter(moment(today, 'DD/MM/YYYY')) ? undefined : 'Data deve ser maior que a data atual.'
}

export const percentValidator = (value) => {
  return value < 100 ? undefined : 'Valor deve ser menor que 100%.'
}

import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('O nome é obrigatório.')
      .min(3, 'Nome deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter sobrenome.'),
    email: yup
      .string()
      .required('O email é obrigatorio.')
      .email('O email deve ser válido.'),
    mobile: yup
      .string()
      .required('O celular é obrigatorio.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateMobile', 'Celular deve ser válido.', (value) => isValidPhone(value)),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>

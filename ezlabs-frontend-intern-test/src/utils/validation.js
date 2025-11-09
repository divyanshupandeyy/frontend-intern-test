import * as yup from 'yup'

export const contactSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\+?[0-9\-\s]{7,15}$/, 'Enter a valid phone')
    .required('Phone number is required'),
  message: yup.string().required('Message cannot be empty')
}).required()

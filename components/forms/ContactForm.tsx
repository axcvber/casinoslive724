import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import useLocale from '../../locales/useLocale'
import { Field } from '../Field'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IoMailOutline } from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'
import { FormApi } from '../api/form-api'
import { useSnackbar } from 'notistack'
import { useGlobalModalContext } from '../modals/GlobalModal'
export interface IContactFormInputs {
  telegram: string
  email: string
  name: string
  message: string
}

const ContactForm = () => {
  const t = useLocale()

  const ContactFormSchema = yup
    .object({
      telegram: yup
        .string()
        .required(t.form.validation.telegram.required)
        .matches(/^[A-Za-z\d_]{5,32}$/, t.form.validation.telegram.matches),
      email: yup.string().email(t.form.validation.email.email).required(t.form.validation.email.required),
      name: yup
        .string()
        .max(20, t.form.validation.name.max)
        .required(t.form.validation.name.required)
        .matches(/^[a-zA-ZА-Яа-я\s]+$/, t.form.validation.name.matches)
        .trim(),
      message: yup.string().max(200, t.form.validation.message.max).required(t.form.validation.message.required).trim(),
    })
    .required()

  const { enqueueSnackbar } = useSnackbar()
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IContactFormInputs>({
    resolver: yupResolver(ContactFormSchema),
  })
  const { hideModal } = useGlobalModalContext()

  const onSubmit: SubmitHandler<IContactFormInputs> = async (formData) => {
    // await FormApi.sendForm(formData)

    const { telegram, email, name, message } = formData
    let token = '5113782392:AAHC-Tx-3GUvo8E6YSUaVk-Nrr8fBwlQX3s'
    let chatId = -1001651942524
    const telegramView = `<b>Telegram</b>: ${telegram}%0A<b>Email</b>: ${email}%0A<b>Name</b>: ${name}%0A<b>Message</b>: ${message}`

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${telegramView}&parse_mode=html`

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(response.status.toString())
      }
      enqueueSnackbar(t.notify.successFormSend, {
        variant: 'success',
      })
      hideModal()
    } catch (error) {
      enqueueSnackbar(t.notify.errorFormSend, {
        variant: 'error',
      })
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field control={control} name='telegram' label={t.form.telegram} icon={<FaTelegramPlane />} />
      <Field control={control} name='email' label={t.form.email} icon={<IoMailOutline />} type='email' />

      <Field control={control} name='name' label={t.form.name} icon={<FiUser />} />

      <Box
        sx={{
          margin: '8px 0 20px 0',
          'textarea': {
            width: '100%',
            height: '100px',
            resize: 'none',
            padding: '10px 15px',
            bgcolor: '#141B3C',
            outline: 'none',
            color: 'inherit',
            border: `1px solid ${errors.message ? 'error.light' : '#424242'}`,
            borderRadius: '5px',
            fontFamily: 'inherit',
            fontSize: '15px',

            '&::placeholder': {
              opacity: 1,
              // color: 'grey[20]',
            },
            '&:focus': {
              borderColor: errors.message ? 'error.light' : 'primary.main',
            },
          },
        }}
      >
        <textarea {...register('message')} placeholder={t.form.message} />
        {errors.message && (
          <Typography fontSize={12} color='error.light' sx={{ margin: '4px 14px 0 5px' }}>
            {errors.message.message}
          </Typography>
        )}
      </Box>
      <Button fullWidth disabled={isSubmitting} type='submit' variant='contained'>
        {t.form.button}
      </Button>
    </form>
  )
}

export default ContactForm

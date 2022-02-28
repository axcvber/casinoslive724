import { Button } from '@mui/material'
import React, { useState } from 'react'
import useLocale from '../locales/useLocale'
import ContactForm from './forms/ContactForm'
import Modal from './Modal'
import { MODAL_TYPES, useGlobalModalContext } from './modals/GlobalModal'

const ContactButton = () => {
  const t = useLocale()
  const { showModal } = useGlobalModalContext()
  const contactUsModal = () => {
    showModal(MODAL_TYPES.CONTACT_US_MODAL)
  }

  return (
    <>
      <Button onClick={contactUsModal} sx={{ ml: 1, letterSpacing: '1px' }} color='secondary' variant='outlined'>
        {t.button.contact}
      </Button>
    </>
  )
}

export default ContactButton

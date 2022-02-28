import React from 'react'
import useLocale from '../../locales/useLocale'
import ContactForm from '../forms/ContactForm'
import Modal from '../Modal'
import { useGlobalModalContext } from './GlobalModal'

const ContactUsModal = () => {
  const { store, hideModal } = useGlobalModalContext()
  const t = useLocale()

  return (
    <Modal
      width={'320px'}
      title={t.modal.contactUs.title}
      subtitle={t.modal.contactUs.subtitle}
      open={store.isOpen}
      onClose={hideModal}
      isClosingOverlay
    >
      <ContactForm />
    </Modal>
  )
}

export default ContactUsModal

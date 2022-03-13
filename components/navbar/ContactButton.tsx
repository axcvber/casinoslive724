import { Button } from '@mui/material'
import useLocale from '../../locales/useLocale'
import { MODAL_TYPES, useGlobalModalContext } from '../modals/GlobalModal'

const ContactButton = () => {
  const { showModal } = useGlobalModalContext()
  const t = useLocale()
  const contactUsModal = () => {
    showModal(MODAL_TYPES.CONTACT_US_MODAL)
  }

  return (
    <Button onClick={contactUsModal} sx={{ letterSpacing: '1px' }} color='secondary' variant='outlined'>
      {t.button.contact}
    </Button>
  )
}

export default ContactButton

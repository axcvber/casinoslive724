import { IContactFormInputs } from '../forms/ContactForm'
import { useSnackbar } from 'notistack'

export const FormApi = {
  async sendForm(formData: IContactFormInputs) {
    const { telegram, email, name, message } = formData
    let token = '5113782392:AAHC-Tx-3GUvo8E6YSUaVk-Nrr8fBwlQX3s'
    let chatId = -1001651942524
    const telegramView = `<b>Telegram</b>: ${telegram}%0A<b>Email</b>: ${email}%0A<b>Name</b>: ${name}%0A<b>Message</b>: ${message}`

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${telegramView}&parse_mode=html`

    try {
      const response = await fetch(url)
      if (response) {
      }
    } catch (error) {
      console.error('Ошибка:', error)
    }
  },
}

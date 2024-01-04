import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../../emailJS'
import Loader from 'react-loaders'

export default function EmailForm() {
  //* EmailJS configuration
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text)
        alert('Message succesfully sent!')
        window.location.reload(false)
      },
      (error) => {
        console.log(error.text)
        alert('Something went wrong, please try again.')
      }
    )
  }
  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <ul>
          <li className="half">
            <input type="text" name="user_name" placeholder="Name" required />
          </li>
          <li className="half">
            <input
              type="email"
              name="user_email"
              id="name"
              placeholder="Email"
              required
            />
          </li>
          <li>
            <input placeholder="Subject" type="text" name="subject" required />
          </li>
          <li>
            <textarea placeholder="Message" name="message" required></textarea>
          </li>
          <li>
            <input type="submit" className="button" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  )
}

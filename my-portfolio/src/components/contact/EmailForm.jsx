import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../../emailJS";

export default function EmailForm() {
  //* EmailJS configuration
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message succesfully sent!");
        window.location.reload(false);
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong, please try again.");
      }
    );
  };

  return (
    <div className="contact-form">
      <h2>Get in touch</h2>
      <form ref={form} onSubmit={sendEmail} className="form">
        <input type="text" name="user_name" placeholder="Name" required />

        <input
          type="email"
          name="user_email"
          id="name"
          placeholder="Email"
          required
        />

        <input placeholder="Subject" type="text" name="subject" required />

        <textarea placeholder="Message" name="message" required></textarea>

        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}

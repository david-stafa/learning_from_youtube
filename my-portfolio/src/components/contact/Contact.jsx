import EmailForm from "./EmailForm";
import './contact.scss'
import ContactIMG from '../../assets/img/contact-img.svg'

export default function Contact(){

    return(
        <div className="contact" id="contact">
            <div className="image">
                <img src={ContactIMG} alt="" />
            </div>
            <EmailForm />
        </div>
    )
}
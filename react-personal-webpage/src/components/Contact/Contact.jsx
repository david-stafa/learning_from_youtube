import './contact.scss'
import AnimatedLetters from '../AnimatedLetter/AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import EmailForm from './EmailForm'
import Map from './Map'

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            impedit numquam vel eos, voluptas incidunt ullam voluptatum aliquid
            et, excepturi amet quisquam ipsum? Quo ab repudiandae vero, dolores
            sit quia.
          </p>

          <EmailForm />
        </div>

        <Map />
      </div>
      <Loader type="pacman" />
    </>
  )
}

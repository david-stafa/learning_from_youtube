import { Link } from 'react-router-dom'
import './home.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetter/AnimatedLetters'
import Loader from 'react-loaders'

export default function Home() {
  const [isHovered, setHovered] = useState(false)
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['D', 'a', 'v', 'i', 'd', ',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const handleAnimation = () => {
    setHovered(true)
    setTimeout(() => {
      setHovered(false)
    }, 1100)
  }

  const animated = isHovered ? 'animated' : ''

  return (
    <>
      <div className="container homepage">
        <div className="text-zone">
          <h1>
            <span
              className={`${letterClass} ${animated}`}
              onMouseEnter={handleAnimation}
            >
              H
            </span>
            <span className={`${letterClass} ${animated} _11`}>i</span>
            <span className={`${letterClass} _11`}>,</span>
            <br />
            <span className={`${letterClass} ${animated} _12`}>I</span>
            <span className={`${letterClass} ${animated} _12`}>&apos;</span>
            <span className={`${letterClass} ${animated} _13`}>m</span>{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={14}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2> Junior Front End Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

import './about.scss'
import AnimatedLetters from '../AnimatedLetter/AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faJsSquare,
  faLaravel,
  faPhp,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            totam quia optio asperiores voluptatem tempora inventore deleniti.
            Autem quo ad at tenetur dignissimos eius eaque distinctio dolore id,
            ex corporis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            iusto accusantium provident nostrum! Eius saepe sunt incidunt
            exercitationem unde. Optio suscipit earum sit! Exercitationem
            cupiditate corrupti itaque? Sequi, fuga qui?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            mollitia consectetur quis velit natus. Soluta, vel voluptas iusto
            ipsam rerum aperiam doloremque veritatis enim ex ad sed. Sint,
            veritatis distinctio.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPhp} color="#777BB3" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faSass} color="#c69" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faLaravel} color="#F05340" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#f34f29" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

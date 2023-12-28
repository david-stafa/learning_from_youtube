import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Links({ icon, link }) {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} color="#4d4d4e" />
      </a>
    </li>
  )
}

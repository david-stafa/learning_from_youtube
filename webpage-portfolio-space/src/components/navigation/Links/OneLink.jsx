import { Nav } from 'react-bootstrap'

export default function OneLink({ name, href, active, onClick }) {

  return (
    <>
      <Nav.Link
        href={href}
        className={active === name ? 'active navbar-link' : 'navbar-link'}
        onClick={() => onClick(name)}
      >
        {name}
      </Nav.Link>
    </>
  )
}

import { useState } from 'react'
import OneLink from './OneLink'

export default function Links() {
  const [activeLink, setActiveLink] = useState('home')

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }
  return (
    <>
      <OneLink
        name={'Home'}
        href={'#home'}
        active={activeLink}
        onClick={handleLinkClick}
      />
      <OneLink
        name={'Skills'}
        href={'#skills'}
        active={activeLink}
        onClick={handleLinkClick}
      />
      <OneLink
        name={'Projects'}
        href={'#projects'}
        active={activeLink}
        onClick={handleLinkClick}
      />
    </>
  )
}

import React from 'react'
import styles from './styles/styles.module.scss'

import ContactIcon from './assets/svg/contact.svg'
import FacebookIcon from './assets/svg/facebook.svg'
import GithubIcon from './assets/svg/github.svg'
import InstagramIcon from './assets/svg/instagram.svg'
import LinkedinIcon from './assets/svg/linkedin.svg'
import TwitterIcon from './assets/svg/twitter.svg'

export const Page = ({ children }) => {
  return <div className={styles.page}>{children}</div>
}

export const Comment = ({ children }) => {}

export const Footer = ({ children }) => {}

export const ByteCodeBlock = ({ children }) => {}

export const ByteCodeInstruction = ({ children }) => {}

//TODO alt image
export const Social = ({ type, href }) => {
  const src = {
    contact: ContactIcon,
    facebook: FacebookIcon,
    github: GithubIcon,
    instagram: InstagramIcon,
    linkedin: LinkedinIcon,
    twitter: TwitterIcon
  }[type]

  return (
    <a href={href}>
      <img src={src}></img>
    </a>
  )
}

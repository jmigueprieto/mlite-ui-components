import React from "react"
import styles from "../../styles/styles.module.scss"

import ContactIcon from "../../assets/svg/contact.svg"
import FacebookIcon from "../../assets/svg/facebook.svg"
import GithubIcon from "../../assets/svg/github.svg"
import InstagramIcon from "../../assets/svg/instagram.svg"
import LinkedinIcon from "../../assets/svg/linkedin.svg"
import TwitterIcon from "../../assets/svg/twitter.svg"

const Social = ({ type, href, target }) => {
  const attrs = {
    contact: { src: ContactIcon, alt: "Contact" },
    facebook: { src: FacebookIcon, alt: "Facebook" },
    github: { src: GithubIcon, alt: "Github" },
    instagram: { src: InstagramIcon, alt: "Instagram" },
    linkedin: { src: LinkedinIcon, alt: "LinkedIn" },
    twitter: { src: TwitterIcon, alt: "Twitter" }
  }[type]

  if (!attrs) {
    throw Error(`Unknown type '${type}' of social icon`)
  }

  const img = <img className={styles.icon} src={attrs.src} alt={attrs.alt} />

  return (
    <a href={href} {...(target ? { target: target } : {})}>
      {img}
    </a>
  )
}

export default Social

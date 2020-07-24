import React, { Fragment } from "react"
import styles from "./styles/styles.module.scss"

import ContactIcon from "./assets/svg/contact.svg"
import FacebookIcon from "./assets/svg/facebook.svg"
import GithubIcon from "./assets/svg/github.svg"
import InstagramIcon from "./assets/svg/instagram.svg"
import LinkedinIcon from "./assets/svg/linkedin.svg"
import TwitterIcon from "./assets/svg/twitter.svg"

export const Page = ({ children }) => {
  return <div className={styles.page}>{children}</div>
}

export const Comment = ({ lines }) => {
  return (
    <p className={styles.comment}>
      /** <br />
      {lines.map((line, index) => (
        <span key={index}>
          &nbsp;* {line}
          <br />
        </span>
      ))}
      &nbsp;*/
    </p>
  )
}

export const Footer = ({ children }) => {
  return <div className={styles.footer}>{children}</div>
}

export const Bytecode = ({ children }) => {
  return (
    <p className={styles["bytecode"]}>
      {children.map((instruction, index) => (
        <Fragment key={index}>
          {instruction}
          <br />
        </Fragment>
      ))}
    </p>
  )
}

export const Instruction = ({ children }) => {
  return <span>{children}</span>
}

export const Literal = ({ children }) => {
  return <span className={styles["literal"]}>{children}</span>
}

export const Social = ({ type, href }) => {
  const img = {
    contact: { src: ContactIcon, alt: "Contact" },
    facebook: { src: FacebookIcon, alt: "Facebook" },
    github: { src: GithubIcon, alt: "Github" },
    instagram: { src: InstagramIcon, alt: "Instagram" },
    linkedin: { src: LinkedinIcon, alt: "LinkedIn" },
    twitter: { src: TwitterIcon, alt: "Twitter" }
  }[type]

  return (
    <a href={href}>
      <img className={styles.icon} src={img.src} alt={img.alt}></img>
    </a>
  )
}

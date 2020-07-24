import React from 'react'
import styles from './styles/styles.module.scss'

export const Page = ({ children }) => {
  return <div className={styles.page}>{children}</div>
}

export const Comment = ({ children }) => {}

export const Footer = () => {}

export const ByteCodeBlock = ({ children }) => {}

export const ByteCodeInstruction = ({ children }) => {}

export const Icon = ({ name }) => {}

export const Social = ({ icon, link }) => {}

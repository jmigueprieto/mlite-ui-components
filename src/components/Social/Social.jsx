import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.module.scss";

import ContactIcon from "../../assets/svg/contact.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";
import GithubIcon from "../../assets/svg/github.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";
import LinkedinIcon from "../../assets/svg/linkedin.svg";
import TwitterIcon from "../../assets/svg/twitter.svg";

const Social = ({ type, href, target }) => {
  const attrs = {
    contact: { src: ContactIcon, alt: "Contact" },
    facebook: { src: FacebookIcon, alt: "Facebook" },
    github: { src: GithubIcon, alt: "Github" },
    instagram: { src: InstagramIcon, alt: "Instagram" },
    linkedin: { src: LinkedinIcon, alt: "LinkedIn" },
    twitter: { src: TwitterIcon, alt: "Twitter" }
  }[type];

  if (!attrs) {
    throw Error(`Unknown type '${type}' of social icon`);
  }

  if (!href) {
    throw Error("href must be a valid URL");
  }

  return (
    <a href={href} {...(target ? { target: target } : {})}>
      <img className={styles.icon} src={attrs.src} alt={attrs.alt} />
    </a>
  );
};

Social.propTypes = {
  /** An icon will be shown accordingly */
  type: PropTypes.oneOf([
    "contact",
    "facebook",
    "github",
    "instagram",
    "linkedin",
    "twitter"
  ]),
  /** URL of the social media or mail for Contact */
  href: PropTypes.string.isRequired,
  /** The target attribute of the link i.e. _blank, _self, _parent, _top */
  target: PropTypes.string
};

export default Social;

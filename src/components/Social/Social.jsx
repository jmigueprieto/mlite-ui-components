import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.module.scss";

import ContactIcon from "./Icons/ContactIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import GithubIcon from "./Icons/GithubIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import TwitterIcon from "./Icons/TwitterIcon";

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
      <attrs.src className={styles.icon} />
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

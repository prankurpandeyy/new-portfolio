import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "prankurpandeyy.me",
    href: "https://prankurpandeyy.me",
  },
  {
    social: "email",
    link: "prankurpandeyy@gmail.com",
    href: "mailto:prankurpandeyy@gmail.com",
  },
  {
    social: "github",
    link: "prankurpandeyy",
    href: "https://github.com/itsnitinr",
  },
  {
    social: "linkedin",
    link: "prankurpandeyy",
    href: "https://www.linkedin.com/in/prankurpandeyy/",
  },
  {
    social: "twitter",
    link: "prankurpandeyy",
    href: "https://www.twitter.com/prankurpandeyy",
  },
  {
    social: "instagram",
    link: "prankurpandeyy",
    href: "https://www.instagram.com/prankurpandeyy",
  },
  // {
  //   social: "polywork",
  //   link: "prankurpandeyy",
  //   href: "https://www.polywork.com/prankurpandeyy",
  // },
  {
    social: "telegram",
    link: "prankurpandeyy",
    href: "https://t.me/prankurpandeyy",
  },
  // {
  //   social: "codepen",
  //   link: "prankurpandeyy",
  //   href: "https://codepen.io/itsnitinr",
  // },
  // {
  //   social: "codesandbox",
  //   link: "itsnitinr",
  //   href: "https://codesandbox.io/u/itsnitinr",
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.first_col}>
        <div className={styles.company_name}>Qtify</div>
        <div className={styles.company_description}>
          Qtify is a digital music service that gives you access to millions of
          songs and other content from creators all over the world.
        </div>
      </div>
      <div className={styles.second_col}>
        <h2 className={styles.link_header}>Contact</h2>
        <ul className={styles.link_items}>
          <li>Varanasi</li>
          <li>patelrajkumar579@gmail.com</li>
          <li>+91 8446440954</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

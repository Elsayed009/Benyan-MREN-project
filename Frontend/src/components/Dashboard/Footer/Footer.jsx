import styles from "./Footer.module.css";

const Footer = ({
  year = new Date().getFullYear(),
  appName = "Bunyan Real Estate",
}) => {
  return (
    <footer
      className={`${styles.footer} d-flex align-items-center justify-content-center`}
    >
      <span>
        © {year} {appName}. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;

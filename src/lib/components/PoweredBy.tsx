import { mimaLogo } from "../assets/img";
import styles from "../styles/PayWithMima.module.css";

const PoweredBy = () => {
  return (
    <a
      href="https://mimapay.africa/"
      className={styles.mima}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>Powered by</p>
      <img src={mimaLogo} className={styles.logo} alt="mima Logo" />
    </a>
  );
};

export default PoweredBy;

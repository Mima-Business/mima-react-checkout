import styles from "../styles/Spinner.module.css";

const Spinner = ({
  color = "white",
  size = 15,
}: {
  color?: string;
  size?: number;
}) => (
  <div
    className={styles.spinner}
    style={{
      borderTopColor: color,
      width: size,
      height: size,
    }}
  />
);

export default Spinner;

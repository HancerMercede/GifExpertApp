import { PropTypes } from "prop-types";
import styles from "./Header.module.css";

export const Header = ({ AppTitle }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.AppTitle}>{AppTitle}</h1>
    </div>
  );
};

Header.propTypes = {
  AppTitle: PropTypes.string.isRequired,
};

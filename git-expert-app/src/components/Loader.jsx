import { ImSpinner2 } from "react-icons/im";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.spinner}>
      <ImSpinner2 className={styles.spinning} size={40} />
    </div>
  );
};

import { PropTypes } from "prop-types";
import styles from "./CategoryTitleSection.module.css";

export const CategoryTitleSection = ({ category }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{category}</h1>
    </div>
  );
};

CategoryTitleSection.propTypes = {
  category: PropTypes.string.isRequired,
};

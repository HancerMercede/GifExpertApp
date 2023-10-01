import { useFetchGifs } from "../hooks/useFetchGifs";
import { CategoryTitleSection } from "./CategoryTitleSection";
import { GifItem } from "./GifItem";
import { PropTypes } from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <CategoryTitleSection category={category} />

      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

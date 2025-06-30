import PropTypes from "prop-types";
import "../../styles/article.css";

/**
 * ReviewContent component
 * @param {Object} articleSpecs - The file to display
 * @param {Array} htmlMappers - The content of the review
 * @returns {JSX.Element}
 */

ReviewContent.propTypes = {
  articleSpecs: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string,
  }).isRequired,
  htmlMappers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      element: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      parentId: PropTypes.string,
    })
  ).isRequired,
};
export default function ReviewContent({ articleSpecs, htmlMappers }) {
  return (
    <>
      <h2>
        <a href={articleSpecs.url}>{articleSpecs.date}</a>
      </h2>
    </>
  );
}

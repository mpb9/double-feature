import PropTypes from "prop-types";
import "../../styles/article.css";

/**
 * ReviewContent component
 * @param {Object} fileSpecs - The file to display
 * @param {Array} htmlMappers - The content of the review
 * @returns {JSX.Element}
 */

ReviewContent.propTypes = {
  fileSpecs: PropTypes.shape({
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
export default function ReviewContent({ fileSpecs, htmlMappers }) {
  console.log("fileSpecs", fileSpecs);
  console.log("htmlMappers", htmlMappers);

  return (
    <>
      <h2>
        <a href={fileSpecs.url} target="_blank">
          {fileSpecs.date}
        </a>
      </h2>
    </>
  );
}

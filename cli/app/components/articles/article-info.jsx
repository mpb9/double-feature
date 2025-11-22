import PropTypes from "prop-types";
import "../../styles/article.css";

/**
 * ArticleInfo component
 * @param {Object} articleSpecs - The file to display
 * @param {Array} htmlMappers - The content of the review
 * @returns {JSX.Element}
 */
ArticleInfo.propTypes = {
  articleSpecs: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    external_host: PropTypes.bool,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    published: PropTypes.string,
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
export default function ArticleInfo({ articleSpecs, htmlMappers }) {
  return (
    <div id="info">
      <a href={`${articleSpecs.url}`}>{articleSpecs.published}</a>
      <span>Michael Beebe</span>
    </div>
  );
}

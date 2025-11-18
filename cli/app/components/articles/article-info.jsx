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
    src: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    publish_date: PropTypes.string,
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
      <h2
        style={{
          marginTop: "1rem",
          // fontStyle: "italic",
          textAlign: "left",
          paddingLeft: "2px",
          fontSize: "1.12rem",
        }}
      >
        <a href={`${articleSpecs.url}`}>{articleSpecs.publish_date}</a>
      </h2>
    </div>
  );
}

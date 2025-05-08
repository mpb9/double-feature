import PropTypes from "prop-types";

/**
 * ArticleTags component
 * @param {Object} tags - The tags to display
 * @returns {JSX.Element}
 */

ArticleTags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default function ArticleTags({ tags }) {
  const baseUrl = "http://localhost:3000/tag";
  return (
    <div className="flex justify-end items-center flex-wrap gap-2 pt-2 pr-2">
      {tags.map((tag, index) => (
        <a
          key={index}
          className="px-2 text-lg text-[var(--green)] bg-[var(--d-gray)] font-[200] rounded italic hover:bg-[var(--green)] hover:text-[var(--l-green)] transition duration-500"
          href={`${baseUrl}:${tag}`}
          style={{ textDecoration: "none" }}
        >
          {tag}
        </a>
      ))}
    </div>
  );
}

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
  return (
    <div className="flex justify-end items-center flex-wrap gap-3 pt-2 pr-4">
      {tags.map((tag, index) => (
        // ! Temporarily using href="#" to avoid routing issues
        // info: will be replaced with commented out code below when Tags work
        <a
          key={index}
          className="px-2 text-lg text-[var(--green)] bg-black font-[200] rounded italic hover:bg-[var(--green)] hover:text-[var(--white)] transition duration-500"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            console.warn("Tags are not yet implemented");
          }}
          style={{ textDecoration: "none" }}
        >
          {tag}
        </a>
        /*         <a
          key={index}
          className="px-2 text-lg text-[var(--green)] bg-black font-[200] rounded italic hover:bg-[var(--green)] hover:text-[var(--white)] transition duration-500"
          href={`/tag:${tag}`}
          style={{ textDecoration: "none" }}
        >
          {tag}
        </a> */
      ))}
    </div>
  );
}

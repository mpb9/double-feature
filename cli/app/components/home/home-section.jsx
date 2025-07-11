import PropTypes from "prop-types";
import ArticlePreview from "../articles/article-preview";

/**
 * HomeSection component
 * @param {string} name - The name of the section
 * @param {Array} files - The files to display in the section
 * @returns {JSX.Element}
 */
HomeSection.propTypes = {
  name: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      src: PropTypes.string,
      url: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.string,
    })
  ).isRequired,
  src: PropTypes.string.isRequired,
};
export default function HomeSection({ name, files, src }) {
  const isFeatured = name == "Featured";
  const isReviews = name == "Reviews";
  const isLists = name == "Lists";

  const scrollableHtml = (
    <div className="flex flex-row items-center justify-start w-full overflow-x-scroll h-fit no-scrollbar snap-x scroll-smooth">
      {files.map((articleSpecs, index) => (
        <ArticlePreview key={index} articleSpecs={articleSpecs} src={src} />
      ))}
    </div>
  );

  if (isFeatured) {
    return (
      <div className="flex flex-col w-full pt-2 mb-1 sm:mb-4 sm:pt-4">
        {scrollableHtml}
      </div>
    );
  } else if (isReviews || isLists) {
    return (
      <div className="flex flex-col w-full pt-1 mb-2 sm:pt-2 sm:mb-4 group/section">
        <div className="flex flex-row w-full justify-center sm:justify-start text-[24px] sm:text-4xl italic pl-1">
          <h1 className="font-[100] tracking-[0.2rem] uppercase group-hover/section:tracking-[0.4rem] group-hover/section:font-[200] transition-all duration-[600ms]">
            <a
              href={`/${name.toLowerCase()}`}
              className="text-[#69d34688] hover:text-[#69d346] transition-colors duration-[600ms] group/name"
            >
              ____
              <i className="px-0.5 text-[var(--dim)] group-hover/name:text-[#69d346] transition-colors duration-[600ms]">
                {name}
              </i>
              ____
            </a>
          </h1>
        </div>
        {scrollableHtml}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full pt-1 mb-2 sm:pt-2 sm:mb-4 group/section">
        <div className="flex flex-row w-full justify-center sm:justify-start text-[var(--dim)] text-[22px] sm:text-4xl italic pl-1">
          <h1 className="font-[100] tracking-[0.2rem] uppercase group-hover/section:tracking-[0.4rem] group-hover/section:font-[200] transition-all duration-[600ms]">
            ____
            <i className="px-0.5 cursor-default">{name}</i>
            ____
          </h1>
        </div>
        {scrollableHtml}
      </div>
    );
  }
}

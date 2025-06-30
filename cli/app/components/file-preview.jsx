import PropTypes from "prop-types";
import { IMG_ROUTES } from "../constants/routing-constants";

/**
 * FilePreview component
 * @param {Object} articleSpecs - The file to display
 * @param {src} src - The source of the file
 * @returns {JSX.Element}
 */
FilePreview.propTypes = {
  articleSpecs: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string,
  }).isRequired,
  src: PropTypes.string.isRequired,
};
export default function FilePreview({ articleSpecs, src }) {
  const isFeatured = articleSpecs.tags.includes("featured");
  const href =
    articleSpecs.src.length > 0
      ? `/${src}/${articleSpecs.src}`
      : articleSpecs.url;

  if (href.length === 0) {
    return (
      <div className="flex flex-col group items-center justify-center min-w-70 md:min-w-80 lg:min-w-100 h-full ml-0 mr-8 py-4 tracking-normal">
        <a
          href={`/${src}/not-found`}
          className="w-full min-h-44 md:min-h-52 lg:min-h-56 flex items-end shadow-lg grayscale brightness-90 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-105 transition duration-500"
          style={{
            backgroundImage: `url(/${IMG_ROUTES.articles}/${articleSpecs.img})`,
          }}
        >
          <div className="static w-full flex items-center justify-end bg-[var(--black)]">
            <h2 className="text-lg md:text-xl lg:text-2xl pr-3 pb-[1px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500">
              {articleSpecs.title}
            </h2>
          </div>
        </a>
      </div>
    );
  }
  if (isFeatured) {
    return (
      <div className="flex flex-col group items-center justify-center min-w-70 sm:min-w-[75vw] md:min-w-[70vw] lg:min-w-[55vw] xl:min-w-[45vw] h-full mr-8 py-4 tracking-normal">
        {/* Switch to <Link /> or something */}
        <a
          href={href}
          className="w-full min-h-44 sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[45vh] xl:min-h-[45vh] flex items-end shadow-lg grayscale brightness-90 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-105 transition duration-500"
          style={{
            backgroundImage: `url(/${IMG_ROUTES.articles}/${articleSpecs.img})`,
          }}
        >
          <div className="static w-full flex items-center justify-end bg-[var(--black)]">
            <h2 className="text-xl sm:text-4xl pr-3 pb-[5px] pt-[1px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500">
              {articleSpecs.title}
            </h2>
          </div>
        </a>
      </div>
    );
  }
  return (
    <div className="flex flex-col group items-center justify-center min-w-70 md:min-w-80 lg:min-w-100 h-full ml-0 mr-8 py-4 tracking-normal">
      <a
        href={href}
        className="w-full min-h-44 md:min-h-52 lg:min-h-56 flex items-end shadow-lg grayscale brightness-90 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-105 transition duration-500"
        style={{
          backgroundImage: `url(/${IMG_ROUTES.articles}/${articleSpecs.img})`,
        }}
      >
        <div className="static w-full flex items-center justify-end bg-[var(--black)]">
          <h2 className="text-xl lg:text-2xl pr-3 pb-[1px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500">
            {articleSpecs.title}
          </h2>
        </div>
      </a>
    </div>
  );
}

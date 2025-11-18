import PropTypes from "prop-types";
import { IMG_ROUTES } from "../../constants";

/**
 * ArticlePreview component
 * @param {Object} articleSpecs - The file to display
 * @param {src} src - The source of the file
 * @returns {JSX.Element}
 */
ArticlePreview.propTypes = {
  articleSpecs: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    publish_date: PropTypes.string,
  }).isRequired,
  src: PropTypes.string.isRequired,
};
export default function ArticlePreview({ articleSpecs, src }) {
  const isFeatured = articleSpecs.tags.includes("featured");
  const href =
    articleSpecs.id.length > 0
      ? `/${src}/${articleSpecs.id}`
      : articleSpecs.url;

  const basicArticlePreviewCss =
    "flex flex-col items-center justify-center h-full min-w-70 md:min-w-80 lg:min-w-100 my-4 ml-0 mr-6 tracking-normal group snap-start";
  const textBoxCss =
    "static w-full flex items-center justify-end bg-[var(--black)]";

  if (href.length !== 0) {
    if (isFeatured) {
      // info: featured articles
      return (
        <div className="flex flex-col group items-center justify-center h-full min-w-70 sm:min-w-[75vw] md:min-w-[65vw] lg:min-w-[55vw] xl:min-w-[43vw] mr-6 my-4 tracking-normal snap-start">
          <a
            href={href}
            className="w-full min-h-44 sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[45vh] xl:min-h-[45vh] flex items-end shadow-lg grayscale brightness-100 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-110 transition duration-500"
            style={{
              backgroundImage: `url(${IMG_ROUTES.covers}${articleSpecs.img})`,
            }}
            fetchPriority="high"
          >
            <div className={textBoxCss}>
              <h2 className="text-xl sm:text-4xl pr-3 pb-[5px] pt-[1px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500">
                {articleSpecs.title}
              </h2>
            </div>
          </a>
        </div>
      );
    }
    return (
      // info: every non-featured, non-empty article
      <div className={basicArticlePreviewCss}>
        <a
          href={href}
          className="flex items-end w-full transition duration-500 bg-center bg-no-repeat bg-cover shadow-lg min-h-40 md:min-h-52 lg:min-h-56 grayscale brightness-100 group-hover:grayscale-0 group-hover:brightness-110"
          style={{
            backgroundImage: `url(${IMG_ROUTES.covers}${articleSpecs.img})`,
          }}
        >
          <div className={textBoxCss}>
            <h2 className="text-xl lg:text-2xl pr-3 pb-[1px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500">
              {articleSpecs.title}
            </h2>
          </div>
        </a>
      </div>
    );
  }
}

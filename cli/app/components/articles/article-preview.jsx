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
    external_host: PropTypes.bool.isRequired,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    published: PropTypes.string,
  }).isRequired,
  src: PropTypes.string.isRequired,
};
export default function ArticlePreview({ articleSpecs, src }) {
  const isFeatured = articleSpecs.tags.includes("featured");
  const href = articleSpecs.external_host
    ? articleSpecs.url
    : `/${src}/${articleSpecs.id}`;

  const basicArticlePreviewCss =
    "flex flex-col items-center justify-center h-full min-w-70 md:min-w-80 lg:min-w-100 my-4 ml-0 mr-6 tracking-normal group snap-start";
  const textBoxCss =
    "static w-full flex items-center justify-end bg-[var(--black)]";

  if (href.length !== 0) {
    if (isFeatured) {
      // info: featured articles
      return (
        <div className="group flex flex-col justify-center items-center my-4 mr-6 min-w-70 sm:min-w-[75vw] md:min-w-[65vw] lg:min-w-[55vw] xl:min-w-[43vw] h-full tracking-normal snap-start">
          <a
            href={href}
            className="flex items-end bg-cover bg-no-repeat bg-center shadow-lg brightness-100 group-hover:brightness-110 grayscale group-hover:grayscale-0 w-full min-h-44 sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[45vh] xl:min-h-[45vh] transition duration-500"
            style={{
              backgroundImage: `url(${IMG_ROUTES.covers}${articleSpecs.img})`,
            }}
            fetchPriority="high"
          >
            <div className={textBoxCss}>
              <h2 className="pt-[1px] pr-3 pb-[5px] font-[100] text-[var(--l-gray)] group-hover:text-[#69d346] text-xl sm:text-4xl transition duration-500">
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
          className="flex items-end bg-cover bg-no-repeat bg-center shadow-lg brightness-100 group-hover:brightness-110 grayscale group-hover:grayscale-0 w-full min-h-40 md:min-h-52 lg:min-h-56 transition duration-500"
          style={{
            backgroundImage: `url(${IMG_ROUTES.covers}${articleSpecs.img})`,
          }}
        >
          <div className={textBoxCss}>
            <h2 className="pr-3 pb-[1px] font-[100] text-[var(--l-gray)] group-hover:text-[#69d346] text-xl lg:text-2xl transition duration-500">
              {articleSpecs.title}
            </h2>
          </div>
        </a>
      </div>
    );
  }
}

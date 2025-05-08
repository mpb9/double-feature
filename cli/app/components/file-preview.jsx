import PropTypes from "prop-types";
/**
 * FilePreview component
 * @param {Object} fileSpecs - The file to display
 * @param {src} src - The source of the file
 * @returns {JSX.Element}
 */
FilePreview.propTypes = {
  fileSpecs: PropTypes.shape({
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
export default function FilePreview({ fileSpecs, src }) {
  const isFeatured = fileSpecs.tags.includes("featured");
  const href =
    fileSpecs.src.length > 0 ? `/${src}/${fileSpecs.src}` : fileSpecs.url;

  if (href.length === 0) {
    return (
      <div className="flex flex-col group items-center justify-center min-w-70 md:min-w-80 lg:min-w-100 h-full ml-0 mr-8 py-4 tracking-normal">
        <a
          href={`/${src}/not-found`}
          className="w-full min-h-44 md:min-h-52 lg:min-h-56 flex items-end shadow-lg grayscale brightness-75 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
          style={{ backgroundImage: `url(app/assets/img/${fileSpecs.img})` }}
        >
          <div className="static w-full flex items-center justify-end bg-[var(--black)]">
            <h2 className="text-lg md:text-xl lg:text-2xl pr-3 pb-[1px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500">
              {fileSpecs.title}
            </h2>
          </div>
        </a>
      </div>
    );
  }
  if (isFeatured) {
    return (
      <div className="flex flex-col group items-center justify-center min-w-[90%] sm:min-w-[70%] md:min-w-[50%] lg:min-w-[44%] xl:min-w-[40%] h-full mr-8 py-4 tracking-normal">
        {/* Switch to <Link /> or something */}
        <a
          href={href}
          className="w-full min-h-56 sm:min-h-64 lg:min-h-72 xl:min-h-80 flex items-end shadow-lg grayscale brightness-75 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
          style={{ backgroundImage: `url(app/assets/img/${fileSpecs.img})` }}
        >
          <div className="static w-full flex items-center justify-end bg-[var(--black)]">
            <h2 className="text-3xl pr-4 pb-[3px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500">
              {fileSpecs.title}
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
        className="w-full min-h-44 md:min-h-52 lg:min-h-56 flex items-end shadow-lg grayscale brightness-75 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
        style={{ backgroundImage: `url(app/assets/img/${fileSpecs.img})` }}
      >
        <div className="static w-full flex items-center justify-end bg-[var(--black)]">
          <h2 className="text-lg md:text-xl lg:text-2xl pr-3 pb-[1px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500">
            {fileSpecs.title}
          </h2>
        </div>
      </a>
    </div>
  );
}

import PropTypes from "prop-types";
import FilePreview from "../file-preview";

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
  const isClassics = name == "Classics";

  if (isFeatured) {
    return (
      <div className="pb-6" id="home-section">
        <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth no-scrollbar">
          {files.map((fileSpecs, index) => (
            <FilePreview key={index} fileSpecs={fileSpecs} src={src} />
          ))}
        </div>
      </div>
    );
  } else if (isClassics) {
    return (
      <div id="home-section">
        <div className="flex flex-row w-full text-[var(--dim)] text-4xl italic pl-1">
          <h1>
            ____
            <i className="pl-1 pr-1 cursor-default">{name}</i>
            ____
          </h1>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth no-scrollbar">
          {files.map((fileSpecs, index) => (
            <FilePreview key={index} fileSpecs={fileSpecs} src={src} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div id="home-section">
        <div className="flex flex-row w-full text-4xl font-[100] pl-0">
          <h1>
            <a
              href={`/${name.toLowerCase()}`}
              className="text-[#69d34688] hover:text-[#69d346] group"
            >
              ____
              <i className="pl-2 pr-1 text-[var(--dim)] group-hover:text-[#69d346] duration-500">
                {name}
              </i>
              ____
            </a>
          </h1>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth no-scrollbar">
          {files.map((fileSpecs, index) => (
            <FilePreview key={index} fileSpecs={fileSpecs} src={src} />
          ))}
        </div>
      </div>
    );
  }
}

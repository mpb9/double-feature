import { Link } from "react-router";
export default function FooterLink({ name, url }) {
  // ! TEMPORARY: Don't diplay "TAGS" link until tags are implemented/functional
  if (name == "Tags") {
    return;
  }
  if (name == "Home" || name == "") {
    return (
      <div className="flex flex-col mx-4 my-2 sm:my-0">
        <div className="flex flex-row items-center justify-between w-full text-2xl font-[200] tracking-widest">
          <Link
            to="/"
            className="text-[var(--dim)] uppercase underline underline-offset-8 decoration-[#69d346aa] decoration-2 hover:text-[#69d346] duration-300"
          >
            HOME
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col mx-4 my-2 sm:my-0">
      <div className="flex flex-row items-center justify-between w-full text-2xl font-[200] tracking-widest">
        {url == "" ? (
          <Link
            to={`/${name.toLowerCase()}`}
            className="text-[var(--dim)] uppercase underline underline-offset-8 decoration-[#69d346aa] decoration-2 hover:text-[#69d346] duration-300"
          >
            {name}
          </Link>
        ) : (
          <a
            href={url}
            className="text-[var(--dim)] uppercase underline underline-offset-8 decoration-[#69d346aa] decoration-2 hover:text-[#69d346] duration-300"
          >
            {name}
          </a>
        )}
      </div>
    </div>
  );
}

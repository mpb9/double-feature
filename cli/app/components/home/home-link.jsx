import { Link } from "react-router";
export default function HomeLink({ name, url }) {
  if (name == "Home" || name == "") {
    return (
      <div className="flex flex-col mx-6">
        <div className="flex flex-row items-center justify-between w-full text-3xl font-[200] tracking-widest">
          <h1>
            <Link
              to="/"
              className="text-[var(--dim)] underline underline-offset-8 decoration-[#69d346aa] decoration-1 hover:text-[#69d346] duration-300"
            >
              {" "}
              HOME{" "}
            </Link>
            {/* <Link
              to="/"
              className="flex items-center justify-start p-1 opacity-70 transition-discrete cursor-pointer rounded-xl hover:text-[#69d346] hover:scale-110 mt-1 duration-300"
            >
              <House weight="fill" size={44} />
            </Link> */}
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col mx-6">
      <div className="flex flex-row items-center justify-between w-full text-3xl font-[200] tracking-widest">
        <h1>
          {url == "" ? (
            <Link
              to={`/${name.toLowerCase()}`}
              className="text-[var(--dim)] uppercase underline underline-offset-8 decoration-[#69d346aa] decoration-1 hover:text-[#69d346] duration-300"
            >
              {name}
            </Link>
          ) : (
            <a
              href={url}
              className="text-[var(--dim)] uppercase underline underline-offset-8 decoration-[#69d346aa] decoration-1 hover:text-[#69d346] duration-300"
            >
              {name}
            </a>
          )}
        </h1>
      </div>
    </div>
  );
}

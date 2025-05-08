export default function HomeLink({ name, url }) {
  return (
    <div className="flex flex-col mx-6">
      <div className="flex flex-row items-center justify-between w-full text-3xl font-[200] tracking-widest">
        <h1>
          {url == "" ? (
            <a
              href={`/${name.toLowerCase()}`}
              className="text-[var(--dim)] uppercase underline underline-offset-8 decoration-[#69d346aa] decoration-1 hover:text-[#69d346] duration-300"
            >
              {name}
            </a>
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

export default function HomeHeader() {
  return (
    <div className="absolute z-10 w-full" id="home-header">
      <div className="flex w-full items-center justify-center">
        <div
          className="flex flex-col w-fit items-center h-fit px-[38px] py-4"
          id="home-title"
        >
          <h6 className="text-lg cursor-default text-[var(--dim)] pb-[3px] font-[100] italic">
            Ya know what? It&apos;s been a long day...
          </h6>
          <h1 className="text-4xl cursor-default text-[#69d346] font-[100]">
            Make it a Double... Feature.
          </h1>
        </div>
      </div>
      <div className="absolute z-10 top-2 right-4">
        <div className="flex flex-col w-fit items-center h-fit px-[24px] py-2">
          <div className="text-xl cursor-default text-right text-[#a5aca0cc] pt-[3px] font-[100]">
            created by: <br />
            <a
              href="https://michael-beebe.com"
              className="underline underline-offset-8 decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300"
            >
              MICHAEL BEEBE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

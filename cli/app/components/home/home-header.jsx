export default function HomeHeader() {
  return (
    <>
      {/* Desktop Header */}
      <div className="absolute z-10 hidden w-full sm:block" id="home-header">
        <div className="flex items-center justify-center w-full">
          <div
            className="flex flex-col items-center px-9.5 py-4.5 w-fit h-fit"
            id="home-title"
          >
            <h6 className="text-xl cursor-default text-[var(--dim)] pb-[3px] font-[100] italic">
              Ya know what? It&apos;s been a long day...
            </h6>
            <h1 className="text-4xl cursor-default text-[#69d346] font-[100]">
              Make it a Double... Feature.
            </h1>
          </div>
        </div>
        <div className="absolute top-0 z-10 right-0 md:right-4 lg:right-8 xl:right-12">
          <div className="flex flex-col w-fit items-center h-fit px-[24px] py-4.5">
            <div className="text-xl cursor-default text-right text-[#a5aca0cc] pt-[3px] font-[100]">
              created by: <br />
              <a
                href="https://michael-beebe.com"
                className="underline underline-offset-8 cursor-pointer decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300"
              >
                MICHAEL BEEBE
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Header */}
      <div className="absolute z-10 block w-full sm:hidden" id="home-header">
        <div className="flex items-center justify-center w-full">
          <div
            className="flex flex-col w-fit items-center h-fit px-[38px] py-3"
            id="home-title"
          >
            <h1 className="text-[28px] cursor-default text-[#69d346] font-[100]">
              Make it a Double Feature.
            </h1>
            <div className="text-lg cursor-default text-[#a5aca0cc] pt-[3px] font-[100]">
              <a
                href="https://michael-beebe.com"
                className="underline underline-offset-8 cursor-pointer decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300"
              >
                MICHAEL BEEBE
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-10 right-4">
          <div className="flex flex-col w-fit items-center h-fit px-[24px] py-6"></div>
        </div>
      </div>
    </>
  );
}

import { House } from "@phosphor-icons/react";
import { Link } from "react-router";

export default function ErrorPage({ message, details, stack }) {
  return (
    <main className="flex flex-col w-full min-h-screen items-center pt-16 p-10 bg-[#ff000044] bg-[linear-gradient(to_right,#a0b1b812_1px,transparent_1px),linear-gradient(to_bottom,#a0b1b812_1px,transparent_1px)] bg-[size:18px_18px]">
      <nav className="absolute top-0 right-4 md:right-7 xl:right-10">
        <Link
          to="/"
          className="flex items-center p-1 text-[var(--l-pink)] opacity-70 transition-discrete duration-300 cursor-pointer rounded-xl hover:scale-110 mt-3.5 xl:mt-5"
        >
          <House weight="light" size={60} color="var(--l-pink)" />
        </Link>
      </nav>
      <h1 className="pt-20 pb-6 text-4xl text-[var(--l-red)]">{message}</h1>
      <p className="pb-6 text-xl text-[var(--l-pink)]">{details}</p>
      {stack && (
        <pre className="w-full p-2 overflow-x-auto bg-[var(--black)] text-[#9da598]">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

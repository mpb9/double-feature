import {
  BookOpen,
  Calendar,
  Database,
  GithubLogo,
  Hockey,
  LineVertical,
  Person,
  Shapes,
} from "@phosphor-icons/react";

export default function BottomBar() {
  const aCss =
    "cursor-pointer rounded-xl py-1 px-0.5 mx-2 transition-all hover:scale-[1.2] hover:hue-rotate-45 duration-200";

  return (
    <div className="static bottom-0 flex justify-center w-full">
      <div className="flex items-center justify-center px-8 pt-1.5 pb-1 transition-all duration-300 bg-[var(--black)] rounded-full rounded-b-none w-fit hover:scale-[1.2] hover:pb-2 hover:pt-2 hover:px-10">
        <a
          className={aCss}
          href="https://graphics-playground.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Shapes weight="fill" size={44} color="var(--l-purple)" />
        </a>
        <a
          className={aCss}
          href="https://dump-n-chase.com"
          target="_blank"
          rel="noreferrer"
        >
          <Hockey weight="fill" size={44} color="var(--l-purple)" />
        </a>
        <a
          className={aCss}
          href="https://michael-beebe.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Person weight="fill" size={44} color="var(--l-purple)" />
        </a>
        <LineVertical weight="thin" size={48} color="var(--gray)" />
        <a
          className={aCss}
          href="https://calendar.google.com/calendar/u/0/r"
          target="_blank"
          rel="noreferrer"
        >
          <Calendar weight="fill" size={44} color="var(--l-yellow)" />
        </a>
        <LineVertical weight="thin" size={48} color="var(--gray)" />
        <a
          className={aCss}
          href="https://github.com/mpb9/movies"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo weight="fill" size={44} color="var(--l-blue)" />
        </a>
        <a
          className={aCss}
          href="https://cloud.mongodb.com/v2/67af8d507b9f9616ac46af4d#/metrics/replicaSet/67af8e4b0353e200e123e915/explorer/movies"
          target="_blank"
          rel="noreferrer"
        >
          <Database weight="fill" size={44} color="var(--l-blue)" />
        </a>
        <a
          className={aCss}
          href="https://github.com/mpb9/movies/blob/main/README.md"
          target="_blank"
          rel="noreferrer"
        >
          <BookOpen weight="fill" size={44} color="var(--l-blue)" />
        </a>
      </div>
    </div>
  );
}

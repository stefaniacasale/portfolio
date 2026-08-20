import { Fragment } from "react";

/**
 * Renders copy from `content.ts` verbatim, wrapping the given phrases in the
 * italic serif accent voice. The source string is never edited, only split.
 */

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

type AccentTextProps = {
  text: string;
  accents: string[];
};

export default function AccentText({ text, accents }: AccentTextProps) {
  const ordered = [...accents].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${ordered.map(escapeRegExp).join("|")})`, "g");

  return (
    <>
      {text.split(pattern).map((part, index) =>
        ordered.includes(part) ? (
          <span
            key={index}
            className="font-serif text-[1.05em] font-normal italic tracking-normal"
          >
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}

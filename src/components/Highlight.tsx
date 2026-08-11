import { Fragment } from "react";
import type { CSSProperties } from "react";

/**
 * Renders plain text with line breaks (`\n`) and a highlighted segment
 * wrapped in **double asterisks**. Used for CMS-editable titles.
 */
export default function Highlight({
  text,
  highlightStyle,
}: {
  text: string;
  highlightStyle?: CSSProperties;
}) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.split("**").map((part, j) =>
            j % 2 === 1 ? (
              <span key={j} style={highlightStyle}>
                {part}
              </span>
            ) : (
              <Fragment key={j}>{part}</Fragment>
            )
          )}
        </Fragment>
      ))}
    </>
  );
}

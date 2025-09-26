import React from "react";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  asLink: true;
  href: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLink?: false;
};

type Props = AnchorProps | ButtonProps;

export default function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles =
    "bg-amber-400 text-slate-900 hover:bg-amber-300 focus-visible:ring-amber-500";

  if (props.asLink) {
    const {
      href,
      target,
      rel,
      className = "",
      children,
      ...anchorProps
    } = props;

    // Detectar enlaces externos o pseudo-externos
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    return (
      <a
        href={href}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={`${base} ${styles} ${className}`}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  // es un <button>
  const {
    className = "",
    children,
    ...buttonProps
  } = props;

  return (
    <button
      className={`${base} ${styles} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

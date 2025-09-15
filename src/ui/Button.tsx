import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLink?: boolean;
  href?: string;
};

export default function Button({ asLink, href, className = "", ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles =
    "bg-amber-400 text-slate-900 hover:bg-amber-300 focus-visible:ring-amber-500";

  if (asLink && href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {rest.children}
      </a>
    );
  }

  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}

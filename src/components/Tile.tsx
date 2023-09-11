import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ITile {
  color: string;
  title: string;
  p: string | ReactNode;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  focused?: boolean;
}

export default function Tile({
  color,
  title,
  p,
  Icon,
  focused = false,
  ...rest
}: ITile & ButtonHTMLAttributes<any>) {
  return (
    <button
      type="button"
      className={`Tile${focused ? ` focused bg-${color}` : ""}`}
      disabled={focused}
      {...rest}
    >
      <Icon width={35} overflow="visible" />
      <h2 style={{ color: `var(--${color})` }}>{title}</h2>
      <p>{p}</p>
    </button>
  );
}

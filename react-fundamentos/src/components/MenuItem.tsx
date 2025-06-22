import Link from "next/link";
import { JSX } from "react";

interface Props {
  label: string;
  url: string;
  icon: JSX.Element;
}
export default function MenuItem(props: Props) {
  return (
    <Link
      href={props.url}
      className={`
        flex px-4 py-2 items-center gap-2
        text-base w-full rounded-md 
        hover:bg-zinc-500
      `}>
      <span>{props.icon}</span>
      {props.label}
    </Link>
  );
}

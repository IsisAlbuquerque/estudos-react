import Link from "next/link";

interface Props {
  label: string;
  url: string;
}
export default function MenuItem(props: Props) {
  return (
    <Link
      href={props.url}
      className={`
        px-4 py-2
        text-xl w-full rounded-md
        bg-emerald-800
    `}>
      {props.label}
    </Link>
  );
}

import { JSX } from "react";
import MenuItem from "./MenuItem";

interface Props {
  menuItems: Array<{
    icon: JSX.Element;
    label: string;
    url: string;
  }>;
  className?: string;
}

export default function Menu(props: Props) {
  return (
    <div
      className={`
        flex flex-col w-72
        p-2 gap-2 justify-start items-start
        text-3xl
    `}>
      <span className="text-sm text-zinc-500 pl-3 pt-4">Estado</span>
      {props.menuItems.map((item) => (
        <MenuItem key={item.url} label={item.label} url={item.url} icon={item.icon} />
      ))}
      {/* <MenuItem label="Item #1" url="/fundamentos/pagina" />
      <MenuItem label="Item #2" url="/pagina" /> */}
    </div>
  );
}

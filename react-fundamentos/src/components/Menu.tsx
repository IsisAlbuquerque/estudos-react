import { JSX } from "react";
import MenuItem from "./MenuItem";
import { TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST } from "next/dist/shared/lib/constants";

interface MenuItem {
  topic: string;
  icon: JSX.Element;
  label: string;
  url: string;
}

interface Props {
  menuItems: MenuItem[];
  className?: string;
}

export default function Menu(props: Props) {
  const { menuItems } = props;
  // Group menu items by topic
  const groupedItems = menuItems.reduce<Record<string, MenuItem[]>>((acc, item) => {
    if (!acc[item.topic]) {
      acc[item.topic] = [];
    }
    acc[item.topic].push(item);
    return acc;
  }, {});
  return (
    <div
      className={`
        flex flex-col w-72
        p-2 gap-2 justify-start items-start
        text-3xl
    `}>
      {Object.entries(groupedItems).map(([topic, items]) => (
        <div key={topic}>
          <span className="text-sm text-zinc-500 pl-3 pt-4">{topic}</span>
          {items.map((item) => (
            <MenuItem key={item.url} label={item.label} url={item.url} icon={item.icon} />
          ))}
        </div>
      ))}
    </div>
  );
}

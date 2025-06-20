import MenuItem from "./MenuItem";

interface Props {
  menuItems: Array<{ label: string; url: string }>;
}

export default function Menu(props: Props) {
  return (
    <div
      className={`
        flex flex-col rounded-lg bg-emerald-700 
        p-2 gap-2 justify-start items-start
        text-3xl
    `}>
      {props.menuItems.map((item) => (
        <MenuItem key={item.url} label={item.label} url={item.url} />
      ))}
      {/* <MenuItem label="Item #1" url="/fundamentos/pagina" />
      <MenuItem label="Item #2" url="/pagina" /> */}
    </div>
  );
}

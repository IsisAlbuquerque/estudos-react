import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/pagina">
      <div className="flex items-center px-5 gap-1.5 h-16 font-black bg-purple-800">
        <span>
          <IconBrandReact size={26} stroke={1} />
        </span>
        <span className="text-2xl">React</span>
      </div>
    </Link>
  );
}

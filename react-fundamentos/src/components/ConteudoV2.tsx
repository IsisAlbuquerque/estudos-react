import { JSX } from "react";
/**
 *
 * @param {JSX.Element} children: para que um componente tenha um comp filho, é preciso que seja declarado assim
 * @returns
 */
export default function ConteudoV2({ children }: { children: JSX.Element }) {
  return (
    <div
      className={`
            flex flex-1 justify-center items-center bg-zinc-900
            text-3xl 
        `}>
      {children}
    </div>
  );
}

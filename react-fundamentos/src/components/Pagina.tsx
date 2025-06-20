import { JSX } from "react";
import Cabecalho from "./Cabecalho";
import ConteudoV2 from "./ConteudoV2";
import Menu from "./Menu";
import RodapeDesafio from "./RodapeDesafio";

interface Props {
  title: string;
  subtitle: string;
  leftFooterText: string;
  rightFooterText: string;
  children: JSX.Element;
}

export default function Pagina(props: Props) {
  const { title, subtitle, leftFooterText, rightFooterText } = props;
  const menuItems = [
    { label: "Item #1", url: "/fundamentos/pagina" },
    { label: "Item #2", url: "/pagina" },
  ];

  return (
    <div
      className={`
        flex flex-col h-screen
        p-4 gap-4
        bg-black
    `}>
      <Cabecalho titulo={title} subtitulo={subtitle} />
      <div
        className={`
          flex flex-1 gap-2
        `}>
        <Menu menuItems={menuItems} />
        <ConteudoV2>{props.children}</ConteudoV2>
      </div>
      <RodapeDesafio textoEsquerda={leftFooterText} textoDireita={rightFooterText} />
    </div>
  );
}

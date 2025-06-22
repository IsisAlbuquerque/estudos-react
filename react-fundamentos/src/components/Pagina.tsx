import { JSX } from "react";
import Cabecalho from "./Cabecalho";
import ConteudoV2 from "./ConteudoV2";
import RodapeDesafio from "./RodapeDesafio";
import AreaLateral from "./AreaLateral";

interface Props {
  title: string;
  subtitle: string;
  leftFooterText?: string;
  rightFooterText?: string;
  headerClassName?: string;
  children: JSX.Element;
}

export default function Pagina(props: Props) {
  const { title, subtitle, leftFooterText, rightFooterText } = props;

  return (
    <div
      className={`
        flex h-screen
        bg-black
    `}>
      <AreaLateral />
      <div
        className={`
          flex flex-col flex-1
          `}>
        <Cabecalho titulo={title} subtitulo={subtitle} className="bg-zinc-800" />
        <ConteudoV2>{props.children}</ConteudoV2>
        <RodapeDesafio textoEsquerda={leftFooterText ?? "Texto da esquerda 🐙"} textoDireita={rightFooterText ?? "👌 Texto da direita"} />
      </div>
    </div>
  );
}

interface Props {
  textoDireita: string;
  textoEsquerda: string;
}
export default function Rodape(props: Props) {
  return (
    <div
      className={`
          flex items-center justify-between p-3
          h-16 text-base bg-zinc-900
          border-t border-zinc-800 text-zinc-500
      `}>
      <span>{props.textoEsquerda}</span> <span>{props.textoDireita}</span>
    </div>
  );
}

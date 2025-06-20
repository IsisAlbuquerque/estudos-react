interface Props {
  textoDireita: string;
  textoEsquerda: string;
}
export default function Rodape(props: Props) {
  return (
    <div
      className={`
          flex items-center justify-between p-3
          h-36 rounded-lg text-2xl
           bg-teal-300
      `}>
      <span>{props.textoEsquerda}</span> <span>{props.textoDireita}</span>
    </div>
  );
}

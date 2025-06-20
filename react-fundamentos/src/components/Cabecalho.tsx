interface Props {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: Props) {
  return (
    <div
      className={`
                flex flex-col h-36 items-center justify-center
                bg-teal-800  rounded-lg
            `}>
      <h1 className="text-3xl font-black">{props.titulo}</h1>
      <h2 className="text-2xl">{props.subtitulo}</h2>
    </div>
  );
}

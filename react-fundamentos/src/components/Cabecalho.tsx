interface Props {
  titulo: string;
  subtitulo: string;
  className?: string;
}

export default function Cabecalho(props: Props) {
  return (
    <div
      className={`flex flex-col h-16 justify-center px-5 border-b border-zinc-700 
                 ${props.className ?? ""}`}>
      <h1 className="text-2xl font-black">{props.titulo}</h1>
      <h2 className="text-sm text-zinc-400">{props.subtitulo}</h2>
    </div>
  );
}

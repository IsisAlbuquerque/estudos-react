interface ValorProps {
  texto: string;
}

export default function Valor(props: ValorProps) {
  return <div className="text-8xl font-black p-4">{props.texto}</div>;
}

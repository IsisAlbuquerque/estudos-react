interface BotoesProps {
  alterarNome(nome: string): void;
}

export default function Botoes(props: BotoesProps) {
  return (
    <div className="flex gap-5">
      <button onClick={() => props.alterarNome("Abel")} className="botao">
        Abel
      </button>
      <button onClick={() => props.alterarNome("Lark")} className="botao">
        Lark
      </button>
      <button onClick={() => props.alterarNome("Lior")} className="botao">
        Lior
      </button>
    </div>
  );
}

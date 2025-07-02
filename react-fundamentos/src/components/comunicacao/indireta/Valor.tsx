import { useState } from "react";
import Botoes from "./Botoes";

export default function Valor() {
  const [nome, setNome] = useState("");

  const alterar = (nome: string) => {
    setNome(nome);
  };
  return (
    <div className="flex flex-col gap-5">
      <span className="text-8xl font-black p-4">{nome}</span>
      <Botoes alterarNome={alterar} />
    </div>
  );
}

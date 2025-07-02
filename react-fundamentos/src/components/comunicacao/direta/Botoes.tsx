import { useState } from "react";
import Valor from "./Valor";

export default function Botoes() {
  const [nome, setNome] = useState("");
  return (
    <div
      className={`
        flex flex-col justify-center items-center
        bg-zinc-700 rounded-md
        p-4 m-2
        `}>
      <Valor texto={nome} />
      <div className="flex gap-5">
        <button className="botao" onClick={() => setNome("Abel")}>
          Abel
        </button>
        <button className="botao" onClick={() => setNome("Lark")}>
          Lark
        </button>
        <button className="botao" onClick={() => setNome("Lior")}>
          Lior
        </button>
      </div>
    </div>
  );
}

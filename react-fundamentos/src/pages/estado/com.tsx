import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaComEstado() {
  // [0] - valor inicial, [1] - funcao que atualiza o valor inicial
  const [numero, setNumero] = useState(0); //estado inicial é 0!
  console.log(numero, setNumero);

  function incrementar() {
    setNumero(numero + 1);
  }
  return (
    <Pagina title="Fundamentos" subtitle="Com Estado">
      <div className="flex flex-col">
        <div>
          <span>Valor:</span>
          <span>{numero}</span>
        </div>
        <button className="bg-pink-400 p-2 rounded-md" onClick={incrementar}>
          Incrementar
        </button>
      </div>
    </Pagina>
  );
}

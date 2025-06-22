import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function CampoTexto() {
  const [valor, setValor] = useState("");

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValor(e.target.value);
  };
  return (
    <Pagina title="Fundamentos" subtitle="Campo de Texto">
      <div>
        <input className="entrada-txt" type="text" value={valor} onChange={changeValue} />
      </div>
    </Pagina>
  );
}

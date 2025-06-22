import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";

export default function Contador() {
  const title = "Exercício";
  const subtitle = "Contador";
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);

  function handleIncrement(e: React.ChangeEvent<HTMLInputElement>) {
    setDelta(e.currentTarget.valueAsNumber);
  }

  function deltaar() {
    setCount(count + delta);
  }

  function decrementar() {
    if (count - 1 < 0) return;
    else {
      setCount(count - delta);
    }
  }
  return (
    <Pagina title={title} subtitle={subtitle}>
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
        <span className="text-7xl font-black">{count}</span>
        <span className="flex text-base">
          Incrementar por... <input className="text-base size-fit" type="number" value={delta} onChange={handleIncrement} />
        </span>
        <div className="flex gap-4">
          <button onClick={decrementar} className="p-4 bg-red-600 rounded-full">
            <IconMinus size={30} />
          </button>
          <button onClick={deltaar} className="p-4 bg-green-600 rounded-full">
            <IconPlus size={30} />
          </button>
        </div>
      </div>
    </Pagina>
  );
}

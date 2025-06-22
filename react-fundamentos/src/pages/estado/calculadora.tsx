import Pagina from "@/components/Pagina";
import { IconDivide, IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function Calculadora() {
  const operacoes = [
    { label: <IconPlus size={30} />, operacao: "sum", id: "somar" },
    { label: <IconMinus size={30} />, operacao: "subtract", id: "subtrair" },
    { label: <IconX size={30} />, operacao: "multiply", id: "multiplicar" },
    { label: <IconDivide size={30} />, operacao: "divide", id: "dividir" },
  ];
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [operation, setOperation] = useState("sum");
  const [resultado, setResultado] = useState(0);

  const changeN1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setN1(e.target.valueAsNumber);
  };
  const changeN2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setN2(e.target.valueAsNumber);
  };

  const handleOperation = (op: string) => {
    setOperation(op);
  };
  const calcular = () => {
    switch (operation) {
      case "sum":
        setResultado(n1 + n2);
        break;
      case "subtract":
        setResultado(n1 - n2);
        break;
      case "multiply":
        setResultado(n1 * n2);
        break;
      case "divide":
        setResultado(n1 / n2);
        break;
    }
  };
  return (
    <Pagina title="Desafio" subtitle="Calculadora">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-6">
          <input className="entrada-txt" id="n1" type="number" value={n1} onChange={changeN1} />
          <input className="entrada-txt" id="n2" type="number" value={n2} onChange={changeN2} />
        </div>

        {/* Iterar pelas operações e criar seus respectivos botões */}
        <div className="flex gap-2">
          {operacoes.map((item) => (
            <button
              className={`
                
                ${operation === item.operacao ? "botao-operacao-pressed" : "botao-operacao"}
            `}
              key={item.id}
              onClick={() => handleOperation(item.operacao)}>
              {item.label}
            </button>
          ))}
        </div>

        <button className="botao" onClick={calcular}>
          Calcular
        </button>
        <span>Resultado: {resultado}</span>
      </div>
    </Pagina>
  );
}

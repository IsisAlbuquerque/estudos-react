import Pagina from "@/components/Pagina";

export default function PaginaSemEstado() {
  let numero = 0;
  function incrementar() {
    numero += 1;
    console.log(numero);
  }
  return (
    <Pagina title="Fundamentos" subtitle="Sem Estado">
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

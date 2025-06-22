import Pagina from "@/components/Pagina";
export default function TestePagina() {
  const title = "Fundamentos";
  const subtitle = `Página dentro de um diretório "pages"`;

  function executar() {
    console.log("O botão foi pressionado!");
  }
  return (
    <Pagina title={title} subtitle={subtitle}>
      <button className="botao" onClick={executar}>
        Botão de Teste
      </button>
    </Pagina>
  );
}

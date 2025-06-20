import "../app/globals.css";
import Pagina from "@/components/Pagina";
export default function TestePagina() {
  const title = "Fundamentos";
  const subtitle = `Página dentro de um diretório "pages"`;
  const textoEsquerda = "Texto da esquerda 😊";
  const textoDireita = "👌 Texto da direita";
  return (
    <Pagina title={title} subtitle={subtitle} leftFooterText={textoEsquerda} rightFooterText={textoDireita}>
      <button
        className={`
          bg-pink-400 p-2 rounded-md
      `}>
        Botão de Teste
      </button>
    </Pagina>
  );
}

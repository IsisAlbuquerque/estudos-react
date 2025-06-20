import Pagina from "@/components/Pagina";

export default function Page() {
  const textoEsquerda = "Texto da esquerda 🐙";
  const textoDireita = "👌 Texto da direita";

  return (
    <Pagina title="Fundamentos" subtitle="Componentes" leftFooterText={textoEsquerda} rightFooterText={textoDireita}>
      <p>Text</p>
    </Pagina>
  );
}

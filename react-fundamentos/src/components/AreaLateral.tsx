import { IconArrowDownSquare, IconArrowUpSquare, IconBraces, IconCalculator, IconCode, IconForms, IconNumbers } from "@tabler/icons-react";
import Logo from "./Logo";
import Menu from "./Menu";

export default function AreaLateral() {
  const menuItems = [
    { topic: "Estado", label: "Componente sem Estado", url: "/estado/sem", icon: <IconBraces /> },
    { topic: "Estado", label: "Componente com Estado", url: "/estado/com", icon: <IconCode /> },
    { topic: "Estado", label: "Contador", url: "/estado/contador", icon: <IconNumbers /> },
    { topic: "Estado", label: "Campo de Texto", url: "/estado/campoTexto", icon: <IconForms /> },
    { topic: "Estado", label: "Calculadora", url: "/estado/calculadora", icon: <IconCalculator /> },
    { topic: "Comunicação", label: "Comunicação Direta", url: "/comunicacao/direta", icon: <IconArrowDownSquare /> },
    { topic: "Comunicação", label: "Comunicação Indireta", url: "/comunicacao/indireta", icon: <IconArrowUpSquare /> },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Logo />
      <Menu menuItems={menuItems} />
    </div>
  );
}

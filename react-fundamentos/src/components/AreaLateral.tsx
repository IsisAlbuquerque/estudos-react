import { IconCalculator, IconCode, IconForms, IconNumbers } from "@tabler/icons-react";
import Logo from "./Logo";
import Menu from "./Menu";

export default function AreaLateral() {
  const menuItems = [
    { label: "Componente sem Estado", url: "/estado/sem", icon: <IconCode /> },
    { label: "Componente com Estado", url: "/estado/com", icon: <IconCode /> },
    { label: "Contador", url: "/estado/contador", icon: <IconNumbers /> },
    { label: "Campo de Texto", url: "/estado/campoTexto", icon: <IconForms /> },
    { label: "Calculadora", url: "/estado/calculadora", icon: <IconCalculator /> },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Logo />
      <Menu menuItems={menuItems} />
    </div>
  );
}

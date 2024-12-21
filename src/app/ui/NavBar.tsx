const items = [
  {
    titulo: "PLs",
    link: "/projetos"
  },
  {
    titulo: "Parlamentares",
    link: "/parlamentares"
  },
  {
    titulo: "Direitos",
    link: "/direitos"
  },
  {
    titulo: "Sobre",
    link: "/sobre"
  },
  {
    titulo: "Desenvolvedores",
    link: "/desenvolvedores"
  }
];

import Link from "next/link";

const navBar: React.FC = () => {
  return (
    <div className="w-11/12 h-28 flex flex-col items-center">
      <nav className="w-11/12 flex flex-col">
        <div className="flex gap-[12.5rem] items-center justify-between">
          <Link href={"/"}>
            <h1 className="text-[3.125rem] text-white logo" />
          </Link>
          <ul className="flex text-3xl font-normal text-white gap-[3.125rem] font">
            {items.map(item => {
              return (
                <li key={item.titulo}>
                  <Link href={item.link}>
                    {item.titulo}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <span className="border-b-[1px] shadow-bottom shadow-white w-full" />
    </div>
  );
};
export default navBar;

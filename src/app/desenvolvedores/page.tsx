import CardBio from "@/ui/cards/CardBio";
import { infoDevsMock } from "@/lib/mock/mock_devs";


const desenvolvedores: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full gap-24 px-11 py-16 items-center">
      <section className="flex flex-col gap-20">
        {infoDevsMock.map(item => {
          return <CardBio key={item.nome} desenvolvedor={item} />;
        })}
      </section>
    </div>
  );
};
export default desenvolvedores;

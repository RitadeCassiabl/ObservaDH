import CardBio from "@/ui/cards/CardBio";
import { infoDevsMock } from "@/lib/mock/mock_devs";
import { MainLayout } from "@/ui/layouts/MainLayout";

const desenvolvedores: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col h-full w-full gap-24 px-11 py-16 items-center">
        <section className="flex flex-col gap-20">
          {infoDevsMock.map((item) => {
            return <CardBio key={item.nome} desenvolvedor={item} />;
          })}
        </section>
      </div>
    </MainLayout>
  );
};
export default desenvolvedores;

import { projetosMock } from "@/lib/mock/mock_projetos";
import CardComponte from "@/ui/cards/CardComponte";

const page: React.FC = () => {
  return (
    <div className="h-[625rem] flex justify-center">
      <CardComponte
        parlamentar={projetosMock[0].parlamentares[0]}
        propostas={14}
      />
    </div>
  );
};
export default page;

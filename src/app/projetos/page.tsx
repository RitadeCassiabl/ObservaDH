import CardApresentacao from "../../ui/cards/CardApresentacao";
import { apresentacao } from "../../lib/mock/mock_projetos";

const projetos: React.FC = () => {
    return (
        <div className="flex h-full w-full flex-col gap-[4.25rem] py-[4.375rem] items-center">
            <CardApresentacao subtitulo={apresentacao.subtitulo} titulo={apresentacao.titulo} cor={apresentacao.cor}>
                {apresentacao.texto}
            </CardApresentacao>
            
        </div>
    );
}
export default projetos;
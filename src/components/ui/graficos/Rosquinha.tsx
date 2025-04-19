"use client";
import { Pie, PieChart } from "recharts";
import { Card, CardContent } from "@/components/ui-shacnui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui-shacnui/chart";
import { DadosGraficoRosquinha } from "@/types/graficos/rosquinha";

const chartConfig = {
  pl: {
    label: "PL's",
  },
  saude: {
    label: "Saúde",
    color: "#FF977A",
  },
  LIEG: {
    label: "LIEG",
    color: "#FDFF78",
  },
  LIB: {
    label: "LIB",
    color: "#F693F9",
  },
  Educacao: {
    label: "Educação",
    color: "#87D9FF",
  },
} satisfies ChartConfig;

interface graficoRosquinhaProps {
  dados: DadosGraficoRosquinha[];
}

const GraficoRosquinha: React.FC<graficoRosquinhaProps> = ({ dados }) => {
  return (
    <Card className="flex flex-col bg-transparent border-transparent">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-[27.5rem] h-[27.5rem]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="min-w-36" />}
            />
            <Pie data={dados} dataKey="pl" nameKey="tema" innerRadius={60} />
            <ChartLegend
              className="flex justify-between text-white text-base"
              content={<ChartLegendContent />}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default GraficoRosquinha;

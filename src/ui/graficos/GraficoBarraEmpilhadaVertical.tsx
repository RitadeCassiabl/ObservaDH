"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import React from "react";
import { DadosGraficoBarraEmpilhadaVertical } from "@/lib/types/graficos";

const chartConfig = {
  branco: {
    label: "Branco",
    color: "#93F996"
  },
  preto: {
    label: "Preto",
    color: "#F693F9"
  },
  pardo: {
    label: "Pardo",
    color: "#87D9FF"
  },
  amarelo: {
    label: "Amarelo",
    color: "#4568BE"
  },
  indigena: {
    label: "Indígena",
    color: "#D974FD"
  },
  indefinido: {
    label: "Indefinido",
    color: "#FF977A"
  }
} satisfies ChartConfig;


interface GraficoBarraEmpilhadaVerticalProps {
  dados: DadosGraficoBarraEmpilhadaVertical[];
}

const GraficoBarraEmpilhadaVertical: React.FC<
  GraficoBarraEmpilhadaVerticalProps
> = ({ dados }) => {
  return (
    <Card className="flex flex-col py-12 px-8  bg-[#121A2B] ">
      <CardContent>
        <ChartContainer config={chartConfig} className="w-[54rem] h-[29.625rem]">
          <BarChart
            accessibilityLayer 
            data={dados}
            margin={{bottom: 20, top: 20, left: 20, right: 20}}
            >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="religiao"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis 
              axisLine={true}
              tickLine={true}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="min-w-56" />}
            />
            <ChartLegend content={<ChartLegendContent className="text-white text-base"/>} />
            <Bar
              dataKey="branco"
              stackId="a"
              fill="#93F996"
              radius={[0, 0, 0, 0]}
              barSize={50}
              
            />
            <Bar
              dataKey="preto"
              stackId="a"
              fill="#F693F9"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="pardo"
              stackId="a"
              fill="#87D9FF"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="amarelo"
              stackId="a"
              fill="#4568BE"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="indigena"
              stackId="a"
              fill="#D974FD"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="indefinido"
              stackId="a"
              fill="#FF977A"
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default GraficoBarraEmpilhadaVertical;

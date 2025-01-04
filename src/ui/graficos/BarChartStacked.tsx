"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Novo formato de chartData baseado nos projetos de lei por ano
interface ChartData {
  year: string
  linguagensNeutra: number
  atletasTrans: number
  banheirosMultigenero: number
  propagandaLGBT: number
}

const chartConfig = {
  linguagensNeutra: {
    label: "Linguagem Neutra",
    color: "#93F996",
  },
  atletasTrans: {
    label: "Atletas Trans",
    color: "#F693F9",
  },
  banheirosMultigenero: {
    label: "Banheiros Multigênero",
    color: "#87D9FF",
  },
  propagandaLGBT: {
    label: "Propaganda LGBT",
    color: "#4568BE",
  },
} satisfies ChartConfig

interface BarChartStackedProps {
  data: ChartData[]
}


const BarChartStacked: React.FC<BarChartStackedProps> = ({ data: chartData }) => {
  return (
    <Card className="flex flex-col py-12 px-8 w-[53.125rem] h-[30.75] bg-[#121A2B] ">
      <CardContent >
        <ChartContainer config={chartConfig} className="flex justify-center items-center w-full h-full">
          <BarChart
          className="flex justify-center"
            data={chartData}
            layout="vertical"
            width={100}
            height={300}
            margin={{bottom: 20, top: 20, left: 20, right: 20}}
      
          >
            <CartesianGrid horizontal={false} />
            <XAxis type="number" tickLine={false} axisLine={false} />
            <YAxis
              type="category"
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent  className="min-w-56" />} />
            <ChartLegend content={<ChartLegendContent className="text-white text-sm" />} />
            <Bar
              dataKey="linguagensNeutra"
              stackId="a"
              fill={chartConfig.linguagensNeutra.color}
              radius={[0, 0, 0, 0]}
              isAnimationActive={false}
            />
            <Bar
              dataKey="atletasTrans"
              stackId="a"
              fill={chartConfig.atletasTrans.color}
              radius={[0, 0, 0, 0]}
              isAnimationActive={false}
            />
            <Bar
              dataKey="banheirosMultigenero"
              stackId="a"
              fill={chartConfig.banheirosMultigenero.color}
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="propagandaLGBT"
              stackId="a"
              fill={chartConfig.propagandaLGBT.color}
              radius={[0, 5, 5, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}


export default BarChartStacked;
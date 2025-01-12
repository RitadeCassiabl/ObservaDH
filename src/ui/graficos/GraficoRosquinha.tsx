"use client"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"
const chartData = [
  { browser: "saude", visitors: 275, fill: "var(--color-saude)" },
  { browser: "LIEG", visitors: 200, fill: "var(--color-LIEG)" },
  { browser: "LIB", visitors: 187, fill: "var(--color-LIB)" },
  { browser: "Educacao", visitors: 173, fill: "var(--color-Educacao)" },

]

const chartConfig = {
  visitors: {
    label: "Visitors",
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

} satisfies ChartConfig

export function GraficoRosquinha() {
  return (
    <Card className="flex flex-col bg-transparent border-transparent w-[540px]">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[430px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          <ChartLegend content={<ChartLegendContent className="text-white text-base"/>} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

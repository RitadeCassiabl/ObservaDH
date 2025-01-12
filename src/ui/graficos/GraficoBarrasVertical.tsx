"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "Anti_Mino", visitors: 65, fill: "#F693F9" },
  { browser: "COAM", visitors: 65, fill: "#FDFF78" },
  { browser: "DBR", visitors: 95, fill: "#D974FD" },
  { browser: "PMGF", visitors: 110, fill: "#93F996" },
  { browser: "HPS", visitors: 135, fill: "#87D9FF" },
  { browser: "Anti_Socio", visitors: 145, fill: "#FF977A" },
  { browser: "Imuta_Socio", visitors: 150, fill: "#E1EAFF" },
]

const chartConfig = {
  visitors: {
    label: "Pls",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const GraficoBarrasVertical: React.FC = ()=> {
  return (
    <Card className="w-[850px] h-[450px] bg-[#122144]">
      <CardContent className="h-full w-full">
        <ChartContainer config={chartConfig} className="py-12 px-10">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <YAxis allowDataOverflow/>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="visitors"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}


export default GraficoBarrasVertical;   
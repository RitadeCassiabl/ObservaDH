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
  { pauta: "Anti_Mino", pls: 65, fill: "#F693F9" },
  { pauta: "COAM", pls: 65, fill: "#FDFF78" },
  { pauta: "DBR", pls: 95, fill: "#D974FD" },
  { pauta: "PMGF", pls: 110, fill: "#93F996" },
  { pauta: "HPS", pls: 135, fill: "#87D9FF" },
  { pauta: "Anti_Socio", pls: 145, fill: "#FF977A" },
  { pauta: "Imuta_Socio", pls: 150, fill: "#E1EAFF" },
]

const chartConfig = {
    pauta: {
        label: "Pls",
      },
      anti_mino: {
        label: "Anti_Mino",
        color: "#F693F9",
      },
      coam: {
        label: "COAM",
        color: "#FDFF78",
      },
      dbr: {
        label: "DBR",
        color: "#D974FD",
      },
      pmgf: {
        label: "PMGF",
        color: "#93F996",
      },
      hps: {
        label: "HPS",
        color: "#87D9FF",
      },
      anti_socio: {
        label: "Anti_Socio",
        color: "#FF977A",
      },
      imuta_socio: {
        label: "Imuta_Socio",
        color: "#E1EAFF",
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
              dataKey="pauta"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis allowDataOverflow/>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="min-w-36" />}
            />
            <Bar
              dataKey="pls"
              activeIndex={2}
              barSize={35}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}


export default GraficoBarrasVertical;   
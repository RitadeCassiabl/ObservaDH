"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


interface ChartData {
  year: string;
  projetos: number;
}

const chartConfig = {
  projetos: {
    label: "projetos",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig;

interface LineChartDotsProps {
  data: ChartData[]; 
}

export function LineChartDots({ data }: LineChartDotsProps) {
  return (
    <Card className="h-[29rem] w-[52rem]  bg-[#122144]">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 10,
              right: 10,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
            padding={{ left: 10, right: 10 }}
            className=""
            allowDataOverflow={false}
              dataKey="year"
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="bg-[#121A2B]" />}
            />
            <Line
              dataKey="projetos"
              type="natural"
              stroke="#F693F9"
              strokeWidth={1.8}
              dot={{
                fill: "#F693F9",
              }}
              activeDot={{
                r: 5,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardDescription></CardDescription>
    </Card>
  );
}

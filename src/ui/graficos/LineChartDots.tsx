"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

interface ChartData {
  year: string;
  projetos: number;
}

const chartConfig = {
  projetos: {
    label: "projetos",
    color: "hsl(var(--chart-1))"
  }
} satisfies ChartConfig;

interface LineChartDotsProps {
  data: ChartData[];
}

export function LineChartDots({ data }: LineChartDotsProps) {
  return (
    <Card className="h-[29rem] w-[52rem] bg-[#122144]">
      <CardContent>
        <ChartContainer config={chartConfig} className="p-11">
          <LineChart
            className="w-full h-full p-0 flex justify-between items-center text-white"
            accessibilityLayer
            data={data}
            margin={{
              left: 0,
              top: 20,
              right: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid vertical={false} />
            
            <YAxis
              dataKey={chartConfig.projetos.label}
              allowDataOverflow={false}
              tickMargin={5}
            />

            <XAxis
              allowDataOverflow={false}
              dataKey="year"
              tickLine={true}
              axisLine={true}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className={`min-w-32`} />}
            />

            <Line
              dataKey="projetos"
              type="natural"
              stroke="#F693F9"
              strokeWidth={1.8}
              dot={{
                fill: "#F693F9"
              }}
              activeDot={{
                r: 5,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardDescription />
    </Card>
  );
}

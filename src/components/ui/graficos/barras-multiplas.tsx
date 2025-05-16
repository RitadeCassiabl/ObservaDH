"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui-shacnui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui-shacnui/chart";

import { DadosGraficoBarrasMultiplas } from "@/domain/graficos/barras-multiplas";

interface GraficoBarraMultiplasProps {
	dados: DadosGraficoBarrasMultiplas[];
}

const chartConfig = {
	homens: {
		label: "Homens",
		color: "#F693F9",
	},
	mulheres: {
		label: "Mulheres",
		color: "#93F996",
	},
} satisfies ChartConfig;

const GraficoBarraMultiplas: React.FC<GraficoBarraMultiplasProps> = ({
	dados,
}) => {
	return (
		<Card className="bg-[#121A2B] p-12">
			<CardContent className="w-full h-full">
				<ChartContainer config={chartConfig} className="w-[58rem] h-[28.25rem]">
					<BarChart accessibilityLayer data={dados}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="ideologia"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							className="text-xl"
						/>
						<YAxis AxisComp tickLine className="text-xl" tickMargin={8} />
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent className="min-w-56" />}
						/>
						<ChartLegend
							content={<ChartLegendContent className="text-white text-base" />}
						/>
						<Bar dataKey="homens" fill="#F693F9" radius={4} />
						<Bar dataKey="mulheres" fill="#93F996" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};

export default GraficoBarraMultiplas;

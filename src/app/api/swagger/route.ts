import { NextResponse } from "next/server";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "@/lib/swaggerOptions";

export function GET() {
	const spec = swaggerJSDoc(swaggerOptions);
	return NextResponse.json(spec);
}

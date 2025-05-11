import { NextApiRequest, NextApiResponse } from "next";
import swaggerJSDoc from "swagger-jsdoc";

import swaggerOptions from "@/lib/swaggerOptions";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const spec = swaggerJSDoc(swaggerOptions);
	res.status(200).json(spec);
}

import { redirect } from "next/navigation";

import { auth } from "@/auth";

const page: React.FC = async () => {
	const session = await auth();
	if (!session) redirect("/login");

	return <div>{/*Página inicial do cadastro do dados*/}</div>;
};

export default page;

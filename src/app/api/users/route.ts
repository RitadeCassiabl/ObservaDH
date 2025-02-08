import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await prisma.user.create({
      data: { name: body.name, email: body.email }
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar usuário" + error },
      { status: 500 }
    );
  }
}

// src/app/api/users/create/route.ts
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { email, role } = body;

    const existing = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (existing) {
      return NextResponse.json({ message: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        role,
        clerkId: userId,
      },
    });

    return NextResponse.json({ message: "User created", user: newUser });
  } catch (error) {
    console.error("[USER_CREATE]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
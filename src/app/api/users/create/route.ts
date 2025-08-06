import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Received body:", body);
  const { email, role, clerkId } = body; // Expect clerkId from request

  if (!clerkId) {
    return NextResponse.json({ message: "clerkId is required" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    return NextResponse.json({ message: "User already exists" });
  }

  const newUser = await prisma.user.create({
    data: {
      email,
      role,
      clerkId, // Add clerkId here
    },
  });

  return NextResponse.json({ message: "User created", user: newUser });
}
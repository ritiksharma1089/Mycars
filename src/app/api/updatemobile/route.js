// app/api/update-mobile/route.js
import { getServerSession } from "next-auth";

import { NextResponse } from "next/server";
import prisma from "@/app/utils/connects";
import { Authoptions } from "@/app/utils/Authoptions";


export async function POST(req) {
  const session = await getServerSession(Authoptions);
  
  if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const { mobile } = await req.json();
    console.log("api called for number change ...........................................")

  if (!mobile ) {
    return NextResponse.json({ error: "Invalid mobile number" }, { status: 400 });
  }

  try {
    const updatedUser = await prisma.User.update({
      where: { email: session.user.email },
      data: { mobile:parseInt(mobile) },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

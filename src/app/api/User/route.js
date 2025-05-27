
import prisma from "@/app/utils/connects";
import { NextResponse } from "next/server";

export const GET = async (req) => {






  
  
  try {
    console.log("call user  api,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")

    const Allusers = await prisma.User.findMany({});

    if(Allusers.length === 0){
       return new NextResponse(
        JSON.stringify({ message: "no all data present" }), { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(Allusers), {status:200})
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

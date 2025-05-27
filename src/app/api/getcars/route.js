
import prisma from "@/app/utils/connects";
import { NextResponse } from "next/server";

export const GET = async (req) => {


  try {
    console.log("call getcar product api,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")

    const Allcars = await prisma.post.findMany({
      where: {
        public: true
      }
    });

    if(Allcars.length === 0){
       return new NextResponse(
        JSON.stringify({ message: "no all data present" }), { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(Allcars), {status:200})
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {



  try {
    console.log("call getcar product api,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")

    const Allcars = await prisma.post.findMany({});

    if(Allcars.length === 0){
       return new NextResponse(
        JSON.stringify({ message: "no all data present" }), { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(Allcars), {status:200})
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

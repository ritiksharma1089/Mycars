

import prisma from "@/app/utils/connects";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
  
  // const carid = searchParams.get("carid");

  const {slugs}= await params;
  console.log(slugs, "this is carid to find");
  const carid = slugs;
  






  
  
  try {
  
    
    console.log("call getcar api,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")


    const Allcars = await prisma.post.findMany({
      where:{
        id:carid
      }
    });
    // console.log(Allcars, "this is alll carsssssss");

    if(!Allcars){
       return new NextResponse(
      JSON.stringify({ message: "koi car ni h!" }, { status: 400 })
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










// CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
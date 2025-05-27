import { getAuthsession } from "@/app/utils/Authoptions";
import prisma from "@/app/utils/connects";
import { NextResponse } from "next/server";









export const GET = async (req) => {






  
  
  try {

    const Allorder = await prisma.Order.findMany({});

    if(Allorder.length === 0){
       return new NextResponse(
        JSON.stringify({ message: "no all data present" }), { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(Allorder), {status:200})
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};


export const POST = async (req) => {
   
  const session = await getAuthsession()

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    console.log(body);
    const post = await prisma.Order.create({
      data: { 
        name :body.name,
        email:body.email,
        contact : parseInt(body.contact),
        Budget:parseInt(body.Budget),
        car:body.car

      },
    });
    // console.log(post);
console.log("order added sucessfulyy");
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
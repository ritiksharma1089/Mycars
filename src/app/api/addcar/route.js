// import { getAuthSession } from "@/utils/auth";
// import prisma from "@/utils/connect";
import { getAuthsession } from "@/app/utils/Authoptions";
import prisma from "@/app/utils/connects";
import { NextResponse } from "next/server";


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
    const post = await prisma.post.create({
      data: { 
        titile:body.title,
        desc:body.desc,
        img:body.img,
        type:body.type,
        othertype:body.othertype,
        userEmail:body.userEmail,
        price:parseInt(body.price),

        company:body.company,
        Reg_year:parseInt(body.Reg_year),
        driven:parseInt(body.driven),
        ownership:parseInt(body.ownership),
        spare_key: false,
        Insurance:body.Insurance,
         Reg_num:body.Reg_num,
        //  Dealer_choice:body.Dealer_choice,
         model:parseInt(body.model)

      },
    });
    // console.log(post);
console.log("data added sucessfulyy");
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const PUT = async (req) => {
   
  const session = await getAuthsession()

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    console.log(body);
    const post = await prisma.post.update({

      where: {
        id: body.id // Make sure to pass the unique post id in the request body
      },
      data: { 
      titile: body.title,
      desc: body.desc,
      img: body.img,
      type: body.type,
      othertype: body.othertype,
      
      price: parseInt(body.price),

      company: body.company,
      Reg_year: parseInt(body.Reg_year),
      driven: parseInt(body.driven),
      ownership: parseInt(body.ownership),
      spare_key: body.spare_key === "true",
      Insurance: body.Insurance,
      Reg_num: body.Reg_num,
      Dealer_choice: parseInt(body.Dealer_choice),
      model: parseInt(body.model),

      public: body.public === "true",
      Emi: parseInt(body.Emi),
      othercharges: parseInt(body.othercharges)
      },
    });
    // console.log(post);
console.log("data edited sucessfulyy");
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const DELETE = async (req) => {
   
  const session = await getAuthsession()

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    console.log(body,"this is id of delte car");
    const id = body;
    const post = await prisma.post.delete({
      where: { id: id }
    });
    // console.log(post);
console.log("data delted sucessfulyy");
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong during delteion!" }, { status: 500 })
    );
  }
};
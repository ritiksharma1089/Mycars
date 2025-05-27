
import prisma from "@/app/utils/connects";
import { NextResponse } from "next/server";

export const GET = async (req) => {




 const { searchParams } = new URL(req.url);
const price = searchParams.get('price');   // "asc" or "desc"
const model = searchParams.get('model');   // "asc" or "desc"
const driven = searchParams.get('Driven'); // "asc" or "desc"

let orderBy = [];

if (price) {
  orderBy.push({ price: price });
}

if (model) {
  orderBy.push({ model: model });
}

if (driven) {
  orderBy.push({ driven: driven });
}


  try {
    console.log("call getcar api,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
const cars = await prisma.post.findMany({
  where:{public:true},
  orderBy: orderBy.length > 0 ? orderBy : undefined,
});

    if(cars.length === 0){
       return new NextResponse(
        JSON.stringify({ message: "no all data present" }), { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(cars), {status:200})
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

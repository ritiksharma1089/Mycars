import { NextResponse } from "next/server";

export const POST = async (request) => {


    try{
console.log("its login page get request");



  const body = await request.json(); // Parse the incoming JSON
    const { email, password } = body;

   


return new NextResponse(JSON.stringify("hello", {status:200}));
    }
    catch(err){
        console.log(err);
        return new NextResponse (
            JSON.stringify({message:"something went wrong in login"})
        )
    }
}
// import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

import GoogleProvider from "next-auth/providers/google";
import prisma from "./connects";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { getServerSession } from "next-auth";
// import { prisma } from "@/prisma"

import EmailProvider from "next-auth/providers/email";



console.log(process.env.GOOGLE_ID);
console.log(process.env.DATABASE_URL,"thsi is the database url");

console.log( process.env.EMAIL_SERVER)

export const Authoptions={

    adapter :PrismaAdapter(prisma),
     providers:[

        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
        EmailProvider({
            
              server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM
        }),
    ],

    callbacks: {
    async session({ session, user }) {
      // Attach additional fields from the user model to the session
      if (session.user) {
        session.user.id = user.id;
        session.user.mobile = user.mobile;
        session.user.isAdmin = user.isAdmin;
      }
      return session;
    },
  },
    
}

export const getAuthsession = ()=> getServerSession(Authoptions);
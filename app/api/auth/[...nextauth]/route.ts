import prisma from "@/lib/prisma";
import hashingFunc from "@/service/hashingFunc";
import NextAuth from "next-auth"
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";


const users: {id:string, name: string; password: string}[] = [
  {id:'1',  name: "1", password: "1"},
];


const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        name: { label: "login", type: "name" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.name || !credentials?.password) return null;

        const currentUser = await prisma.user.findUnique({
          select: {
            id: true,
            name: true,
            password: true
          },
          where: {
            name: credentials.name
          }
        })
        
        if (currentUser && currentUser.password === hashingFunc(credentials.password)) {
          const {password, ...userWithoutPass} = currentUser

          return userWithoutPass as User;
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/admin/auth'
  }
};


const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }


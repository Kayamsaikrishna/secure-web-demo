import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
import { User } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("[AUTH] Missing email or password");
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          console.log("[AUTH] User not found:", credentials.email);
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          console.log("[AUTH] Invalid password for user:", credentials.email);
          return null;
        }

        console.log("[AUTH] Successful authentication for user:", credentials.email);
        return {
          id: user.id,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("[AUTH] JWT callback - setting user data:", user.id);
        return {
          ...token,
          id: user.id,
          role: (user as unknown as User).role,
        };
      }
      console.log("[AUTH] JWT callback - existing token");
      return token;
    },
    async session({ session, token }) {
      console.log("[AUTH] Session callback - setting session data");
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        },
      };
    },
  },
};
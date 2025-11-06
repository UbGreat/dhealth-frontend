import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            console.error("Login failed:", res.status);
            return null;
          }

          const data = await res.json();
          console.log("Response from backend:", data);

          // ✅ Your NestJS backend returns flat data, not nested under `user`
          if (!data || !data.access_token || !data.email) {
            console.error("Invalid response structure:", data);
            return null;
          }

          // ✅ Normalize data for NextAuth
          return {
            id: data.id,
            email: data.email,
            accessToken: data.access_token,
          };
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
      };
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

// ✅ Export for Next.js App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

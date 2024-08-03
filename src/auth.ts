import NextAuth from "next-auth"
import Google from 'next-auth/providers/google'

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  events: {
    signIn(message) {
      console.log('MESSAGE', message);
    },
  }
})
import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'

export const authoptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // more providers here if needed
    ],
}

export default NextAuth(authoptions);
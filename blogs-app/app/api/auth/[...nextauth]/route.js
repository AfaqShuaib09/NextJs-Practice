import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: 'cdff355078a02599656e',
            clientSecret: '12152c423f07fc8820e10505955a5e77d97fcc12',
        }),
    ],
};

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
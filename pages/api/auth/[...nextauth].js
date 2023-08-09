import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import client from "../../../configs/axios.config";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "158373193437-1r54oaaiqbg5of4a8kk0ip8thl7vqm2k.apps.googleusercontent.com",
            clientSecret: "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"
        }),
    ],
}
export default NextAuth(authOptions)
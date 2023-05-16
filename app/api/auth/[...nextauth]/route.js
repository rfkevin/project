import NextAuth  from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import jwt from 'jsonwebtoken';
import { connectToDB } from '@/utils/database';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/user';
import  {compare} from 'bcrypt'



const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }),
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials, req){
                console.log(credentials)
                try {
                    // check if user is in database
                    await connectToDB();
                    const result = await User.findOne({email: credentials.email})
                    if(!result){
                        throw new Error("check your email and password")
                    }
                    const checkPassword = await compare(credentials.password, result.password)
                    //compare passe word
                    if (!checkPassword || result.email !== credentials.email){
                        throw new Error("check your email and password")
                    }
                    
                    return result

                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        })

    ],

})

export {handler as GET,  handler as POST}
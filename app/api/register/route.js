import { connectToDB } from "../../../utils/fireWorks";
import User from "../../../models/user";
import { hash } from "bcrypt";

export const POST = async (req) => {
    const data = await req.json();
    try {
        await connectToDB();
        const { userName, fullName, password, dob, email, phone, address } = data;

        const checkEmail = await User.findOne({ email });
        if (checkEmail) {
            return new Response(JSON.stringify({ message: "Email Already use !" }), { status: 422 });
        }

        const checkUser = await User.findOne({ userName });
        if (checkUser) {
            return new Response(JSON.stringify({ message: "User name Already use !" }), { status: 422 });
        }

        const newUser = await User.create({
            userName,
            fullName,
            password: await hash(password, 12),
            dob,
            email,
            phone,
            address,
            type: "Clients",
        });

        return new Response(JSON.stringify({ status: true, user: newUser }), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};
import { connectToDB } from "../../../utils/database";
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

export const DELETE = async (req) => {
    const data = await req.json();
    try {
        await connectToDB();
        const { id } = data;

        const userToDelete = await User.findOne({ id });
        if (!userToDelete) {
            return new Response(JSON.stringify({ message: "User not found!" }), { status: 404 });
        }

        await User.deleteOne({ id });
        
        return new Response(JSON.stringify({ status: true, message: "User deleted successfully." }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};

export const GET = async (req) => {
    try {
        await connectToDB();
        const user = await User.find();
        if (!user) {
            return new Response(JSON.stringify({ message: "User not found!" }), { status: 404 });
        }
        return new Response(JSON.stringify({ user }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};

export const PUT = async (req) => {
    const { id } = req.params;
    const data = await req.json();
    try {
        await connectToDB();
        const userToUpdate = await User.findById(id);
        if (!userToUpdate) {
            return new Response(JSON.stringify({ message: "User not found!" }), { status: 404 });
        }

        const updatedUser = await Product.findByIdAndUpdate(id, { ...data }, { new: true });
        
        return new Response(JSON.stringify({ status: true, product: updatedUser }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};
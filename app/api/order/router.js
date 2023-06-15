import { connectToDB } from "../../../utils/database";
import Order from "../../../models/order";
export const GET = async (req) => {
    try {
        await connectToDB();
        const orders = await Order.find();
        if (!product) {
            return new Response(JSON.stringify({ message: "Order not found!" }), { status: 404 });
        }
        return new Response(JSON.stringify({ orders }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { email, products, total } = data;
        const newOrdres = await Order.create({
            userId,
            products,
            total
        })
        return new Response(JSON.stringify({ status: true, user: newOrdres }), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
}
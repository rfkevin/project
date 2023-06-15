import { connectToDB } from "../../../utils/database";
import Product from "../../../models/product";

export const POST = async (req) => {
    const data = await req.json();
    try {
        await connectToDB();
        const { title, subtitle, categories, type, marque, years, raters, price, quantity } = data;
        console.log
        const titleItem = await Product.findOne({ title });
        if (titleItem) {
            return new Response(JSON.stringify({ message: "Product Already exists !" }), { status: 422 });
        }

        const newProduct = await Product.create({
            title,
            subtitle,
            categories,
            type,
            marque,
            years,
            raters,
            price,
            quantity,
            type: "Produits",
        });

        return new Response(JSON.stringify({ status: true, user: newProduct }), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};

export const DELETE = async (req) => {
    const data = await req.json();
    try {
        await connectToDB();
        const { title } = data;

        const productToDelete = await Product.findOne({ title });
        if (!productToDelete) {
            return new Response(JSON.stringify({ message: "Product not found!" }), { status: 404 });
        }

        await Product.deleteOne({ title });
        
        return new Response(JSON.stringify({ status: true, message: "Product deleted successfully." }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};

export const GET = async (req) => {
    try {
        await connectToDB();
        const product = await Product.find();
        if (!product) {
            return new Response(JSON.stringify({ message: "Product not found!" }), { status: 404 });
        }
        return new Response(JSON.stringify({ product }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};
export const PUT = async (req) => {
    const { title } = req.params;
    const data = await req.json();
    try {
        await connectToDB();
        const productToUpdate = await Product.findBytitle(title);
        if (!productToUpdate) {
            return new Response(JSON.stringify({ message: "Product not found!" }), { status: 404 });
        }

        const updatedProduct = await Product.findBytitleAndUpdate(title, { ...data }, { new: true });
        
        return new Response(JSON.stringify({ status: true, product: updatedProduct }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};

import { connectToDB } from "../../../utils/fireWorks";
import Product from "../../../models/product";

export const POST = async (req) => {
    const data = await req.json();
    try {
        await connectToDB();
        const { id, title, note, subtitle, type, raters, prix } = data;

        const idItem = await Product.findOne({ id });
        if (idItem) {
            return new Response(JSON.stringify({ message: "Product Already exists !" }), { status: 422 });
        }

        const newProduct = await Product.create({
            id,
            title,
            note,
            subtitle,
            type,
            raters,
            prix,
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
        const { id } = data;

        const productToDelete = await Product.findOne({ id });
        if (!productToDelete) {
            return new Response(JSON.stringify({ message: "Product not found!" }), { status: 404 });
        }

        await Product.deleteOne({ id });
        
        return new Response(JSON.stringify({ status: true, message: "Product deleted successfully." }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};

export const GET = async (req) => {
    const { id } = req.params;
    try {
        await connectToDB();
        const product = await Product.findById(id);
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
    const { id } = req.params;
    const data = await req.json();
    try {
        await connectToDB();
        const productToUpdate = await Product.findById(id);
        if (!productToUpdate) {
            return new Response(JSON.stringify({ message: "Product not found!" }), { status: 404 });
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, { ...data }, { new: true });
        
        return new Response(JSON.stringify({ status: true, product: updatedProduct }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
    }
};

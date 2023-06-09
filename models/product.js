import {Schema, model, models} from 'mongoose';

// users model in database

const ProductSchema = new Schema ({
    id : {
        type : String,
        unique: [true, 'product already exist'],
    },

    title : {
        type : String,
    },
    subtitle : {
        type: String,
        required: [true, "subtitle is required"],
    },
    categories: {
        type : String,
        required : [true, "categories is required"]
    },    
    type : {
        type : String,
        required: [true, "type of product is required"],
    },
    marque : {
        type : String,
    },
    years: {
        type : Number,
    },
    raters : {
        type : Number,

    },
    price : {
        type : Number,
        required: [true, "price is required"],
    },
});

//check is model already exist and if not add it
const Product = models.Product || model ("Product", ProductSchema);

export default Product;
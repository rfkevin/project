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
    note : {
        type : Schema.Types.Mixed,  
    },
    subtitle : {
        type: String,
        required: [true, "subtitle is required"],
    },    
    type : {
        type : String,
        required: [true, "type of product is required"],
    },
    raters : {
        type : Number,

    },
    prix : {
        type : Number,
        required: [true, "prix is required"],
    },
});

//check is model already exist and if not add it
const Product = models.Product || model ("Product", ProductSchema);

export default Product;
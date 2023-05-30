import {Schema, model, models} from 'mongoose';

// users model in database

const UserSchema = new Schema ({
    email : {
        type : String,
        unique: [true, 'Email already exist'],
        required: [true, "Email is required"]
    },
    password : {
        type : String,
        required: [true, "Password is required"]
    },
    type : {
        type : String,
        required: [true, "contact us"]
    },
    userName : {
        type : String,
        unique: [true, 'User name already use'],
        required: [true, "User name is required"]
    },
    fullName : {
        type : String,
        required: [true, "Name is required"]
    },
    dob : {
        type : String,
        required: [true, "your age is required"]
    },
    image : {
        type: String
    },
    address : {
        type: String
    },
    phone : {
        type: String
    },
});

//check is model already exist and if not add it
const User = models.User || model ("User", UserSchema);

export default User;
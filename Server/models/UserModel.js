import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
{
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpass: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
    

},

{timeStamps: true}

)

const UserModel = mongoose.model("Users", UserSchema)
export default UserModel


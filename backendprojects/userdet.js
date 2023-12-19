const mongoose= require('mongoose');

const userDetailSchema= new mongoose.Schema(
    {
        username: {
            type: String,

        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            unique: true,
        }
    }  
);

const collection = new mongoose.model("user" , userDetailSchema);

module.exports ={
    collection,
}
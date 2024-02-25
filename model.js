import { Schema,model } from "mongoose";

// const 



const blogSchema = new Schema({
    _id: String,
    title: String,
    body: String,
    dateandtime: String,
    user: String
});


export const Blog = model('Blog', blogSchema);


// export default Blog = model('Student', blogSchema);


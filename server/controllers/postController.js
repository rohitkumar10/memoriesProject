import PostModel from './../models/postModel.js'

export const getPosts = async (req, res) => {
    try {
        const postModels = await PostModel.find();

        res.status(200).json(postModels);

        // res.send('THIS WORKS');
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostModel(body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

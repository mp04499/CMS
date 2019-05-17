const User = require('../db/models/user');
const Post = require('../db/models/post');
const argon2 = require('argon2');
const jsonwebtoken = require('jsonwebtoken');

const resolvers = {
    RootQuery: {
        async user(root, { id }, context) {
            return await User.findById(id);
        },
        async users(root, args, context) {
            return await User.find({});
        },
        async me(root, args, { user }) {
            if (!user)
                throw new Error('You are not logged in');

            return await User.findById(user.id);
        },
        async post(root, { id }, context) {
            return await Post.findById(id);
        },
        async posts(root, args, context) {
            return await Post.find({});
        }
    },
    RootMutation: {
        async createUser(root, { input }, context) {
            const hash = await argon2.hash(input.password)
            const newInput = await { ...input, password: hash };

            return await new User(newInput).save();
        },
        async updateUser(root, { id, input }, context) {
            return await User.findByIdAndUpdate(id, input);
        },
        async deleteUser(root, { id }, context) {
            return await User.findByIdAndDelete(id);
        },
        async login(root, { input }, context) {
            const user = await User.findOne({ email: input.email });

            if (!user)
                throw new Error('Email was not found');

            const valid = await argon2.verify(user.password, input.password);
            if (!valid)
                throw new Error('Passwords did not match');

            const token = await jsonwebtoken.sign({
                id: user.id,
                email: user.email
            }, process.env.SECRET_KEY, { expiresIn: '2w' });

            return await { token, user };
        },
        async createPost(root, { input }, { user }) {
            const post = await new Post({ message: input.message, author: user.id })
                .save();

            const finishedPost = await Post.findById(post.id)
                .populate('author')
                .exec();

            await User.findByIdAndUpdate(user.id, { posts: [...finishedPost.author.posts, finishedPost.id] });

            return await finishedPost;
        }
    }
}

module.exports = resolvers;
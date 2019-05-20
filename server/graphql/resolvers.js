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
        async posts(root, args, { user }) {
            const { posts } = await User.findById(user.id).populate('posts').exec();
            return posts;
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

            context.res.cookie(process.env.COOKIE_NAME, token, {
                resave: false,
                saveUninitialized: true,
                httpOnly: true,  // dont let browser javascript access cookie ever
                secure: false, // only use cookie over https
                ephemeral: true // delete this cookie while browser close 
            });
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
    },
    Post: {
        async author({ id }) {
            return await User.findOne({ posts: id });
        }
    },
    User: {
        async posts({ id }) {
            const { posts } = await User.findById(id).populate('posts').exec();
            return posts;
        }
    }
}

module.exports = resolvers;
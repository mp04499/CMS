const User = require('../db/models/user');
const Post = require('../db/models/post');
const handlePass = require('../auth/handlePass');
const { PubSub } = require('graphql-subscriptions');

const POST_CHANNEL = 'POST_CHANNEL';
const pubsub = new PubSub();


const resolvers = {
    RootQuery: {
        user: async (root, { id }, context) => {
            return await User.findById(id);
        },
        users: async (root, args, context) => {
            return await User.find({});
        },
        me: async (root, args, { user }) => {
            if (!user)
                throw new Error('You are not logged in');

            return await User.findById(user.id);
        },
        post: async (root, { id }, context) => {
            return await Post.findById(id);
        },
        posts: async (root, args, { user }) => {
            const { posts } = await User.findById(user.id).populate('posts').exec();
            return posts;
        }
    },
    RootMutation: {
        createUser: async (root, { input }, context) => {
            try {
                const newInput = await handlePass.hashPass(input);

                return await new User(newInput).save();
            } catch (error) {
                throw new Error(error);
            }
        },
        updateUser: async (root, { id, input }, context) => {
            return await User.findByIdAndUpdate(id, input);
        },
        deleteUser: async (root, { id }, context) => {
            return await User.findByIdAndDelete(id);
        },
        login: async (root, { input }, context) => {
            const user = await User.findOne({ email: input.email });

            if (!user)
                throw new Error('Email was not found');

            const isValid = await handlePass.isValid(input.password, user.password);

            if (!isValid)
                throw new Error('Passwords did not match');

            try {
                const token = await handlePass.createToken(user.id, user.email);
                context.res.cookie(process.env.COOKIE_NAME, token, process.env.COOKIE_SETTINGS);

                return { token, user };

            } catch (error) {
                throw new Error(error)
            }


        },
        createPost: async (root, { input }, { user }) => {

            if (!user)
                throw new Error('Not logged in!')

            const post = await new Post({ message: input.message, author: user.id })
                .save();

            const postAdded = await Post.findById(post.id)
                .populate('author')
                .exec();

            await User.findByIdAndUpdate(user.id, { posts: [...postAdded.author.posts, postAdded.id] });

            await pubsub.publish(POST_CHANNEL, { postCreated: postAdded })
            console.log(pubsub);

            return postAdded;
        }
    },
    RootSubscription: {
        postCreated: {
            subscribe: () => pubsub.asyncIterator([POST_CHANNEL])
        }
    },
    Post: {
        author: async ({ id }) => {
            return await User.findOne({ posts: id });
        }
    },
    User: {
        posts: async ({ id }) => {
            const { posts } = await User.findById(id).populate('posts').exec();
            return posts;
        }
    }
}

module.exports = resolvers;
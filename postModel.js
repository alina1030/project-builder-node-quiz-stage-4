const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {   id:Number,
        question: 'String',
        options:{
            id:Number,
            A:'String',
            B:'String',
            C:'String'
        },
        answer:{
            id:Number,
            answer:'String'
        }
    }
)

// const Post = mongoose.model('Post',schema);
// module.exports = Post;

const question = mongoose.model('question',schema);
module.exports = question;
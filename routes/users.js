import express from 'express';
import Comment from '../models/comment';

const router = express.Router();

router.post('/comment', (req, res, next) => {
    console.log(req.body);
    const comment = new Comment(req.body);
    comment.save();
    res.send({msg: "ok"});
})

router.get('/comments', (req, res, next) => {
    const comments = Comment.find({})
        .then(comments => res.send(comments))
        .catch(err => res.send({ err }));
});

export default router;
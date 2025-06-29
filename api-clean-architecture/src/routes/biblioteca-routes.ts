import express from 'express';
import { createPost, listPosts} from '../controllers/biblioteca-controller';

var router = express.Router();

router.post('/books', createPost);
router.get('/books', listPosts);

export default router; 
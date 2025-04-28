import express from 'express';
import { signup } from '../controllers/authController';

const router = express.Router();

router.post('/signup', (req, res) => {
  signup(req, res).catch(err => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });
});

export default router;

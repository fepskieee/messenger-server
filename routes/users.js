import express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
  res.jsonp({ message: '/users' });
});

export default router;

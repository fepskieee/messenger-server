import express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
  res.jsonp({ message: '/index' });
});

export default router;

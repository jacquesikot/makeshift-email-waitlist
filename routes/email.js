var express = require('express');
var router = express.Router();

const firebaseInit = require('../firebase');

const db = firebaseInit();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('email server');
});

router.post('/', async function (req, res, next) {
  try {
    await db.collection('ricive-waitlist-emails').add({
      name: req.body.name,
      email: req.body.email,
    });

    res.send('sent to firebase');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error sending to firebase');
  }
});

module.exports = router;

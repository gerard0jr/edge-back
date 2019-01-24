const express = require('express');
const router  = express.Router();
const connection   = require('../helpers/database')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/changeValue', (req,res,next) => {
  connection.query( `UPDATE numbers SET number = ${Object.keys(req.body)[0]} WHERE id_number = 1;`, 
    function(error, results) {
      if (error) throw error
      res.json(results)
    })
})

router.get('/getValue', (req,res,next) => {
  connection.query( `SELECT * FROM numbers WHERE id_number = 1;`, 
    function(error, results) {
      if (error) throw error
      res.json(results)
    })
})

module.exports = router;

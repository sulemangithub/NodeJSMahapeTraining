var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //db method..

  let data = "This is an example";

  let employees = [
        {empid:100,empname:"sachin gupta",salary:5000},
        {empid:100,empname:"sachin gupta",salary:5000},
        {empid:100,empname:"sachin gupta",salary:5000},
        {empid:100,empname:"sachin gupta",salary:5000}
  ];

  res.render('index', { title: 'Express',data:data,employees:employees });
});

module.exports = router;

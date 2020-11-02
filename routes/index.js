var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/calc', (req, res) => {
  let notify = "";
  let result = 'a';
  let firstNum = req.body.firstNum;
  let secondNum = req.body.secondNum;
  let resNum = "";

  let plusRad = "checked";
  let minusRad = "checked";
  let multiplyRad = "checked";
  let divideRad = "checked";

  let operation = req.body.operation;

  let inp1 = parseFloat(firstNum);
  let inp2 = parseFloat(secondNum);

      if (operation === "plus")
      {
        result = inp1 + inp2;
        //plusRad = "checked";
      } else if (operation === "minus")
      {
        result = inp1 - inp2;
        //minusRad = true;
      } else  if (operation === "multiply")
      {
        result = inp1 * inp2;
        //multiplyRad = true;
      } else if (operation === "divide") {
        result = inp1 / inp2;
          //divideRad = true;
        }
    
  if (result === 'a')
  {
    resNum = "";
  } else {
    resNum = result.toString();
  }

  if (operation === "plus")
  {
    res.render('index', {
      firstNum,
      secondNum,
      resNum,
      notify,
      plusRad
    });
  } else if (operation === "minus")
  {
    res.render('index', {
      firstNum,
      secondNum,
      resNum,
      notify,
      minusRad
    });
  } else  if (operation === "multiply")
  {
    res.render('index', {
      firstNum,
      secondNum,
      resNum,
      notify,
      multiplyRad
    });
  } else if (operation === "divide") {
    res.render('index', {
      firstNum,
      secondNum,
      resNum,
      notify,
      divideRad
    });
  } else {
    res.render('index', {
      firstNum,
      secondNum,
      resNum,
      notify
    });
  }

});

module.exports = router;

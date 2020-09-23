var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res, next) {
    const data = {
        data: {
            msg: "Hello World"
        }
    };

    res.json(data);
});

module.exports = router;
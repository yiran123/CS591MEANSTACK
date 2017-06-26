/**
 * Created by yiranpan on 6/26/17.
 */
const express = require('express');
const router = express.Router();

const googlesearch = require("google")
googlesearch.resultsPerPage = 20;

router.get('/:name', function(req, res, err) {
    let search = req.params.name
    googlesearch(search, function (error, response) {
        // console.log(response)
        if(error) {res.send(error)}
        else(res.json(response))
    });
})

module.exports = router;
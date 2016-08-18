var express = require('express');
var router = express.Router();

var startups =[
  {id:0, name: 'dropbox', location: 'california', industry: 'productivity'},
  {id:1, name: 'facebook', location: 'california', industry: 'social'},
  {id:2, name: 'uber', location: 'california', industry: 'transportation'}
]

router.get('/:resource', function(req, res, next) {
  
  var resource = req.params.resource

  if (resource == 'startup'){

    res.json({
      confirmation:'success',
      startups: startups
    })

  }

});

module.exports = router;

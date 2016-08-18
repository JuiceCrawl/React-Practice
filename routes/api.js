var express = require('express');
var router = express.Router();

var startups =[
  {id:0, name: 'dropbox', location: 'california', industry: 'productivity', featured:'no'},
  {id:1, name: 'facebook', location: 'california', industry: 'social', featured:'no'},
  {id:2, name: 'uber', location: 'california', industry: 'transportation', featured:'yes'}
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

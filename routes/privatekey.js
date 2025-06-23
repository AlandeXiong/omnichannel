var jwt = require('jsonwebtoken');
var fs = require('fs');
var express = require('express');
var router = express.Router();

function generateJwtToken() {
    var privateKEY  = fs.readFileSync('./keys/private.key', 'utf8');
    const secondsSinceEpoch = Math.round(Date.now()/ 1000);
    const oneHour = 60*60;

    var signOptions = {
      algorithm: 	"RS256"
    };

    var jwtPayload = {
        "sub": "66cb446f-5e43-ea11-a812-000d3a24c087", //contactid in Dynamics
        "preferred_username": "k123@test.com",
        "phone_number": "",
        "given_name": "alade",
        "family_name": "Xiong",
        "email": "123@test.com",
        "iat": secondsSinceEpoch,
        "exp": secondsSinceEpoch + oneHour,
        "iss": "omnichannel-custom-portal.azurewebsites.net"
    };

    return jwt.sign(jwtPayload, privateKEY, signOptions);
}

/* GET privatekey. */
router.get('/', function(req, res){
    var token = generateJwtToken();
    console.log(token);

    res.charset = 'utf-8'
    res.set({
        'content-type': 'application/jwt'
    }).send(token);
});

module.exports = router;
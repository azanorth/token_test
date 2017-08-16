const jwt = require("jsonwebtoken");

module.exports = (app) => {

app.get('/encode', (req, res) =>{
  res.end(jwt.sign(req.query, 'secret', {expiresIn: '30s'}));
});

app.get('/decode', (req, res) =>{

  jwt.verify(req.query.token, 'secret', (err, decoded) => {
    if (err != null) {
      err = {
        name: 'TokenExpiredError',
        message: 'jwt expired'
      }
      res.end(err.message);
    } else {
      res.end(decoded.token);
    }
  });

});

}

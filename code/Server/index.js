// https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
/* 
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

var express = require('express'); // control-shift-S to bring up shell in repl.it and npm install express / other packages
var bodyParser = require('body-parser')
var app = express();
var port = 5000; // the port is automatically routed by the repl.it domain

mongoose = require('mongoose');
Item = require('./model/model.js');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise; // for asynchronous callbacks
mongoose.connect('mongodb+srv://Rich:Japan26@cluster0.urdoo.mongodb.net/RestaurantDB?retryWrites=true&w=majority'); // set up at mongodb.com

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); // what does this do?
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// From: https://enable-cors.org/server_expressjs.html
// A simple and insecure example to allow all CORS requests
// Add this to your express server's index.js
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next(); // what does this do?
});

var routes = require('./routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


'use strict';

const Imports = require('./imports.js');

//  MARK:- Setup additional variables
var baseRoutes = Imports.path.join(__dirname, '/routes/');
var port = process.env.PORT || Imports.configs.port;

//  MARK:- Set up express app.
var app = Imports.express();
app.use(
    Imports.express.json(
        { 
            limit: '500mb'
        }
    )
);
app.use(
    Imports.express.urlencoded(
        { 
            limit: '500mb', 
            extended: true, 
            parameterLimit: 50000 
        }
    )
);
app.set(
    'views', 
    Imports.configs.baseViews
);
app.set(
    'view engine', 
    'ejs'
);
app.use(
    express.static(
        Imports.configs.basePublicPath,
        { 
            maxage: Imports.configs.oneDay * 21 
        }
    )
);
app.use(
    session(
        configs.appSession
    )
);

//  MARK:- Set up NodeCache
var nodeCache = new NodeCache({ 
    stdTTL: 0, 
    checkperiod: 604800,
    useClones: true
});

//  MARK:- Set up routes.
var viewsController = require(
    path.join(
        baseRoutes, 
        '/public/v1/main.js'
    )
);
var apiController = require(
    path.join(
        baseRoutes, 
        '/api/v1/index.js'
    )
);

//  MARK:- Use Routes
app.use(
    '/', 
    viewsController
);
app.use(
    '/api/v1', 
    apiController
);

//  MARK:- Create catch all's
app.all('/assets/*', function(req, res) {
    res.sendStatus(404);
});

app.all('/data/*', function(req, res) {
    res.sendStatus(404);
});

//  MARK:- Configure & Start server
var httpServer = http.createServer(app);
httpServer.setTimeout(72000000);
httpServer.timeout = 72000000;
httpServer.agent= false;
httpServer.listen(
    port, 
    function() {
        console.log('Rooted running on port ' + port + '.');
        firebase.setup();
    }
);

module.exports.app = function retrieveAppInstance(callback) {
    callback(app);
}

module.exports.firebase = function retrieveFirebaseInstance(callback) {
    callback(firebase);
}

module.exports.cache = function retrieveCacheInstance(callback) {
    callback(nodeCache);
}
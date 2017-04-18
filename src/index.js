const ghost = require('ghost');
const path = require('path');
const express = require('express');
const config = path.join(__dirname, './config.js');
const apiRoutes = require('./routes');
const parentApp = express();

parentApp.use(apiRoutes);

ghost({ config }).then(ghostServer => {
  parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
  ghostServer.start(parentApp);
});

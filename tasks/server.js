const nodemon = require('nodemon');
const path = require('path');
const appPath = path.join(__dirname, '../src');

module.exports = function() {
  const server = nodemon({
    script: path.join(appPath, 'index.js'),
    watch: [
      path.join(appPath, '**/*'),
      '!' + path.join(appPath, 'ghost-content/data'),
      '!' + path.join(appPath, 'ghost-content/images'),
    ],
    ext: 'js html',
    env: { NODE_ENV: 'development' },
  });
  server
    .on('restart', () => console.log('server restarted...'))
    .on('crash', () => {
      console.error('server crashed...\n');
      // server.emit('restart', 5); // Restart server after 5 seconds
    });
  return server;
};

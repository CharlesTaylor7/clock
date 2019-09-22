require('ignore-styles');

process.env.NODE_ENV = 'development';

require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['es2015', 'react-app']
});

require('./main');

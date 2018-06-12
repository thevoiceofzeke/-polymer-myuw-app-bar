const path = require('path');

module.exports = {
    entry: {
        app: './src/myuw-app-bar.js'
    },
    output: {
        filename: 'myuw-app-bar.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [],
    },
}
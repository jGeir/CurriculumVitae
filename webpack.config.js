const path = require('path');

module.exports = {
    module: {
        rules: [{
            test: /\.styl$/,
            use: ['style-loader', 'css-loader', 'stylus-loader', {
                loader: 'style-resources-loader',
                options: {
                    patterns: [
                        path.resolve(__dirname, 'src/styles/*.styl'),
                    ],
                    injector: (source, resources) => {
                        const combineAll = type => resources
                            .filter(({ file }) => file.includes(type))
                            .map(({ content }) => content)
                            .join('');

                        return combineAll('variables') + combineAll('mixins') + source;
                    }
                }
            }]
        }]
    },

    // ...
}
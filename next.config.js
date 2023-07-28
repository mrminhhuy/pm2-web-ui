const withCSS = require('@zeit/next-css');

// module.exports = withCSS();

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/',
                destination: '/cicd/api/'
            },
            {
                source: '/bulma/',
                destination: '/cicd/bulma/'
            },
            {
                source: '/img/',
                destination: '/cicd/img/'
            }
        ]
    },
    assetPrefix: 'https://ttttykhoa-staging.e-plus.vn/cicd'
}

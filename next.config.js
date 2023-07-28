const withCSS = require('@zeit/next-css');

// module.exports = withCSS();

module.exports = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/cicd'
            }
        ]
    }
}

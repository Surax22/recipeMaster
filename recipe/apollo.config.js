// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'recipe',
        // URL to the GraphQL API
        url: 'http://localhost:8081/v1/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }
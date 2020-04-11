const sassResourcesLoader = require('craco-sass-resources-loader');
const cracoAlias = require('craco-alias');


module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: ['./src/stylesheets/variables/_sizes.scss']
      }
    },
  {
    plugin: cracoAlias,
    options: {
      source: 'tsconfig',
      baseUrl: './src',
      tsConfigPath: './tsconfig.extend.json'
    }
  }
  ]
}
module.exports = {
  name: 'humhub',
  default: ["php", "mysql"],
  masonJson: {
  	php: require('./mason-json/php.js'),
  	mysql: require('./mason-json/mysql.js')
  },
  hooks: []
}
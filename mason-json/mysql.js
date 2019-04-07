module.exports = {
  name: 'mysql',
  image: 'mysql',
  type: 'service',
  volumes: {
    './storage/data/mysql':'/var/lib/mysql'
  },
  ports: ["3306:3306"],
  command: "--sql-mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION",
  environment: {
    'MYSQL_DATABASE': 'demo',
    'MYSQL_USER': 'demo',
    'MYSQL_PASSWORD': 'secret',
    'MYSQL_ROOT_PASSWORD': 'root'
  }
}
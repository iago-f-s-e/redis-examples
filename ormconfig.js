const root = process.env.NODE_ENV === 'production' ? 'dist' : 'src'
const { connectionOptions } = require(`${root}/infra/config`)

module.exports = connectionOptions
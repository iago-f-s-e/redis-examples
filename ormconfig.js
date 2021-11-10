const root = process.env.NODE_ENV === 'production' ? 'src' : 'dist'
const { connectionOptions } = require(`${root}/infra/config`)

module.exports = connectionOptions
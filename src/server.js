const app = require('./app')
const mongoConnection = require('./database/index')


app.listen(process.env.PORT || 3333);
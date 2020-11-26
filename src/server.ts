import app from './app'
import database from './database/database'

database.sync({
    force: true
})

app.listen(3001)
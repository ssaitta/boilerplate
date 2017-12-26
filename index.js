const app = require('./server')
const port = 3000
const db = require('./server/db')


db.sync({force: true})
    .then(()=>{
        app.listen(port, function(){
            console.log(`what's up? I'm listening on port ${port}`)
        });
    }
)
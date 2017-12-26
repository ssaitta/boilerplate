const app = require('./server')
const port = 3000


app.listen(port, function(){
    console.log(`what's up? I'm listening on port ${port}`)
});
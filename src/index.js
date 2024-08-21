import app from "./app"

app.listen(app.get('port'))
console.log('object')
console.log(`server http://localhost:${app.get('port')}`, )

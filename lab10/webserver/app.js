const express = require('express')
const app = express()

app.use(express.static('files'))


//app.get('/', (req, res) => res.send('READY TO SERVE'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

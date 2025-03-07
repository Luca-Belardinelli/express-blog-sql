// RICHIAMIAMO EXPRESS
const express = require('express')
// INALIZZAZIONE EXPRESS
const app = express()
// DEFINIAMO LA PORTA
const port = 3000
// IMPORTIAMO IL ROUTER
const postsRouter = require('./routers/posts')


// importiamo il middleware di CORS
var cors = require('cors')


// REGISTRO IL BODY-PARSER PER JSON
app.use(express.json());


// registro il middleware di CORS
app.use(cors())

// DEFINIAMO LA PRIMA ROTTA
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// ROUTER
app.use("/posts", postsRouter)


// AVVIAMO IL SERVER METTENDELO IN ASCOLTO SULLA PORTA INDICATA
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 8080

console.log("dasdsa")

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/destination", (req, res) => {
    res.sendFile(__dirname + "/html/destination-moon.html")
})

app.use(express.static(__dirname + "/static"))

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})
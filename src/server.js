// Importing Modules
const express = require("express")
const morgan = require("morgan")

//Importing Routers
const hamburgerRouter = require("./Routes/hamburgers/router")
const orderRouter = require("./Routes/orders/router")


let orders = []

//middleWare
app.use(morgan("dev"))
app.use(express.json())

const app = express()
const port = 4000

//Routes
app.use(hamburgerRouter)

app.listen(port, (req, res) => {
    console.log(`Server running on http://localhost:${port}`)
})
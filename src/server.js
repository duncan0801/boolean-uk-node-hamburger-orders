// Importing Modules
const express = require("express")
const morgan = require("morgan")

//Importing Routers
const hamburgerRouter = require("./Routes/hamburgers/router")
const orderRouter = require("./Routes/orders/router")


let orders = []
const app = express()
const port = 4000

//middleWare
app.use(morgan("dev"))
app.use(express.json())



//Routing
app.use("/hamburgers", hamburgerRouter)
//use the hamburgerRouter to handle endpoints that start with /hamburgers

app.listen(port, (req, res) => {
    console.log(`Server running on http://localhost:${port}`)
})
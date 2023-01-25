const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const homeStartingContent =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reiciendis dolore animi, consectetur autem, atque id odit delectus dolor, vitae cumque illo numquam veniam iusto. Cupiditate odio labore totam? Voluptatibus?"
const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reiciendis dolore animi, consectetur autem, atque id odit delectus dolor,"
const contactContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. "

const app = express()

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", (req, res) => {
	res.render("home")
})

app.listen(4000, () => {
	console.log("App is listening on port 4000")
})

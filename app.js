const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const homeStartingContent =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea."

const aboutContent =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea."
const contactContent =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea."

const app = express()

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

let posts = []

app.get("/", (req, res) => {
	// res.render("home", { homeStartingContentEjs: homeStartingContent })
	res.render("home", { homeStartingContentEjs: homeStartingContent, posts: posts })
	// console.log(posts)
})

//about route
app.get("/about", (req, res) => {
	res.render("about", { aboutContentEjs: aboutContent })
})

//contact route

app.get("/contact", (req, res) => {
	res.render("contact", { contactContent: contactContent })
})

//compose route
app.get("/compose", (req, res) => {
	res.render("compose")
})

app.post("/compose", (req, res) => {
	let post = {
		title: req.body.postTitle,
		content: req.body.postBody
	}
	posts.push(post)
	res.redirect("/")

	// console.log(post)
})

//dynamic routes
app.get("/posts/:postName", (req, res) => {
	// console.log(req.params.postName)
	// console.log(posts)
	// for (let post = 0; post < posts.length; post++) {

	// }
	let requestedTitle = req.params.postName
	posts.forEach((post) => {
		let storedTitle = post.title

		if (storedTitle === requestedTitle) {
			console.log("Match Found")
		}
	})
})

app.listen(4000, () => {
	console.log("App is listening on port 4000")
})

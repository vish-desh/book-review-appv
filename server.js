const express = require("express");
const app = express();
const cors = require("cors");

const books = require("./booksdb.js");
const booksRouter = require("./routes/books.js");
const authRouter = require("./routes/auth.js");
const reviewsRouter = require("./routes/reviews.js");

app.use(cors());
app.use(express.json());

// ✅ Serve Static Files (index.html, styles.css, script.js)
app.use(express.static("public"));

// API Routes
app.use("/books", booksRouter);
app.use("/auth", authRouter);
app.use("/reviews", reviewsRouter);

// Default route -> load website
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

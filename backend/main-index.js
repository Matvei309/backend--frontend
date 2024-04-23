const express = require("express")
require("dotenv").config()

const app = express()
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', 'http://192.168.1.67:3000'); // разрешает принимать запрос c http://localhost:3000
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // какие методы в запросах разрешается принимать
  next();
});
app.use(express.json())
app.use("/api/catalog", require("./index-db"))
app.use((err, req, res, next) => {
  res.status(500).send(err)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})

